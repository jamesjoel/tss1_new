import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  a=true;
  b=100;

  c="indore";

  x=100;
  y=26;


  constructor() { }

  ngOnInit(): void {
  }

}
