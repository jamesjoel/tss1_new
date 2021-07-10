import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl="http://localhost:3000/student";
  // apiUrl="http://localhost/tss11/project2/json.php";

  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get<any>(this.apiUrl);
  }

  saveData(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }


  // "http://localhost:3000/student/3"

  deleteData(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
  }




  updateData(obj:any, id:any){
    return this._http.put<any>(this.apiUrl+"/"+id, obj);
  }

}
