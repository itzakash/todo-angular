import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AutofocusModule } from 'angular-autofocus-fix';

import * as $ from 'jquery';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
