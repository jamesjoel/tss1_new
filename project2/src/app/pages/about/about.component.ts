import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name="rohit";

  constructor() { }

  ngOnInit(): void {
  }

  demo1(a:any){
    // console.log(this.name);
    this.name=a;
  }

}