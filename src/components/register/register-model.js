import Rx from 'rx';

const model = (actions, firebaseRef) => {
  return {
    email$: actions.email$.map(e => { e.target.value }).startWith(''),

    submit$: actions.submitClick$.map(() => {
      // TODO: check if there are errors in the field to notifiy the user
      return '';
    })
    .do(() => {
      // TODO: get latests email, password and errors and fire this is proceed
      // firebaseRef.createUser({
      //   email: 'miemail@gmail.com',
      //   password: 'superpassword1345!'
      // });
    })
    .startWith(''),
  }
}

export default model;
