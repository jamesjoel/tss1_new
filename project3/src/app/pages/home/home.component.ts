import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _hello : HelloService) { }

  ngOnInit(): void {
  }

  abc(){
    let ans = this._hello.demo(10, 25); 
    console.log(ans);
  }

  getData(){
    this._hello.getData();
  }

}
