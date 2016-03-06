import {div, h3, form, input, button, label} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, submit) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center', 'Register'),
    formGroup('inputEmail', 'Email', 'email', email, emailErrors),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password'})
    ]),
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
      state.submit$,
      (email, emailErrors, submit) => {
        return retrieveForm(email, emailErrors, submit);
      })
  return sink;
};

export default view;
