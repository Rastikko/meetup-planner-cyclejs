import intent from './login-intent'
import model from './login-model'
import view from './login-view'

const login = (sources) => {
  const actions = intent(sources);
  const state$ = model(actions);
  const view$ = view(state$);

  const loginFirebase$ = state$.submit$.map(credentials => {
    console.log('loginFirebase credentials', credentials);
    return {
      $user: sources.firebase.$set({
        type: 'password',
        email: credentials.email,
        password: credentials.password
      })
    }
  });

  return {
    DOM: view$,
    loginFirebase$
  }
};

export default login;
