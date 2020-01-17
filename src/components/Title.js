import React from 'react';
import PanelTitle from './PanelTitle';

function Title({ children: text, className = '', style = {}, as: T = 'h1' }) {
  return (
    <>
      {text && (
        <T className={`title ${className}`} style={{ ...style }}>
          {text}
        </T>
      )}
    </>
  );
}

export function HomeTitle({ children, primaryColor }) {
  return (
    <>
      {children && (
        <PanelTitle
          style={{
            color: primaryColor,
            textTransform: 'uppercase',
            fontSize: '1.5rem',
            letterSpacing: '.3rem',
            // border: 'none',
            borderTop: '1px solid ' + primaryColor,
            borderRight: '1px solid ' + primaryColor,
            borderBottom: '1px solid ' + primaryColor,
            borderLeft: '1px solid ' + primaryColor,
          }}
        >
          {children}
        </PanelTitle>
      )}
    </>
  );
}

export default Title;
