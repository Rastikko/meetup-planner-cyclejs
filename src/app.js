import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import Rx from 'rx';
import Main from './main'
import {makeFirebaseDriver} from 'cycle-firebase'
import Firebase from 'firebase'

// we are pulling in our css files here for webpack to compile
require("!style!css!styles/layout.css");

// creating our mainApp from /.main
function mainApp(sources) {
  let sinks = Main(sources);
  return sinks
}

//const Props = Main(sources).Props
// this is the Cycle run. first argument is our mainApp then an object:
// DOM is the ID or class we want the cycle to render onto our page
// History is using our makeHistoryDriver to deal with routing
const sources = {
  DOM: makeDOMDriver('#application'),
  firebase: makeFirebaseDriver(new Firebase('https://meetup-planner.firebaseio.com')),
};

Cycle.run(mainApp,sources);
