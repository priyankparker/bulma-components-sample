import React, { useState, useCallback } from 'react';

function Tag({
  className = '',
  parentWidth = null,
  parentOffsetLeft = null,
  children,
  ...props
}) {
  const [visibilityClassName, setVisibilityClassName] = useState('');

  const measuredRef = useCallback(node => {
    console.log('here two', parentWidth, parentOffsetLeft)
    if (node !== null && parentWidth !== null && parentOffsetLeft !== null) {
      setVisibilityClassName(
        node.getBoundingClientRect().offsetLeft +
          node.getBoundingClientRect().offsetWidth -
          parentOffsetLeft >
          parentWidth
          ? ' is-hidden'
          : ''
      );
    }
  }, []);

  return (
    <>
      {children && (
        <div
          ref={measuredRef}
          className={`tag ${className} ${visibilityClassName}`}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Tag;
