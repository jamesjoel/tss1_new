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
      salary : 5000,
      city : "indore"
    },
    {
      name : "nilesh",
      age : 24,
      salary : 4700,
      city : "mumbai"
    },
    {
      name : "mahi",
      age : 28,
      salary : 7000,
      city : "pune"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
