import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodolistService } from './todo-list.service';
import { TodoListStorageserviceService } from './todo-list-storageservice.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    InputComponent, 
    ItemComponent, 
    ListManagerComponent ],

  bootstrap:    [ AppComponent ],
  providers: [TodolistService, TodoListStorageserviceService]
})
export class AppModule { }
