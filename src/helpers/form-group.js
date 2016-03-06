import {div, input, label} from '@cycle/dom';

function formGroup(id, labelText, inputType, inputValue, validationErrors) {
  const errorClass = (validationErrors.length) ? 'has-error': '';
  let validationErrorsDOM = [];
  validationErrors.forEach((value) => {
    validationErrorsDOM.push(div('.text-right .bg-danger', [value]));
  });

  return div('.form-group', {className: errorClass}, [
    label({for: id}, ['Email address']),
    input(`#${id}`, {className: 'form-control', type: inputType, placeholder: labelText, value: inputValue}),
    validationErrorsDOM,
  ]);
}

export {formGroup};
