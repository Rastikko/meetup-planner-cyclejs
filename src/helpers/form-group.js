import {div, input, label} from '@cycle/dom';

function formGroup(properties) {
  let id = properties.id;
  let labelText = properties.labelText;
  let placeholderText = properties.placeholderText;
  let inputType = properties.inputType;
  let inputValue = properties.inputValue;
  let validationErrors = properties.validationErrors;
  let afterDOM = properties.afterDOM;

  const errorClass = (validationErrors.length) ? 'has-error': '';
  let validationErrorsDOM = [];
  validationErrors.forEach((value) => {
    validationErrorsDOM.push(div('.text-right .bg-danger', [value]));
  });

  return div('.form-group', {className: errorClass}, [
    label('.form-group-label', {attributes: {for: id}}, [labelText]),
    input(`#${id}`, {className: 'form-control', type: inputType, placeholder: placeholderText, value: inputValue}),
    validationErrorsDOM,
    afterDOM
  ]);
}

export {formGroup};
