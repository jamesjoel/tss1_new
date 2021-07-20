import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Child1Component } from '../../shared/child1/child1.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('myid') x! : ElementRef;

  @ViewChild(Child1Component) c! : Child1Component;

  a:any="";

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    // console.log(this.x.nativeElement);
    this.x.nativeElement.style.backgroundColor="blue";

    console.log(this.c.fullname);
    this.a = this.c.fullname;
  }

  demo(a:any){
    // console.log(a.innerHTML);
    a.style.backgroundColor = "red";
  }

}
