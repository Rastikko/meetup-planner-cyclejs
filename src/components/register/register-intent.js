import {Observable} from 'rx';

const intent = (sources) => {

    const email$ = sources.DOM
      .select('#inputEmail')
      .events('input');

    const password1$ = sources.DOM
      .select('#inputPassword')
      .events('input');

    const submitClick$ = sources.DOM
      .select('#registerBtn')
      .events('click');

    return {
      email$,
      password1$,
      submitClick$
    }
}
export default intent;
