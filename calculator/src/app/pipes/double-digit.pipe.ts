import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'doubleDigit' })
export class DoubleDigitPipe implements PipeTransform {
  transform(value: string | number): string {
    return value.toString().padStart(2, '0');
  }
}
