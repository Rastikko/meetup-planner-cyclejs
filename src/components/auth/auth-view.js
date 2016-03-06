import {div} from '@cycle/dom'

const view = (state, login, register) => {
  return state.isAuth$.map((isAuth) => {
    console.log('isAuth', isAuth);
    if (isAuth) {
      alert('User authenticated!');
      return div(['Hello registered user :)']);
    }
    return div('.container', [
      div('.col-md-6', [login]),
      div('.col-md-6', [register])
    ])
  })
};

export default view;
