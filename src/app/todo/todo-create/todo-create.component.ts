import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/user.service';
import { Router } from '@angular/router';
import { Todo } from '../todo.class';
import { User } from 'app/user/user.class';
import { TodoService } from '../todo.service';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  todo: Todo = new Todo();
  users: User[] = [];

  save():void {
    this.todo.userId = Number(this.systemsvc.user.id);
    this.todosvc.create(this.todo).subscribe(
      res => {
        this.router.navigateByUrl("/todo/listall"); 
      },
      err => {
        console.error("Error creating ToDo item", err);
      }
    )
  }
 
  constructor(
    private usersvc: UserService,
    private todosvc: TodoService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.error("Error getting users", err);
      }
    )

  }

}
