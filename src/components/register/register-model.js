import {Observable} from 'rx';
import {emailValidation, passwordValidation} from '../../helpers/field-validations';

const model = (actions) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailErrors$ = email$.map(emailValidation).startWith([]);

  const password1$ = actions.password1$.map(e => { return e.target.value }).startWith('');
  const password1Errors$ = password1$.map(passwordValidation).startWith([]);

  const password2$ = actions.password2$.map(e => { return e.target.value }).startWith('');
  const password2Errors$ = Observable.combineLatest(password1$, password2$, (password1, password2) => {
    if (password1 !== password2) {
      return ['The passwords must match'];
    }
    return [];
  });

  const submit$ = Observable.combineLatest(email$, emailErrors$, password1$, password1Errors$,
      (email, emailErrors, password1, password1Errors) => {
        console.log('combineLatests');
        if (email && !emailErrors.length && password1 && !password1Errors.length) {
          return {email, password: password1};
        } else {
          return null;
        }
    }).filter(credentials => {
      console.log('credentials', !!credentials);
      return !!credentials
    }).sample(actions.submitClick$);

  return {
    email$,
    emailErrors$,
    password1$,
    password1Errors$,
    password2$,
    password2Errors$,
    submit$
  }
}

export default model;
