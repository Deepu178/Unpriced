import { useState } from 'react';

const useInput = ({ required, validate }) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  let error = '';
  let isValid = false;

  const isValidCheck = (val) => val.trim().length > 0;

  if (required) {
    isValid = isValidCheck(value);
  }

  if (validate) isValid = validate(value);

  error = (!isValid && isTouched && required) || '';

  const blurHandler = (e) => {
    setIsTouched(true);
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    error,
    isValid,
    reset,
    blurHandler,
    changeHandler,
  };
};

export default useInput;
