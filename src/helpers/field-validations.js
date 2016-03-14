// TODO: pass a flag to trigger emptiness?

// return an array with a list of strings with errors
function emailValidation(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorArray = [];
  if (email === '') {
    return errorArray;
  }
  if (!re.test(email)) {
    errorArray.push('This is not a valid email');
  }
  return errorArray;

}

function passwordValidation(password) {
  const validationRegex = [{
    re: /[\!\@\#\$\%\^\&\*]/g,
    message: 'match one of the required symbols !@#$%^'
  },
  {
    re: /[0-9]/g,
    message: 'match a number'
  },
  {
    re: /[a-z]/g,
    message: 'match a lowercase letter'
  },
  {
    re:  /[A-Z]/g,
    message: 'match an uppercase letter'
  }];
  let errorArray = [];

  if (password === '') {
    return errorArray;
  }

  validationRegex.forEach(regexObject => {
    if (!regexObject.re.test(password)) {
      errorArray.push(regexObject.message);
    }
  });
  return errorArray;
}

export {emailValidation, passwordValidation};
