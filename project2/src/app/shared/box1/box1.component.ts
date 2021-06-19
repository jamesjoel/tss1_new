import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})

export class Box1Component implements OnInit {

  a=100;
  name = "rohit";

  arr=["red", "green", "blue", "yellow", "pink", "black"];


  constructor() { }

  ngOnInit(): void {
  }
 

}
/*
  for()
  while()
  do...while()
  forEach()
*/