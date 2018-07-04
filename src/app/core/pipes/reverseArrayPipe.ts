import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverseArr',
  pure: false
})
export class ReverseArrPipe {
  transform(value) {
    return value.slice().reverse();
  }
}
