import Rx             from 'rx'
// @cycle/dom has a hyperscript-helper built in so you can
// declare all html elements you are going to use like div, h1, h2, nav etc
import {div}    from '@cycle/dom'

// we need to pass our components to cycle and give them a "source" when they come from cycle
// creating this "cycle", here you can see that view$ is a Rx Observable containing out "view"
// we pass view our nav.DOM + Content.DOM which you can see in const view above become available
// variables. We return all of this in an Object with DOM + History
const main = sources => {
  const view$ = Rx.Observable.of(div('.hello-world', ['HELLO WORLD!']));
  //Nav.url$.subscribe(x => console.log(x));
  return {
    DOM: view$
  }
};

export default main
