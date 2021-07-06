import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  
  isSubmit=false;
  
  constructor(private _fb : FormBuilder) {
    this.myform = this._fb.group({
      fullname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]]
    });
   }
  
  ngOnInit(): void {
  }
  
  myform:FormGroup;

  save(){
    this.isSubmit = true;
    console.log(this.myform.controls.email);
  }

}
