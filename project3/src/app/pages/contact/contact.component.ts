import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  obj={
    name : "",
    age : null
  };

  obj2={};
  
  users=[
    {
      name : "Nilesh",
      age : 25
    },
    {
      name : "Ankit",
      age : 22
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  add(){
    this.obj2 = this.obj;
  }

}
