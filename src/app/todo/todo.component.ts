import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public todoObject = [
    {
      id: 't-1',
      value: 'buy books',
      status: 'done'
    },
    {
      id: 't-2',
      value: 'buy veggies',
      status: 'in-progress'
    },
    {
      id: 't-3',
      value: 'buy car',
      status: 'done'
    }
  ]
}
