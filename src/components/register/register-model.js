import Rx from 'rx';
import {emailValidation, passwordValidation} from '../../helpers/field-validations';

const model = (actions, firebaseRef) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailValidation$ = email$.map(emailValidation);

  const password1$ = actions.password1$.map(e => { return e.target.value }).startWith('');
  const password1Validation$ = password1$.map(passwordValidation);

  const submit$ = actions.submitClick$
    .map(() => {
      // TODO: check if there are errors in the field to notifiy the user
      return '';
    })
    .do(() => {
      // TODO: get latests email, password and errors and fire this is proceed
      // Probably the biggest hack for now.. this should return an observable
      // instead of triggering the authWithPassword..
      // firebaseRef.createUser({
      //   email: 'miemail6@gmail.com',
      //   password: 'superpassword1345!'
      // }, function(error, userData) {
      //   firebaseRef.authWithPassword({
      //     email: 'miemail6@gmail.com',
      //     password: 'superpassword1345!'
      //   })
      // });
    })
    .startWith('');
  return {
    email$,
    emailValidation$,
    password1$,
    password1Validation$,
    submit$
  }
}

export default model;
