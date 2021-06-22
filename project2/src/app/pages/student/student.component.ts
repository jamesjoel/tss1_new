import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  a = "Show";
  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    if(this.a == "Show")
        this.a = "Hide";
    else
        this.a = "Show";
  }

}

/*


class Xyz{

  name = "rohit";

  demo(){
    console.log(this.name);
  }


}





















*/
