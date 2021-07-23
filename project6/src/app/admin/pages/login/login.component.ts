import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg="";
  admin={
    username : "",
    password : ""
  }
  constructor(private _login : LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this._login.do_login(this.admin).subscribe((data)=>{
      console.log("*****************");// 200 --- OK
    }, (errRespons)=>{
      console.log("--------------", errRespons.error);
      if(errRespons.error.type==1)
      {
        this.msg = "This Username and Password is Incorrct";
      }
      if(errRespons.error.type==2)
      {
        this.msg = "This Password is Incorrct";

      }
      
    });
  }

}
