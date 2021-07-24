import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginGuard implements CanActivate {
  constructor(private _router : Router, private _login : LoginService){ }
  canActivate(){
    if(this._login.isUserLoggedIn())
    {
      this._router.navigate(['/admin']);
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
