import {Observable} from 'rx';
import {emailValidation, passwordValidation} from '../../helpers/field-validations';

const model = (actions) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailErrors$ = email$.map(emailValidation).startWith([]);

  const password$ = actions.password$.map(e => { return e.target.value }).share().startWith('');
  // we only should display password is empty error if the email is not empty
  const passwordErrors$ = Observable.merge(
    email$.map((email) => {return {email: email}}),
    password$.map((password) => {return {password: password}}),
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

  const submit$ = Observable.combineLatest(email$, emailErrors$, password$, passwordErrors$,
      (email, emailErrors, password, passwordErrors) => {
        if (email && !emailErrors.length && password && !passwordErrors.length) {
          return {email, password};
        } else {
          return null;
        }
    }).filter(credentials => {
      return !!credentials
    }).sample(actions.submitClick$);


  return {
    email$,
    emailErrors$,
    password$,
    passwordErrors$,
    submit$
  }
};

export default model;
