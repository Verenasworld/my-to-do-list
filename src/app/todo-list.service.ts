import { Injectable } from '@angular/core';
import { TodoListStorageserviceService } from './todo-list-storageservice.service';
@Injectable()
export class TodolistService {

 private  todoList = [
   
  ];
 
  constructor(private storage: TodoListStorageserviceService) { }

getTodoList() {
    return this.storage.get();
  }

addItem(item): void {
  this.todoList.storage.post(item);

}

removeItem(item){
  return this.storage.destroy(item);
}
}