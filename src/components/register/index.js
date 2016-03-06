import view from './register-view'

const register = (sources) => {
  const view$ = view();
  return {
    DOM: view$
  }
};

export default register;
