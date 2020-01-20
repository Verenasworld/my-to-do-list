import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value] = "title">
  <button>save</button>
  <p>The title is : {{ title }}</p>
  `
,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    title: string ='my title';

  constructor() { 
    this.changeTitle (' I love Angular ');
    }

  ngOnInit(){
    setTimeout(() => {
    this.title = 'this is not the title you looking for';
    }, 3000);
  }
 
  changeTitle(newTitle: string){
  this.title = newTitle;
}
}