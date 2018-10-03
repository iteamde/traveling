import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/** custom error messages */
const  validationMessages = {
  username: {
    required: 'Username field is required',
    nameValidator: 'Username must contain only letters',
    minlength: 'Username should be at least 8 characters',
  },
  email: {
    required: 'Email field is required',
    emailValidator: 'Please enter correct email'
  },
  password: {
    required: 'Password field is required',
    minlength: 'Password should be at least 6 characters',
    maxlength: 'Password should be less than 20 symbols'
  },
  password_confirmation: {
    required: 'Password confirmation field is required',
    MatchPassword: 'Password confirmation field must be equal to password field'
  },
  name: {
    required: 'Name field is required',
    nameValidator: 'Name must contain only letters',
    minlength: 'Name should be at least 8 characters',
  },
  age: {
    required: 'Age  is required',
  },
  gender: {
    required: 'Gender is required',
  },
  title: {
    required: 'Title is required',
    minlength: 'Title should be at least 3 characters',
    maxlength: 'Title should be less than 255 symbols'
  },
  date: {
    required: 'Date is required',
  },
};

/**
 * Forms validator service
 */
@Injectable()
export class ValidationService {
  /**
   * Validate form and get errors if present
   * @param {FormGroup} form
   * @param formErrors
   * @param fromContinueButton
   * @returns {any}
   */
  onValueChange = (form: FormGroup, formErrors, fromContinueButton) => {

    for (let field in formErrors) {
      formErrors[field] = '';
      // form.get - получение элемента управления
      const control = form.get(field);

      if (control  && (fromContinueButton || control.dirty) && !control.valid) {
        const message = validationMessages[field];
        for (let key in control.errors) {
          formErrors[field] += message[key] + ' ';
        }
      }
    }

    return formErrors;
  }

}
