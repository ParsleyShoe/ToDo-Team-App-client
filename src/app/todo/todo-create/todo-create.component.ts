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
    this.todo.assignedUserId = Number(this.todo.assignedUserId);
    this.todosvc.create(this.todo).subscribe(
      () => this.router.navigateByUrl("/all-todos"),
      err => console.error("Error creating ToDo item", err)
    )
  }
 
  constructor(
    private usersvc: UserService,
    private todosvc: TodoService,
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todo.assignedUserId = this.systemsvc.user.id;
    this.usersvc.list().subscribe(
      res => this.users = res,
      err => console.error("Error getting users", err)
    )
  }

}
