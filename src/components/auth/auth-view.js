import {div} from '@cycle/dom'

const view = (login, register) => {
  return div('.container', [
    div('.col-md-6', [login]),
    div('.col-md-6', [register])
  ])
};

export default view;
