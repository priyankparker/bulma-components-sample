import React, { useCallback } from 'react';
import Tag from './Tag';

function Tags({
  className = '',
  tagClassName = '',
  children,
  parentWidth,
  parentOffsetLeft,
  ...props
}) {
  console.log(
    parentWidth,
  parentOffsetLeft
  )
  return (
    <>
      {children && (
        <div className={`tags ${className}`} {...props}>
          {children.map((child, i) => {
            return (
              <Tag
                key={i}
                className={tagClassName}
                parentWidth={parentWidth}
                parentOffsetLeft={parentOffsetLeft}
              >
                {child}
              </Tag>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Tags;
