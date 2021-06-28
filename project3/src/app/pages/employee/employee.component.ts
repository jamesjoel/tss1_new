import { Component, OnInit } from '@angular/core';



interface Emp{
  _id? : number;
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

  // a="";

  id:any=null;

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
      _id : 1,
      name : "rohit",
      age : 25,
      city : "Indore",
      salary : 5000,
      gender : "male"
    },
    {
      _id : 2,
      name : "jaya",
      age : 22,
      city : "Bhopal",
      salary : 4500,
      gender : "female"
    },
    {
      _id : 3,
      name : "amar",
      age : 23,
      city : "Mumbai",
      salary : 6000,
      gender : "male"
    },
    {
      _id : 4,
      name : "nidhi",
      age : 20,
      city : "Pune",
      salary : 7000,
      gender : "female"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    // we can create our id, but after implant database this logic
    // have to detele.
    if(this.emp._id) // when we doing update
    {
      for(let i = 0; i < this.employes.length; i++)
      {
        if(this.employes[i]._id == this.id)
        {
          this.employes[i] = this.emp;
          break;
        }
      }
    }
    else // when we doing add
    {
        let total = this.employes.length;
        total++;
        this.emp._id = total;
        this.employes.push(this.emp);
    }

  }
  empty(){
    this.emp={
      name : "",
      age : null,
      salary : null,
      city : "",
      gender : ""
    }
  }
  askDelete(obj:Emp){
    this.emp = obj;
    
  }
  confDelete(){
    let n = this.employes.indexOf(this.emp);
    // console.log(n);
    this.employes.splice(n ,1);
  }
  askEdit(obj:Emp){
    // this.emp = obj;
    // we want tranfer data but dont want binding
    this.id = obj._id;
    
    this.emp = {... obj};
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
