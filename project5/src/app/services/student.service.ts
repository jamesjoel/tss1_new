import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl="http://localhost:3000/student";

  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get<any>(this.apiUrl);
  }

  saveData(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }


  

  deleteData(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
  }

  updateData(obj:any, id:any){
    return this._http.put<any>(this.apiUrl+"/"+id, obj);
  }

}
