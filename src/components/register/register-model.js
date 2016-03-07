import {Observable} from 'rx';
import {emailValidation, passwordValidation} from '../../helpers/field-validations';

function registerAndLogin(firebaseRef, email, password) {
  // Probably the biggest hack for now.. this should return an observable
  // instead of triggering the authWithPassword..
  firebaseRef.createUser({
    email: email,
    password: password
  }, function(error, userData) {
    // TODO: handle errors
    firebaseRef.authWithPassword({
      email: email,
      password: password
    })
  });
}

const model = (actions, firebaseRef) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailErrors$ = email$.map(emailValidation).startWith([]);

  const password1$ = actions.password1$.map(e => { return e.target.value }).startWith('');
  const password1Errors$ = password1$.map(passwordValidation).startWith([]);

  // const password2$ = actions.password2$.map(e => { return e.target.value }).startWith('');
  // const password2Errors$ = password2$.sample(password1$).map();

  const submit$ = Observable.combineLatest(email$, emailErrors$, password1$, password1Errors$,
      (email, emailErrors, password1, password1Errors) => {
        if (email && !emailErrors.length && password1 && !password1Errors.length) {
          return {email, password1};
        } else {
          return false;
        }
    }).sample(actions.submitClick$).map((submitProps) => {
      if (submitProps) {
        registerAndLogin(firebaseRef, submitProps.email, submitProps.password1);
      }
    }).startWith(false);

  return {
    email$,
    emailErrors$,
    password1$,
    password1Errors$,
    submit$
  }
}

export default model;
