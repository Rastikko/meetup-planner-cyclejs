const intent = (sources) => {

    const uid$ = sources.firebase.get('$user');

    const logoutClick$ = sources.DOM
      .select('#logout')
      .events('click')

    return {
      uid$,
      logoutClick$
    }
}
export default intent;
