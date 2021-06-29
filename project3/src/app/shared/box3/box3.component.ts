import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.scss']
})
export class Box3Component implements OnInit {

  @Input() childUsers:any;
  @Input() childObj:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
