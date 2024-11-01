import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pch';
  
//parent-child
  users: User[] = [
    {name: 'anro', age:19},
    {name: 'maro', age: 18}
  ];

  //child-parent
  message: string='';
  receiveMessage(childmessage: string){
    this.message = childmessage;
  }

}
