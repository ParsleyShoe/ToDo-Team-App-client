import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string = "";
  password:string = "";
  message:string = "";

  login(): any {
    this.usersvc.login(this.username, this.password).subscribe(
      res => {
        this.systemsvc.user = res;
        console.debug("Login complete.", res);
        //this.router.navigateByUrl(`/my-todos/${this.systemsvc.user.id}`);
        this.router.navigateByUrl("");
      },
      err => {
        console.error("Error during login:",err);
        this.message = "USER NOT FOUND";
        this.systemsvc.user = new User();
        return this.message;
      } 
    );
  }

  constructor(
    private usersvc: UserService,
    private systemsvc: SystemService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }

}
