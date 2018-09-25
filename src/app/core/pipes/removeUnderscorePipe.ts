import { Pipe, PipeTransform } from '@angular/core';

/**
 * Remove underscores
 */
@Pipe({ name: 'removeUnderscore' })
export class RemoveUnderscorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) return value.replace(/_/g, ' ');
  }
}
