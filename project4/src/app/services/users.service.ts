import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get<any>("http://localhost:3000/users");
  }
}
/*
  return this._http.get();


  let x = demo.subcript();
  let y = x.demo1();
  let z = y.demo2();

  z.subscript(data=>{

  })
  
  




*/