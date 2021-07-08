import { FormGroup } from '@angular/forms';

export function checkNum(){
    return function (userForm:FormGroup){
        let x = userForm.controls.age;
        if(x.errors && !x.errors.numErr)
        {
            return;
        }

        if(isNaN(x.value)==true) // agar x ki valur number nahi hogi to
        {
            x.setErrors({ numErr : true });
        }

    }
}
export function checkAge(){
    return function (userForm : FormGroup){
        let x = userForm.controls.age;
        if(x.errors && !x.errors.ageErr){
            return;
        }
        let y = parseInt(x.value);
        if(y < 15 || y > 20){
            x.setErrors({ ageErr : true });
        }
    }
}



/*
    isNaN() --- is not a number


    a = "15";
*/