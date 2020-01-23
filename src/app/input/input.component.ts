import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value] = "title" 
          (keyup.enter)="changeTitle ($event.target.value)"
          #inputElement>
  <button (click)="changeTitle(inputElement.value)">
   Save
  </button>
  <p>The title is : {{ title }}</p>
  `
,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    title: string ='';

  @Output() submit: EventEmitter<string> = new EventEmitter;
r

  constructor() { 
    }

  ngOnInit(){
  }
 
  changeTitle(newTitle: string): void{
  this.submit.emit(newTitle);
}


}