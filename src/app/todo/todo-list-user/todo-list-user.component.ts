import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.class';
import { TodoService } from '../todo.service';
import { User } from 'app/user/user.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-todo-list-user',
  templateUrl: './todo-list-user.component.html',
  styleUrls: ['./todo-list-user.component.css']
})
export class TodoListUserComponent implements OnInit {

  todos: Todo[] = [];
  user: User;
  todo: Todo = new Todo()

  constructor(
    private todosvc: TodoService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit(): void {
    this.todo.assignedUserId = this.systemsvc.user.id;
    this.todosvc.listByUser(this.todo.assignedUserId).subscribe(
      res => {
        this.todos = res;
        console.debug("To-Do List for User: ", res);
      },
      err =>{
        console.error("Error getting To-Dos ", err);
     }
    );
    
  }

}
