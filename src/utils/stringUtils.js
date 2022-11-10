function isStringNotNumberAndNotEmpty(value) {
  const isvalueString = typeof value === 'string';
  const isValueNotNumber = isNaN(parseInt(value));
  const result = isvalueString && isValueNotNumber && value.length > 0;
  console.log('> validateTodoInputTitelValue -> result', {
    result,
    isInputValueString: isvalueString,
    isInputValueNotNumber: isValueNotNumber,
  });
  return result;
}

export { isStringNotNumberAndNotEmpty };
