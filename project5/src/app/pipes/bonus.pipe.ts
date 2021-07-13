import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(a:any, b:any) {
    let x;
    if(b<25)
    {
      x = a*20/100;
    }
    else
    {
      x = a*10/100;
    }
    return x;
  }

}
