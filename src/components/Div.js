import React from 'react';

function Div({ className = '', children = null, ...props }) {
  return (
    <>
      {children && (
        <div className={className} {...props}>
          {children}
        </div>
      )}
    </>
  );
}

export default Div;
