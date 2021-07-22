import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  imgArr:any[]=[];
  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
  }
  do_upload(a:any){
    // the .files property only rec when we pass input type file
    // console.log(a.files[0]);
    let file = a.files[0];
    let form = new FormData();
    // we want form with enctype 
    form.append("image", file);

    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe((data)=>{
      // console.log(data);
      this.imgArr.push(data);
      
    })


  }
  // input type="Text", a.nativeElement.value

  /*

  <form enctype="multipart/form-data" method="post">
    <input type="file" name="image" />
  </form>

  */

}
