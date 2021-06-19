import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component implements OnInit {

  arr=["red", "green", "blue", "yellow", "pink"];

  constructor() { }

  ngOnInit(): void {
  }

}
