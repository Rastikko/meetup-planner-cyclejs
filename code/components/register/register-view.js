import {div, h3, h4, form, input, button, label, small} from '@cycle/dom';
import {Observable} from 'rx';
import {formGroup} from '../../helpers/form-group';

function retrieveForm(email, emailErrors, password1, password1Errors, password2, password2Errors) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center .alert .alert-warning', 'Register'),
    formGroup({
      id: 'inputEmail',
      labelText: 'Email*',
      placeholderText: 'example@gmail.com',
      inputType: 'email',
      inputValue: email,
      validationErrors: emailErrors,
      afterDOM: small('.text-muted', 'We\'ll never share your email with anyone else.')
    }),
    formGroup({
      id: 'inputPassword',
      labelText: 'Password*',
      placeholderText: 'Password',
      inputType: 'password',
      inputValue: password1,
      validationErrors: password1Errors
    }),
    formGroup({
      id: 'inputPassword2',
      labelText: 'Password*',
      placeholderText: 'Password',
      inputType: 'password',
      inputValue: password2,
      validationErrors: password2Errors
    }),
    formGroup({
      id: 'inputEmployer',
      labelText: 'Employer',
      placeholderText: 'Hooli, Pied Piper..',
      inputType: 'text',
      inputValue: '',
      validationErrors: []
    }),
    formGroup({
      id: 'inputJobTitle',
      labelText: 'Job Title',
      placeholderText: 'Web developer, astronaut..',
      inputType: 'text',
      inputValue: '',
      validationErrors: []
    }),
    div('.text-right', [button('#registerBtn', {className: 'btn btn-warning btn-block', type: 'submit'}, 'Register')])
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
