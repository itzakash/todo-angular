import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My-Todo';

  ngOnInit() {
    $(document).ready(function () {
      // alert('we call alert from JQuery');
    });
  }
}
