import {Injectable} from '@angular/core';

/**
 * Convert service
 */
@Injectable()
export class ConvertService {
  constructor() {}

  /**
   * Choose what convert function to use
   * @param property
   * @param {string} pattern
   * @returns {any}
   */
  convertSwitch(property, pattern: string) {
    if (!property) return

    if (/\r\n\r\n\u2022/.test(property)) {
      return this.convertOneStr(property, pattern);
    } else {
      return this.convertMany(property, pattern);
    }
  }

  /**
   * Convert data
   * @param property string to be converted in object
   * @param {string} pattern  split string by this pattern
   * @returns {any}
   */
  convertMany(property, pattern: string) {
    let jsonString = '{';
    const data = property.split(pattern);
    data.forEach((item) => {
      const current = item.split(':');
      jsonString += '"' + current[0] + '":"' + current[1] + '",';
    })
    jsonString = jsonString.substr(0, jsonString.length - 1);
    jsonString += '}';
    const obj = JSON.parse(jsonString);
    return obj;
  }

  /**
   * Convert data
   * @param property
   * @param {string} pattern
   * @returns {{}}
   */
  convertOneStr(property, pattern: string) {
    const current = property.split('\r\n\r\n\u2022');
    current[1] = current[1].split('\r\n\u2022');
    const obj = {};
    obj[current[0]] = current[1];
    return obj;
  }
}
