import {div, h3, form, input, button, label} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, password1, password1Errors, password2, password2Errors) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center', 'Register'),
    formGroup('inputEmail', 'Email', 'email', email, emailErrors),
    formGroup('inputPassword', 'Password', 'password', password1, password1Errors),
    formGroup('inputPassword2', 'Password Again', 'password', password2, password2Errors),
    button('#registerBtn', {className: 'btn btn-default', type: 'submit'}, 'Register')
  ]);
}

const view = (state) => {
  const sink = Observable
    .combineLatest(
      state.email$,
      state.emailErrors$,
      state.password1$,
      state.password1Errors$,
      state.password2$,
      state.password2Errors$,
      (email, emailErrors, password1, password1Errors, password2, password2Errors) => {
        return retrieveForm(email, emailErrors, password1, password1Errors, password2, password2Errors);
      })
  return sink;
};

export default view;
