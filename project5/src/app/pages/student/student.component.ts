import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkNum } from '../../helpers/studentform.validation';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student.inetrface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentForm : FormGroup;
  stu! :Student;
  isSubmit=false;

  allStudent:Student[]=[];

  constructor(private _fb : FormBuilder, private _stu : StudentService) {
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
  askDelete(obj:any){
    // console.log(obj);
    this.stu = obj;
    console.log(this.stu);
  }
  empty(){
    this.studentForm.setValue({
      fullname : "",
      age : null,
      city : "",
      address : ""

    });
    this.isSubmit = false;
  }

  delete(){
    this._stu.deleteData(this.stu.id).subscribe((data)=>{
      let n = this.allStudent.indexOf(this.stu);
      this.allStudent.splice(n, 1);
    })
  }

}
