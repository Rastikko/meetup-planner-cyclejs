import {Observable} from 'rx';

const intent = (sources) => {

    const email$ = sources.DOM
      .select('#inputEmail')
      .events('input');
    const submitClick$ = sources.DOM
      .select('#registerBtn')
      .events('click');

    return {
      email$,
      submitClick$
    }
}
export default intent;
