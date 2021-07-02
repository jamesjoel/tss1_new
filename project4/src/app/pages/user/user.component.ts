import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users.service';

interface UserInterface{
  id? : number|null;
  name : string;
  age : number;
  city : string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:UserInterface[]=[];
  constructor(private _users : UsersService) {
    // this._http.get<any>("http://localhost:3000/users").subscribe((data)=>{
    //   this.users = data;
      
    // });
      this._users.getData().subscribe((data)=>{
        this.users = data;
      })

   }

  ngOnInit(): void {
  }

}
