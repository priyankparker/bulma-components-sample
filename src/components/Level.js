import React, { useState, useCallback } from 'react';

function Level({ className = '', children, time = null, ...props }) {
  const [width, setWidth] = useState(0);
  // const levelEl = useRef(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const navRef = useCallback(node => {
    if (node !== null) {
      console.log(node.getBoundingClientRect())
      setWidth(node.getBoundingClientRect().width);
      setOffsetLeft(node.getBoundingClientRect().offsetLeft);
    }
  });

  const addParentProps = child => ({
    ...child,
    parentOffsetLeft: offsetLeft,
    parentWidth: width,
  });
  return (
    <nav ref={navRef} className={`level is-mobile ${className}`} {...props}>
      <div className="level-left">
        {/* {children} */}
        {children &&
          (Array.isArray(children)
            ? children.map(Component => {
                console.log('here');
                let comp = (
                  <Component
                    parentOffsetLeft={offsetLeft}
                    parentWidth={width}
                  />
                );
                return comp;
              })
            : [children].map(addParentProps))}
            {/* : [children].map(child => {
              console.log('here')
            }))} */}
      </div>
      {time && (
        <div className="level-right">
          <small style={{ color: 'grey' }}>{time}</small>
        </div>
      )}
    </nav>
  );
}

export default Level;
