import {div, button} from '@cycle/dom'
import {Observable} from 'rx';

const getTree$ = (isAuth, displayLoginOrRegister, login, register) => {
    if (isAuth) {
      return div('.container .text-center', [
        button('#createEvent', {className: 'btn btn-primary', type: 'submit'}, 'Create Event'),
        button('#logout', {className: 'btn btn-primary', type: 'submit'}, 'Log out')
      ]);
    }
    let toggledContent;
    if (!displayLoginOrRegister) {
      toggledContent = div('#LoginOrRegister', {className: 'rom text-center'}, [
        div('.col-md-12', [
          button('#loginOrRegister', {className: 'btn btn-primary btn-lg', type: 'submit'}, 'Login or Register to create an event')
        ])
      ]);
    } else {
      toggledContent = div('#LoginOrRegister', {className: 'rom'}, [
        div('.col-md-4 .col-md-offset-2', [login]),
        div('.col-md-4', [register]),
      ]);
    }
    return div('#auth-container', {className: 'container'}, [toggledContent]);
};

const view = (state, login, register) => {
  const sink = Observable
    .combineLatest(
      state.isAuth$,
      state.displayLoginOrRegister$,
      (isAuth, displayLoginOrRegister) => {
        return getTree$(isAuth, displayLoginOrRegister, login, register);
      })
  return sink;
};

export default view;
