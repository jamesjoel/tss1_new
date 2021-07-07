import { FormGroup } from '@angular/forms';


export function numCheck(){
    return function(a:FormGroup){
        let x = a.controls.contact;
        if(x.errors && !x.errors.numErr)
        {
            return;
        }
        if(isNaN(x.value)==true) // isNaN means is Not A Number
        {
            x.setErrors({ numErr : true });
        }
        
    }
}

export function lenthCheck10(){
    return function(a:FormGroup){
        let x = a.controls.contact;
        if(x.errors && !x.errors.lenErr10)
        {
            return;
        }

        if(x.value.length < 10 || x.value.length > 10)
        {
            x.setErrors({lenErr10 : true});
        }
    }
}



export function lengthCheck(){
    return function (a:FormGroup){
        let x = a.controls.abc;
        if(x.errors && !x.errors.lenErr)
        {
            return;
        }

        if(x.value.length < 5)
        {
            x.setErrors({ lenErr : true });
        }
    }
}


export function cityCheck(){
    return function (a:FormGroup){
        let x = a.controls.city;
        if(x.errors && !x.errors.cityErr)
        {
            return;
        }

        if(x.value != "mumbai")
        {
            x.setErrors({ cityErr : true });
        }
    }
}