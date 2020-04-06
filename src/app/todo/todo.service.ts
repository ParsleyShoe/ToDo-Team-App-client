import { Injectable } from '@angular/core';
import { Todo } from './todo.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url:string = "http://localhost:5000/api/todo"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list(): Observable<Todo[]>{
    return this.http.get(`${url}`) as Observable<Todo[]>;
  }
  listByuser(id:any): Observable<Todo[]>{
    return this.http.get(`${url}/${id}`) as Observable<Todo[]>;
  }
  get(id: any): Observable<Todo>{
    return this.http.get(`${url}/${id}`) as Observable<Todo>;
  }
  change(todo:Todo):Observable<any> {
    return this.http.put(`${url}/${todo.id}`, Todo) as Observable<any>;
  };
  create(todo:Todo):Observable<Todo> {
    return this.http.post(`${url}`, Todo) as Observable<Todo>;
  };
  remove(todo: Todo): Observable<any>{
    return this.http.delete(`${url}/${todo.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
