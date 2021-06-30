import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-box4',
  templateUrl: './box4.component.html',
  styleUrls: ['./box4.component.scss']
})
export class Box4Component implements OnInit {

  @Input() abc:any;

  @Output() goToParent = new EventEmitter;

  // we have to create output event object
  @Output() childToParent = new EventEmitter;

  @Output() x = new EventEmitter;


  name = "rohit";
  obj = {
    a : "indore",
    b : "mumbai",
    c : "bhopal"
  }

  school = "The Stepping Stone";

  constructor() { }
  ngOnInit(): void {
  }

  demo(){
    this.goToParent.emit(this.name);
  }

  dbl(){
    this.childToParent.emit(this.obj);
  }

  demo2(){
    this.x.emit(this.school);
  }
}

//  <app-box4></app-box4>

