import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { numCheck, lenthCheck10, cityCheck } from '../../helpers/custome.validation';
import { lengthCheck } from '../../helpers/custome.validation';
import { myCheck } from '../../helpers/custome2.validation';

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
      email : ["", [Validators.required, Validators.email]],
      city : ["", Validators.required],
      contact : ["", Validators.required],
      abc : ["", Validators.required],
      xyz : ["", Validators.required]
    },
    {
      validator : [lengthCheck(), numCheck(), myCheck(), lenthCheck10(), cityCheck()]
    }
    );
   }
  
  ngOnInit(): void {
  }
  
  myform:FormGroup;

  save(){
    this.isSubmit = true;
    console.log(this.myform.controls.email);
  }

}
