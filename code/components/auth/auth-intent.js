const intent = (sources) => {

    const uid$ = sources.firebase.get('$user');

    const logoutClick$ = sources.DOM
      .select('#logout')
      .events('click')

    const loginOrRegisterClick$ = sources.DOM
      .select('#loginOrRegister')
      .events('click')

    return {
      uid$,
      logoutClick$,
      loginOrRegisterClick$
    }
}
export default intent;
