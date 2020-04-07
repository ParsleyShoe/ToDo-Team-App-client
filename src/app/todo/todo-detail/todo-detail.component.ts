import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo.class';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo = new Todo();

  delete(): void{
    this.todosvc.remove(this.todo).subscribe(
      res => {
        //console.debug("To-Do deleted.", res);
        this.router.navigateByUrl("/all-todos"); // maybe should just go back a page?
      },
      err => console.error("Cannot delete To-Do:", err)
    );
  }

  constructor(
    private todosvc: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.todosvc.get(id).subscribe(
      res => this.todo = res,
      err => console.error("Error getting To-Do:", err)
    );
  }

}
