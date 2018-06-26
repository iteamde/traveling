import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mathRandom'})
export class MathRandomPipe implements PipeTransform {

  transform(item) {
    return item[Math.floor(Math.random() * item.length)].url;
  }
}
