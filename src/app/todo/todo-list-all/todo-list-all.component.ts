import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.class';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-all',
  templateUrl: './todo-list-all.component.html',
  styleUrls: ['./todo-list-all.component.css']
})
export class TodoListAllComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todosvc: TodoService
  ) { }

  ngOnInit(): void {
    this.todosvc.list().subscribe(
      res => this.todos = res,
      err => console.error("Error getting ToDos ", err)
    );
  }

}
