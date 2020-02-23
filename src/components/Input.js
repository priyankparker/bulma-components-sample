import React, { useState } from 'react';

function Input({
  minLength = 0,
  setValue = () => {},
  setIsAttemptedOnce= () => {},
  isAttemptedOnce = false,
  placeholder = '',
  type = 'text',
  className = ''
}) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={({ target: { value } }) => {

        if (value.length > minLength && !isAttemptedOnce) {
          setIsAttemptedOnce(true);
        }

        setValue(value);
      }}
    />
  );
}

export default Input;
