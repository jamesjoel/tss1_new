import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo1'
})
// data | json
export class Demo1Pipe implements PipeTransform {

  transform(a:any) {
    let x = a/2;
    return x;
  }

}
