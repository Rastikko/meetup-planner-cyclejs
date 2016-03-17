const model = (actions) => {

  const isAuth$ = actions.uid$.map(uid => !!uid);

  const displayLoginOrRegister$ = actions.loginOrRegisterClick$.map(() => {
    return true;
  }).startWith(false);

  return {
    isAuth$,
    displayLoginOrRegister$
  }
}

export default model;
