import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User= new User;

  save():void{
    this.usersvc.change(this.user).subscribe(
      res=>
      {
        console.debug("User change success", res);
        this.router.navigateByUrl("/users/list");
      },
      err=>{
        console.error("error changing user:", err);
      }
    );
  }
  delete():void{
    this.usersvc.remove(this.user).subscribe(
      res=>
      {
        console.debug("User delete success", res);
        this.router.navigateByUrl("/users/list");
      },
      err=>{
        console.error("error deleting user:", err);
      }
    );
  }

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res=>{
        this.user=res;
        console.debug("User Edit:", res);
      },
      err=>{
        console.error("Error in Edit user:", err);
      }
    );
  }

}
