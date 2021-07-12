import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkNum } from '../../helpers/studentform.validation';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
/*
the ActivateRoute service is used for "parameterized url"

this Router service is used for "navigate/redirecting in angular"


*/

interface Student{
  id? : null;
  fullname : string;
  age : null;
  city : string;
  address : string;
}

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  studentForm : FormGroup;
  stu! :Student;
  isSubmit=false;
  id:any;
  constructor(
    private _fb : FormBuilder, 
    private _stu : StudentService,
    private _actRoute : ActivatedRoute,
    private _router : Router) {
    this.studentForm = this._fb.group({
      id : [null],
      fullname : ["", Validators.required],
      age : [null, Validators.required],
      city : ["", Validators.required],
      address : ["", Validators.required]
    },
    {
      validator : [checkNum()]
    });

    this.id = this._actRoute.snapshot.paramMap.get("id");

    this._stu.getDataById(this.id).subscribe((data)=>{
      // console.log(data);
      this.studentForm.setValue(data);
    })
    

   }

  ngOnInit(): void {
  }

  update(){
    this.isSubmit=true;
    if(this.studentForm.invalid){
      return;
    }
    this._stu.updateData(this.studentForm.value, this.id).subscribe((data)=>{
      this._router.navigate(["/student"]);
    })
    
  }

}
