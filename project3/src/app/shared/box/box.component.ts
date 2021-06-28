import { Component, OnInit } from '@angular/core';
import  { Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() abc:any;
  @Input() xyz:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
