import {div, h3, button, form, input, label} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, password, passwordErrors) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center .alert .alert-info', 'Login'),

    formGroup({
      id: 'inputLoginEmail',
      labelText: 'Email*',
      placeholderText: 'example@gmail.com',
      inputType: 'email',
      inputValue: email,
      validationErrors: emailErrors
    }),
    formGroup({
      id: 'inputLoginPassword',
      labelText: 'Password*',
      placeholderText: 'Password',
      inputType: 'password',
      inputValue: password,
      validationErrors: passwordErrors
    }),
    div('.text-right', [button('#loginBtn', {className: 'btn btn-primary btn-block', type: 'submit'}, 'Login')])
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
