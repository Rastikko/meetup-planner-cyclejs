import {div, h3, form, input, button, label} from '@cycle/dom';

const view = () => {
  return form([
    h3('.text-center', 'Register'),
    div('.form-group', [
      label({for: 'inputEmail'}, ['Email address']),
      input('#inputEmail', {className: 'form-control', type: 'email', placeholder: 'Email'})
    ]),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password'})
    ]),
    div('.form-group', [
      label({for: 'inputPassword'}, ['Password Again']),
      input('#inputPassword', {className: 'form-control', type: 'password', placeholder: 'Password'})
    ]),
    button('.btn .btn-default', {type: 'submit'}, 'Register')
  ]);
};

export default view;
