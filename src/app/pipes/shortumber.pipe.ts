import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(string: string | undefined, args?: any): string | null {
    const number = Number(string);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(number)) return null; // will only work value is a number
    if (number === null) return null;
    if (number === 0) return null;
    let abs = Math.abs(number);
    const rounder = 10 ** 1;
    const isNegative = number < 0; // will also work for Negetive numbers
    let key = '';

    const powers = [
      { key: 'Q', value: 10 ** 15 },
      { key: 'T', value: 10 ** 12 },
      { key: 'B', value: 10 ** 9 },
      { key: 'M', value: 10 ** 6 },
      { key: 'K', value: 1000 },
    ];

    for (let i = 0; i < powers.length; i + 1) {
      let reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }
}
