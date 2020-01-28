import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input class="todo-input"
          [value] = "title" 
          (keyup.enter)="changeTitle ($event.target.value)"
          [(ngModel)]="filterName"
          #inputElement>
  <button class="btn" (click)="changeTitle(inputElement.value)">
   Save
  </button>
  <button class="btn" (click)="onClear()">  
  Reset 
  </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    title: string ='';
    filterName:string;

  @Output() submit: EventEmitter<string> = new EventEmitter;


  constructor() { 
    }

  ngOnInit(){
  }
 
  changeTitle(newTitle: string): void{
  this.submit.emit(newTitle);
}

onClear() {
// on click reset the input field for new 
this.filterName = '';
}
}