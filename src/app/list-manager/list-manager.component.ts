import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todo-list.service';
@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>
 My {{ title }}
    </h1>

    <todo-input (submit)="addItem($event)"></todo-input>

    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item"></todo-item>
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  todoList;

  constructor(private todoListService:TodolistService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
}