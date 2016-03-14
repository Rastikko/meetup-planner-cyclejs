import {Observable} from 'rx';
import intent from './auth-intent'
import model from './auth-model'
import view from './auth-view'
import login from '../login';
import register from '../register'

const auth = (sources) => {
  const Login = login(sources);
  const Register = register(sources);

  const actions$ = intent(sources);
  const state$ = model(actions$);
  const view$ = view(state$, Login.DOM, Register.DOM);

  const logout$ = actions$.logoutClick$.map(() => {
    return {
      $user: sources.firebase.$set(null)
    }
  });

  return {
    DOM: view$,
    firebase: Observable.merge(logout$, Register.registerFirebase$).map((logout, register) => {
      console.log('logout', logout);
      console.log('register', register);
      if (!!logout) return logout;
      if (!!register) return register;
    })
  }
};

export default auth;
