/* eslint-disable */
import React from 'react';

export default function NavBarSignUp({
  handleNavbarSubscribe = () => {},
  handleNavbarLogin = () => {},
}) {
  return (
    <div className="buttons">
      <a
        className="button is-primary is-medium"
        onClick={() => handleNavbarSubscribe()}
      >
        <strong>Subscribe</strong>
      </a>
      <a
        className="button is-primary is-outlined is-medium"
        onClick={() => handleNavbarLogin()}
      >
        Log in
      </a>
    </div>
  );
}
