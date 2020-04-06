import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Observable } from 'rxjs';

const url:string = "http://localhost:5000/api/users" // use if running from CLI

@Injectable({
  providedIn: 'root'
})

export class UserService {
  login(username:string, password:string):Observable<User> {
    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  };
  list(): Observable<User[]>{
    return this.http.get(`${url}`) as Observable<User[]>;
  }
  get(id: any): Observable<User>{
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }
  change(user:User):Observable<any> {
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  };
  create(user:User):Observable<User> {
    return this.http.post(`${url}`, user) as Observable<User>;
  };
  remove(user: User): Observable<any>{
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
