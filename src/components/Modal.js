import React from 'react';
import { useState } from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
function Modal({
  children,
  isModalActive: isActive = false,
  setIsModalActive: setIsActive = () => {},
  className = '',
  ...props
}) {
  return (
    <>
      {children && (
        <div className={`modal ${isActive ? 'is-active' : ''}`} {...props}>
          <div
            className="modal-background"
            onClick={() => setIsActive(false)}
          ></div>
          <div className="modal-content">{children}</div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setIsActive(false)}
          ></button>
        </div>
      )}
    </>
  );
}

export default Modal;
