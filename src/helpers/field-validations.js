// return an array with a list of strings with errors
function emailValidation(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let errorArray = [];
  if (email === '') {
    errorArray.push('The email field cannot be empty');
    return errorArray;
  }
  if (!re.test(email)) {
    errorArray.push('This is not a valid email');
  }
  return errorArray;

}

export {emailValidation};
