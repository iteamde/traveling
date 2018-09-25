import { AbstractControl } from '@angular/forms';

/**
 * Export email validate function
 * @param {AbstractControl} control
 * @returns {{[p: string]: any}}
 */
export function emailValidator(control: AbstractControl): { [key: string]: any } {

    const emailRegex = /[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
    const value = control.value;

    const result = emailRegex.test(value);

    if (result) {
        return null;
    } else {
        return { 'emailValidator': { value } };
    }
}

/**
 * Export name validate function
 * @param {AbstractControl} control
 * @returns {{[p: string]: any}}
 */
export function nameValidator(control: AbstractControl): { [key: string]: any } {

  const nameRegex = /^[a-zA-Z]+$/;
  const value = control.value;

  const result = nameRegex.test(value);

  if (result) {
    return null;
  } else {
    return { 'nameValidator': { value } };
  }
}

/**
 * Export password match validation function
 * @param {AbstractControl} control
 * @returns {{[p: string]: boolean}}
 */
export function matchPasswordValidator (control: AbstractControl): {[key: string]: boolean} {
  const password = control.get('password');
  const passwordRepeat = control.get('password_confirmation');

  if (!password || !passwordRepeat) return null;

  if (password.value === passwordRepeat.value) {
    return null;
  } else {
    passwordRepeat.setErrors( {MatchPassword: true});
  }

}




