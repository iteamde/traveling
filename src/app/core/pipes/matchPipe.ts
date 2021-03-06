import { Pipe, PipeTransform } from '@angular/core';

/**
 * Check if given string match current pattern
 */
@Pipe({ name: 'match' })
export class RegexPipe implements PipeTransform {
  transform(item: string, reg: string , pos?: number ): string {
    const result = item.match(new RegExp(reg));
    return result && result[pos || 0];
  }
}
