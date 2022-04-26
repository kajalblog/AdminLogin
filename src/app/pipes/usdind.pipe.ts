import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdind'
})
export class UsdindPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
