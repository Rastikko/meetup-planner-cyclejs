const intent = (sources) => {

  const email$ = sources.DOM
    .select('#inputLoginEmail')
    .events('input');

  const password$ = sources.DOM
    .select('#inputLoginPassword')
    .events('input');

  const submitClick$ = sources.DOM
    .select('#loginBtn')
    .events('click');

  return {
    email$,
    password$,
    submitClick$
  }
};

export default intent;
