import Rx from 'rx'
import auth from './components/auth';

const main = sources => {

  const Auth = auth(sources);
  const view$ = Rx.Observable.just(Auth.DOM);

  return {
    DOM: view$
  }

};

export default main
