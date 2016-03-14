import {Observable} from 'rx';
import {emailValidation, passwordValidation} from '../../helpers/field-validations';

const model = (actions) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailErrors$ = email$.map(emailValidation).startWith([]);

  const password1$ = actions.password1$.map(e => { return e.target.value }).share().startWith('');
  // we only should display password is empty error if the email is not empty
  const password1Errors$ = Observable.merge(
    email$.map((email) => {return {email: email}}),
    password1$.map((password) => {return {password: password}}),
  ).scan((props, current) => {
    if (current.email !== undefined) props.email = current.email;
    if (current.password !== undefined) props.password = current.password;
    return { email: props.email, password: props.password };
  })
  .map(props => {
    if (props.email !== '' && props.password === '') return ['The password must not be empty'];
    if (props.email !== '') return passwordValidation(props.password);
    return [];
  });

  const password2$ = actions.password2$.map(e => { return e.target.value }).startWith('');
  const password2Errors$ = Observable.combineLatest(password1$, password2$, (password1, password2) => {
    if (password1 !== password2) {
      return ['The passwords must match'];
    }
    return [];
  });

  const submit$ = Observable.combineLatest(email$, emailErrors$, password1$, password1Errors$, password2Errors$,
      (email, emailErrors, password1, password1Errors, password2Errors) => {
        if (email && !emailErrors.length && password1 && !password1Errors.length && !password2Errors.length) {
          return {email, password: password1};
        } else {
          return null;
        }
    }).filter(credentials => {
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
