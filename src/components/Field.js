import React from 'react';

function Field({
  label = '',
  inputType: type = 'text',
  placeholder = '',
  helpText = null,
  ...props
}) {
  return (
    <>
      {label && (
        <div class="field">
          <label class="label">{label}</label>
          <div class="control">
            <input class="input" type={type} placeholder={placeholder} />
          </div>
          {helpText && <p class="help">{helpText}</p>}
        </div>
      )}
    </>
  );
}

export default Field;
