import intent from './register-intent'
import model from './register-model'
import view from './register-view'
import {Observable} from 'rx';

const register = (sources) => {
  const actions$ = intent(sources);
  console.log('actions', actions$);
  const state$ = model(actions$, sources.firebaseRef);
  const view$ = view(state$);
  return {
    DOM: view$,
  }
};

export default register;
