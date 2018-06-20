import {Injectable} from '@angular/core';


@Injectable()
export class ConvertService {
  constructor() {
  }


  convertSwitch(property, pattern: string) {
    if (!property) return

   // console.log(/\r\n\r\n\u2022/.test(property))

    if (/\r\n\r\n\u2022/.test(property)) {
      return this.convertOneStr(property, pattern);
    } else {
      return this.convertMany(property, pattern);
    }


  }


  convertMany(property, pattern: string) {
    /**
     * Convert data
     * @property -> string to be converted in object
     * @pattern -> split string by this pattern
     */

   // console.log(property)

    let jsonStrig = '{';
    const data = property.split(pattern);
    data.forEach((item) => {
      const current = item.split(':');
      jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
    })
    jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
    jsonStrig += '}';
    const obj = JSON.parse(jsonStrig);
    return obj;
  }


  convertOneStr(property, pattern: string) {
   // console.log(property)
    const current = property.split('\r\n\r\n\u2022');
    current[1] = current[1].split('\r\n\u2022');
    const obj = {};
    obj[current[0]] = current[1];
    return obj;

  }

}
