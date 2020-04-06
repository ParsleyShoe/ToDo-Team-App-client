import { User } from 'app/user/user.class';

export class Todo {
    id:number = 0;
    description:string = "";
    isDone:boolean = false;
    category:string = "";
    userId:number = null;
    assigneduserId: number = null;
    user: User = null;
    duedate:string = "";
    status:string = "Default";
    constructor(){}
    
}