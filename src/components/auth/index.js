import view from './auth-view'
import login from '../login';
import register from '../register'

const auth = (sources) => {
  const Login = login(sources);
  const Register = register(sources);

  const view$ = view(
    Login.DOM,
    Register.DOM
  );

  return {
    DOM: view$
  }
};

export default auth;
