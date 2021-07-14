import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
// this service get the perticular tag here form, where 
// put that directives
@Directive({
  selector: '[appHello]'
})
// <h1 appHello></h1>
export class HelloDirective {

  constructor(private _ele : ElementRef) {
    this._ele.nativeElement.style.backgroundColor ="red";
   }
   @HostListener('click') demo(){
      this._ele.nativeElement.style.backgroundColor="blue";
   }

}
