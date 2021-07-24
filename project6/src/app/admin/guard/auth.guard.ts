import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _login : LoginService, private _router : Router){ }

  canActivate(){
    if(this._login.isUserLoggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(["/admin/login"]);
      return false;
    }
  }
  
}
