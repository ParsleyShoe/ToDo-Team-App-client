import { User } from 'app/user/user.class';

export class Todo {
    id:number = 0;
    description:string;
    isDone:boolean = false;
    category:string;
    userId:number;
    assignedUserId:number;
    dueDate:string;
    status:string = "Default";

    user: User;
    assignedUser: User;

    constructor() {}
}