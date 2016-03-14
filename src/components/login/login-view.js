import {div, h3, button, form, input, label} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, password, passwordErrors) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center', 'Register'),
    formGroup('inputLoginEmail', 'Email', 'email', email, emailErrors),
    formGroup('inputLoginPassword', 'Password', 'password', password, passwordErrors),
    button('#loginBtn', {className: 'btn btn-default', type: 'submit'}, 'Login')
  ]);
}

const view = (state) => {
  const sink = Observable
    .combineLatest(
      state.email$,
      state.emailErrors$,
      state.password$,
      state.passwordErrors$,
      (email, emailErrors, password, passwordErrors) => {
        return retrieveForm(email, emailErrors, password, passwordErrors);
      })
  return sink;
};

export default view;
