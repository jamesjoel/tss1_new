import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkNum } from '../../helpers/studentform.validation';
import { StudentService } from '../../services/student.service';

interface Student{
  id? : null;
  fullname : string;
  age : null;
  city : string;
  address : string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentForm : FormGroup;
  isSubmit=false;

  allStudent:Student[]=[];

  constructor(private _fb : FormBuilder, private _stu : StudentService) {
    this.studentForm = this._fb.group({
      fullname : ["", Validators.required],
      age : [null, Validators.required],
      city : ["", Validators.required],
      address : ["", Validators.required]
    },
    {
      validator : [checkNum()]
    });

    this._stu.getData().subscribe((data)=>{
      this.allStudent = data;
    })

   }

  ngOnInit(): void {
  }
  save(){
    this.isSubmit=true;
    if(this.studentForm.invalid){
      return;
    }
    this._stu.saveData(this.studentForm.value).subscribe((data)=>{
      // console.log(data);
      this.allStudent.push(data);
    })
  }

}
