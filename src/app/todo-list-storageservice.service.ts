import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageserviceService {
 private todoList;

  constructor() { 
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

}