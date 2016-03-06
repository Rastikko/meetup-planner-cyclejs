import {div, h3, form, input, button, label} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, password1, password1Errors, submit) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center', 'Register'),
    formGroup('inputEmail', 'Email', 'email', email, emailErrors),
    formGroup('inputPassword', 'Password', 'password', password1, password1Errors),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password Again']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password Again'})
    ]),
    button('#registerBtn', {className: 'btn btn-default', type: 'submit'}, 'Register')
  ]);
}

const view = (state) => {
  const sink = Observable
    .combineLatest(
      state.email$,
      state.emailValidation$,
      state.password1$,
      state.password1Validation$,
      state.submit$,
      (email, emailErrors, password1, password1Errors, submit) => {
        return retrieveForm(email, emailErrors, password1, password1Errors, submit);
      })
  return sink;
};

export default view;
