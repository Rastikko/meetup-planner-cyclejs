import {div, h3, form, input, button, label} from '@cycle/dom';
import {Observable} from 'rx';

function retrieveForm(email, submit) {
  return form('#register-form', { 'onsubmit': e => e.preventDefault() }, [
    h3('.text-center', 'Register'),
    div('.form-group', [
      label({for: 'inputEmail'}, ['Email address']),
      input('#inputEmail', {className: 'form-control', type: 'email', placeholder: 'Email', value: email})
    ]),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password'})
    ]),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password Again']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password'})
    ]),
    button('#registerBtn', {className: 'btn btn-default', type: 'submit'}, 'Register')
  ]);
}

const view = (state) => {
  const sink = Observable
    .combineLatest(state.email$, state.submit$, (email, submit) => {
      return retrieveForm(email, submit);
    })
  return sink;
};

export default view;
