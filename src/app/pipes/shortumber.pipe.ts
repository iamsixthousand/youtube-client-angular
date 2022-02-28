import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
})
export class ShortNumberPipe implements PipeTransform {
  transform(numStr?: string): string {
    if (!numStr) return '-';

    const commaDigitValidation = (num: number, divider: number): string => {
      const rounded = (num / divider).toFixed(1);
      if (rounded[rounded.length - 1] === '0') {
        return Number(rounded).toFixed(0);
      }
      return rounded;
    };

    const num = Number(numStr);
    if (numStr.length >= 10) {
      return `${commaDigitValidation(num, 1e9)}B`;
    }
    if (numStr.length >= 7) {
      return `${commaDigitValidation(num, 1e6)}M`;
    }
    if (numStr.length >= 4) {
      return `${commaDigitValidation(num, 1000)}K`;
    }
    return numStr;
  }
}
