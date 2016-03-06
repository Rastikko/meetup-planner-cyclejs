import Rx from 'rx'
import {div} from '@cycle/dom'
import login from './components/login';
import register from './components/register'

const view = (login, register) => {
  return div('.container', [
    div('.col-md-6', [login]),
    div('.col-md-6', [register])
  ])
};

const main = sources => {

  const Login = login(sources);
  const Register = register(sources);
  const view$ = Rx.Observable.just(
    view(
      Login.DOM,
      Register.DOM
    )
  );

  return {
    DOM: view$
  }

};

export default main
