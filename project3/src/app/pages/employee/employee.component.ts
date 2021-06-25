import { Component, OnInit } from '@angular/core';

interface Emp{
  name:string;
  age:number|null;
  salary :number|null;
  city :string;
  gender? :string;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  emp:Emp={
    name : "",
    age : null,
    salary : null,
    city : "",
    gender : ""
  }

  employes:Emp[]=
  [
    {
      name : "rohit",
      age : 25,
      city : "Indore",
      salary : 5000,
      gender : "male"
    },
    {
      name : "jaya",
      age : 22,
      city : "Bhopal",
      salary : 4500,
      gender : "female"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.employes.push(this.emp);
  }
}

/*
  a = 5;
  b = 10;

  c = a+b;


  a:number=5;
  b:number=10;

  c:number = a+b;


*/
