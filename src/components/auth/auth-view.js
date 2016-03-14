import {div, button} from '@cycle/dom'

const view = (state, login, register) => {
  return state.isAuth$.map((isAuth) => {
    if (isAuth) {
      return div('.container .text-center', [
        button('#createEvent', {className: 'btn btn-primary', type: 'submit'}, 'Create Event'),
        button('#logout', {className: 'btn btn-primary', type: 'submit'}, 'Log out')
      ]);
    }
    return div('#auth-container', {className: 'container'}, [
      div('.col-md-6', [login]),
      div('.col-md-6', [register])
    ])
  })
};

export default view;
