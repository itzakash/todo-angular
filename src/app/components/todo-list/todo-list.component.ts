import { Component, OnInit } from '@angular/core';
import { Todo } from './../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idFortodo: number;
  beforeEditCache: string;
  filter: string;
  constructor() {}

  ngOnInit(): void {
    this.todoTitle = '';
    this.beforeEditCache = '';
    this.idFortodo = 3;
    this.filter = 'all';
    this.todos = [
      {
        id: 1,
        title: 'Learn Todo creation',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Learn Angular',
        completed: false,
        editing: false,
      },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idFortodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
    });

    this.todoTitle = '';
    this.idFortodo++;
    this.filter = 'active';
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(todo: Todo): void {
    if (todo.completed) {
      return;
    }

    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  updateTodo(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  remainingCount(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  atleastOnecompleted(): boolean {
    return this.todos.filter((todo) => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  checkAllTodo(): void {
    this.todos.forEach(
      (todo) => (todo.completed = (<HTMLInputElement>event.target).checked)
    );
  }

  todoFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    }

    return this.todos;
  }
}
