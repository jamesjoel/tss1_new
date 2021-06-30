import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  name="";
  obj={};

  abc = "Nilesh Pathak";

  constructor() { }

  ngOnInit(): void {
  }
  recChild(a:any){
    console.log(a);
    this.name=a;
  }



  childToParentRec(x:any){
    // console.log(x);
    this.obj = x;
  }
  x(a:any){
    // console.log(a);
    this.name = a;
  }




}
