import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseArr',
  pure: true
})
export class ReverseArrPipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}
