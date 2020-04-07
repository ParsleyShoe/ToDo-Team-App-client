import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { SystemService } from 'app/system.service';
import { User } from 'app/user/user.class';
import { Todo } from '../todo.class';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
 
  todo: Todo = new Todo();
  users: User[] =[];

  save(): void{
    this.todo.userId = Number(this.todo.userId);
    this.todosvc.change(this.todo).subscribe(
      res => {
        console.debug("To-do:", res);
        this.router.navigateByUrl(`/todo/list-all`);
      },
      err => {console.error("Error editing To-do:",err);}
    );
  }

  approve(): void{
    this.todosvc.change(this.todo).subscribe(
      res => {
        console.debug("To-do Approved.", res);
        this.router.navigateByUrl(`/todo/list-all`);
      },
      err => {console.error("Error approving To-do:",err);}
    );
  } 

  reject(): void{
    this.todosvc.change(this.todo).subscribe(
      res => {
        console.debug("To-do Rejected.", res);
        this.router.navigateByUrl(`/todo/list-all`);
      },
      err => {console.error("Error rejecting To-do:",err);}
    );
  }

  constructor(
    private usersvc: UserService,
    private todosvc: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res =>{
        this.users = res;
        console.debug("User:", res);
      },
      err => {console.error("Error reading User:", err);}
    );
    let id = this.route.snapshot.params.id
      this.todosvc.get(id).subscribe(
        res =>{
          this.todo = res;
          console.debug("To-do:", res);
        },
        err => {console.error("Error on To-do:", err);}
      );
  }

}
