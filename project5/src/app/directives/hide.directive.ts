import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor(private _ele : ElementRef) { }
  
  @HostListener('click') demo(){
    this._ele.nativeElement.style.display = "none";
  }

}
