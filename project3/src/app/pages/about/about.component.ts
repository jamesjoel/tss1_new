import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name="rohit";
  city ="mumbai";

  obj={
    a : "red",
    b : "blue"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
