import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageserviceService {
 private todoList;

  constructor() { 
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }
// get items
  get() {}

  // add a new item
  post(item) {}

  // update an item
  put(item, changes) {}

  // remove an item
  destroy(item) {}

}