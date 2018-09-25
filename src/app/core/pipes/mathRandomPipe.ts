import { Pipe, PipeTransform } from '@angular/core';

/**
 * Return random element from current array
 */
@Pipe({name: 'mathRandom'})
export class MathRandomPipe implements PipeTransform {

  transform(item) {
    return item[Math.floor(Math.random() * item.length)];
  }
}
