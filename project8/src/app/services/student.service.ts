import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = "http://localhost:3000/api/student";
  constructor(private _http : HttpClient) {

   }

  getStudent(){
    return this._http.get<any>(this.apiUrl);
  }
}
