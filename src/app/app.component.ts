import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
    <h1>
     Welcome to {{title}}
    </h1>
    <todo-input></todo-input>
    <ul>
      <li *ngFor ="let item of todoList">
      <todo-item [todoItem]="item"></todo-item>
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'todo';
  todoList =[
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
}
