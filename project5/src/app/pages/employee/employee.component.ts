import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  emp=[
    {
      name : "rohit",
      age : 25,
      salary : 5400,
      gender : "male"
    },
    {
      name : "jaya",
      age : 22,
      salary : 7000,
      gender : "female"
    },
    {
      name : "nilesh",
      age : 23,
      salary : 8000,
      gender : "male"
    },
    {
      name : "aman",
      age : 31,
      salary : 6500,
      gender : "male"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
