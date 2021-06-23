import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event3',
  templateUrl: './event3.component.html',
  styleUrls: ['./event3.component.scss']
})
export class Event3Component implements OnInit {

  total = 0;
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("hello");
  }
  demo2(){
    console.log("--------------");
  }
  demo3(){
    console.log("*************");
  }

  count(a:any){
    //console.log(a.value); // <textarea>hello</textara>
    let x = a.value;
    // console.log(x.length);
    this.total = x.length;
  }

  test(a:any){
    console.log(a);
  }







  abc(a:any){
    console.log(a);
  }


  demo4(){
    console.log("my name is james");
  }

  demo5(){
    console.log("*************");
  }
}
