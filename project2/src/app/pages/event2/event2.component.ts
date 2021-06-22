import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.scss']
})
export class Event2Component implements OnInit {

  l = 10;
  t = 10;
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    let a = Math.random(); 
    let b = a*800; 
    let c = Math.floor(b); 


    let x = Math.random(); 
    let y = x*600; 
    let z = Math.floor(y); 
    
    this.l = c;
    this.t = z;
    
  }
}

/*
0.4545 x 100 = 



*/
