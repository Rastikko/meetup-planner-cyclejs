import intent from './auth-intent'
import model from './auth-model'
import view from './auth-view'
import login from '../login';
import register from '../register'

const auth = (sources) => {
  const Login = login(sources);
  const Register = register(sources);

  const actions$ = intent(sources);
  const state$ = model(actions$, sources.firebaseRef);
  const view$ = view(state$, Login.DOM, Register.DOM);

  return {
    DOM: {view$}
  }
};

export default auth;
