import { Component, OnInit } from '@angular/core';

interface Stu{
  name : string;
  age : number|any;
  city : string;
  fee : number|any;
  gender : string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  stu :Stu = {
    name : "",
    age : null,
    city : "",
    fee : null,
    gender : ""
  };

  students : Stu[] = [
    {
      name : "Rohit",
      age : 25,
      city : "Indore",
      fee : 5000,
      gender : "male"
    },
    {
      name : "Jaya",
      age : 24,
      city : "Mumbai",
      fee : 7800,
      gender : "female"

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.students.push(this.stu);
  }

}
