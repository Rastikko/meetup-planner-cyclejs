const model = (actions, firebaseRef) => {
  return {
    isAuth$: actions.uid$.map(uid => {
      console.log(uid);
      return !!uid;
    }),
  }
}

export default model;
