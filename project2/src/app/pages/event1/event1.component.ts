import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.scss']
})
export class Event1Component implements OnInit {

  h = 100;
  w = 100;
  c = "red";
  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    //console.log("sdfgsd gsdfg sdfg");
    this.h = 500;
  }
  demo2(){
    this.c = "green";
  }
  demo3(){
    this.c = "blue";
  }
  demo4(){
    this.h++;
    this.w++;
  }

}
