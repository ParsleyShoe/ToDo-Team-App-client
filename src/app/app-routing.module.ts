import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';

import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { TodoAssignComponent } from './todo/todo-assign/todo-assign.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { TodoListAllComponent } from './todo/todo-list-all/todo-list-all.component';
import { TodoListUserComponent } from './todo/todo-list-user/todo-list-user.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },

  { path: "users/create", component: UserCreateComponent },
  { path: "users/edit/:id", component: UserEditComponent },

  { path: "todo/assign/:id", component: TodoAssignComponent },
  { path: "todo/create", component: TodoCreateComponent },
  { path: "todo/detail/:id", component: TodoDetailComponent },
  { path: "todo/edit/:id", component: TodoEditComponent },
  { path: "all-todos", component: TodoListAllComponent },
  { path: "my-todos/:userid", component: TodoListUserComponent },

  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
