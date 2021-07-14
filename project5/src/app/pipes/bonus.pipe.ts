import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(a:any, b:any, c:any) {
    let x;
    if(b<25)
    {
      x = a*20/100;
      if(c=="female"){
        x += a*10/100;
      }
    }
    else
    {
      x = a*10/100;
      if(c=="female"){
        x += a*10/100;
      }
    }
    return x;
  }

}
