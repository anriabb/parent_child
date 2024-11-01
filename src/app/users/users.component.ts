import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //parent-child
    @Input() inputData:any = 'data';
    ngOnInit(): void {
      console.warn(this.inputData);
    }

    //child-parent
    @Output() sendMessage = new EventEmitter<string>();
    receiveMessage(){
      this.sendMessage.emit("hello");
    }
}
