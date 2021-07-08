import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkNum, checkAge } from '../../helpers/user.validation';
/*
  FormGroup is a interface
  FormBuilder is a service
  Validators Class
*/


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

  userForm : FormGroup;

  isSubmit=false;

  constructor(private _users : UsersService, private _fb : FormBuilder) {
    
      this._users.getData().subscribe((data)=>{
        this.users = data;
      });

      this.userForm = this._fb.group({
        name : ["", Validators.required],
        age : [null, Validators.required],
        city : ["", Validators.required]
      },
      {
        validator : [checkNum(), checkAge()]
      });

   }

  ngOnInit(): void {
  }

  save(){
    this.isSubmit = true;

    if(this.userForm.invalid){
      return;
    }
    
    //console.log(this.userForm.value);
    //this.users.push(this.userForm.value);
  }

}
