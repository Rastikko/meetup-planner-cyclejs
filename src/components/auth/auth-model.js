const model = (actions) => {
  return {
    isAuth$: actions.uid$.map(uid => {
      return !!uid;
    }),
  }
}

export default model;
