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
    private todo: TodoService
  ) { }

  ngOnInit(): void {
    this.todo.list().subscribe(
      res => {
        this.todos = res;
        console.debug("ToDo List ", res);
      },
      err =>{
        console.error("Error getting ToDos ", err);
      }
    );
  }

}
