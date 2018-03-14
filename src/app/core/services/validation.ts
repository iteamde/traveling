import {Injectable} from '@angular/core';
import {FormControl, FormGroup, AbstractControl} from '@angular/forms';

const   validationMessages = {
  username: {
    required: "Username field is required",
    nameValidator: "Username must contain only letters"
  },
  email: {
    required: "Email field is required",
    emailValidator: "Please enter correct email"
  },
  password: {
    required: "Password field is required",
    minlength: "Password should be at least 6 characters",
    maxlength: "Password should be less than 20 symbols"
  },
  password_confirmation: {
    required: "Password confirmation field is required",
    MatchPassword: "Password confirmation field must be equal to password field"
  },
  name: {
    required: "Name field is required",
    nameValidator: "Name must contain only letters"
  },
  age: {
    required: "Age  is required",
  },
  gender: {
    required: "Gender is required",
  }
};

@Injectable()
export class ValidationService {

  /**
   * Handles when form value is changed
   */
  onValueChange = (form: FormGroup, formErrors, fromContinueButton) => {

    for (let field in formErrors) {
      formErrors[field] = '';
      // form.get - получение элемента управления
      let control = form.get(field);

      if (control  && (fromContinueButton || control.dirty) && !control.valid) {
        let message = validationMessages[field];
        for (let key in control.errors) {
          formErrors[field] += message[key] + ' ';
        }
      }
    }

    return formErrors;
  }

}
