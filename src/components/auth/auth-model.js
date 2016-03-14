const model = (actions) => {

  const isAuth$ = actions.uid$.map(uid => !!uid);

  // TODO: check for authentication errors

  return {
    isAuth$
  }
}

export default model;
