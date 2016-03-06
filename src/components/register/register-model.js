import Rx from 'rx';
import {emailValidation} from '../../helpers/field-validations';

const model = (actions, firebaseRef) => {
  const email$ = actions.email$.map(e => { return e.target.value }).startWith('');
  const emailValidation$ = email$.map(emailValidation);

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
    submit$
  }
}

export default model;
