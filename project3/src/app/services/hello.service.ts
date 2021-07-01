import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HelloService {

  constructor(private _http : HttpClient) { }
  // the HttpClient service used for getting or sending data from API.

  demo(a:any, b:any){
    let x = a*b;
    return x;
  }

  calc(a:any, b:any){
    let x = a+b;
    return x;
  }

  getData(){
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
      console.log(data);
    });
  }

}

/*
.subscribe(function(data){

})



*/
