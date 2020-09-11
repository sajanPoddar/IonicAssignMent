import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransfer'
})
export class dateTransferPipe implements PipeTransform {
  constructor() {}
  transform(value: any, exponent?: string): any {
    if(value) {
      const dateValue = new Date(value);
      return `${dateValue.getDate()},${dateValue.getMonth()},${dateValue.getFullYear()}`
    } else {
      return ' ';
    }
    
    
  }


}
