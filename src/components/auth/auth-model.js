const model = (actions, firebaseRef) => {
  return {
    isAuth$: actions.uid$.map(uid => {
      return !!uid;
    }),
  }
}

export default model;
