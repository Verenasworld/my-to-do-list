import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: `
  {{ todoItem.title }}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;

  constructor() { }

  ngOnInit() {
  }

}