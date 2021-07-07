import { FormGroup } from '@angular/forms';

export function myCheck(){
    return function(a:FormGroup){
        let b = a.controls.xyz;

        let c = b.value;
        let arr = c.split("");
        if(b.errors && !b.errors.validErr)
        {
            return;
        }
        if(arr[0] != 7 && arr[0] !=8 && arr[0] !=9)
        {
            b.setErrors({validErr : true});
        }
    }
}