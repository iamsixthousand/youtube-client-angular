import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(string: string | undefined, args?: any): string | null {
    const number = Number(string);
    if (!number) return null;

    const powers = [
      { key: 'B', value: 1e9 },
      { key: 'M', value: 1e6 },
      { key: 'K', value: 1000 },
    ];

    let resultValue = '';

    let res = null;

    if (number > 1000) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < powers.length; i++) {
        res = number / powers[i].value;
        if (res < 1) {
          resultValue = '';
        } else if (res > 1 || res < 999) {
          res = String(res);
          const resultParts = res.split('.');
          if (resultParts[1][0] === '0') {
            resultValue = `${resultParts[0]}${powers[i].key}`;
            break;
          }
          resultValue = `${resultParts[0]}.${resultParts[1][0]}${powers[i].key}`;
          break;
        }
      }
    } else {
      resultValue = String(number);
    }
    return resultValue;
  }
}
