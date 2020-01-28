import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

 private  todoList = [
   
  ];
  constructor() { }

getTodoList() {
    return this.todoList;
  }

addItem(item): void {
  this.todoList.push(item);
}
}