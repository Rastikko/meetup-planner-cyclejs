import intent from './register-intent'
import model from './register-model'
import view from './register-view'
import {Observable, Subject} from 'rx';

const register = (sources) => {
  const actions$ = intent(sources);
  const state$ = model(actions$);
  const view$ = view(state$);

  const registerFirebase$ = state$.submit$.map(credentials => {
    console.log('registerFirebase credentials', credentials);
    return {
      $user: sources.firebase.$set({
        type: 'password',
        create: true,
        email: credentials.email,
        password: credentials.password
      })
    }
  });

  // We map state$.submit to register the userData
  return {
    DOM: view$,
    registerFirebase$
  }
};

export default register;
