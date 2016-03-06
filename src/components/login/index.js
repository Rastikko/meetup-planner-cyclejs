import intent from './login-intent'
import model from './login-model'
import view from './login-view'

const login = (sources) => {
  const actions = intent(sources);
  const state$ = model({actions});
  const view$ = view();
  return {
    DOM: view$
  }
};

export default login;
