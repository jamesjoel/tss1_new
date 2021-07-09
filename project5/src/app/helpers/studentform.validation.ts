import { FormGroup } from '@angular/forms';
export function checkNum(){
    return function(studentForm : FormGroup){
        let age = studentForm.controls.age;
        if(age.errors && !age.errors.numErr)
        {
            return;
        }

        if(isNaN(age.value)==true)
        {
            age.setErrors({numErr : true });
        }
    }
}