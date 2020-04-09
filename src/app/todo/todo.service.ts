import { Injectable } from '@angular/core';
import { Todo } from './todo.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url:string = "http://localhost:5000/api/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list(): Observable<Todo[]>{
    return this.http.get(`${url}`) as Observable<Todo[]>;
  }
  get(id: any): Observable<Todo>{
    return this.http.get(`${url}/${id}`) as Observable<Todo>;
  }
  listByUser(id: any): Observable<Todo[]>{
    return this.http.get(`${url}/byuser/${id}`) as Observable<Todo[]>;
  }
  change(todo: Todo): Observable<any> {
    return this.http.put(`${url}/${todo.id}`, todo) as Observable<any>;
  };
  create(todo: Todo): Observable<Todo> {
    return this.http.post(`${url}`, todo) as Observable<Todo>;
  };
  remove(todo: Todo): Observable<any>{
    return this.http.delete(`${url}/${todo.id}`) as Observable<any>;
  }
  reject(todo: Todo): Observable<Todo> {
    return this.http.put(`${url}/reject/${todo.id}`, todo) as Observable<Todo>;
  }
  approve(todo: Todo): Observable<Todo> {
    return this.http.put(`${url}/approve/${todo.id}`, todo) as Observable<Todo>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
