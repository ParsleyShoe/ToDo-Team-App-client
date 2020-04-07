import { Injectable } from '@angular/core';
import { User } from './user/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  
  user: User = new User();

  logout(): void {
    this.user = new User();
    this.router.navigateByUrl("/login");
  }

  constructor(
    private router: Router
  ) { }
}
