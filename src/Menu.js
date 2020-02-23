/* eslint-disable */

import React, { useState } from 'react';
import NavBarSignUp from './components/NavBarSignUp';
// import Link from './components/Link';
import { Link } from '@reach/router';
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import fetch from 'node-fetch';

function NavbarDropdownLabel({ label = false }) {
  return <>{label && <NavbarLink>{label}</NavbarLink>}</>;
}

function NavbarItemDropdown({ label = false, children }) {
  return (
    <>
      {label && children && (
        <NavbarItem className={`has-dropdown is-hoverable`}>
          <NavbarDropdownLabel label={label} />
          <div className="navbar-dropdown">{children}</div>
        </NavbarItem>
      )}
    </>
  );
}

function Menu({
  id = 'navbarBasic',
  className = '',
  style = {},
  // setRoute = () => {},
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const [isSubscribeModalActive, setIsSubscribeModalActive] = useState(true);
  const [isLoginModalActive, setIsLoginModalActive] = useState(false); //update debug
  const i = 0;
  function incrementServerCounter() {
    console.log('asdwadasda')
    return fetch('http://localhost:3001/')
    .then(r => r.text())
    .then(r => console.log(`${i}. --->${r}`))
    .catch(err => console.log('error: ', err))
  }
  async function handleLogin(loginData) {
    console.log('loginData: ', loginData);
    await incrementServerCounter()
    await incrementServerCounter()
  }

  function handleSignUp(signUpData) {
    console.log('signUpData: ', signUpData);
  }

  return (
    <>
      <nav
        className={`navbar ${className}`}
        role="navigation"
        aria-label="main navigation"
        style={{ ...style }}
        {...props}
      >
        <NavbarBrand
          isActive={isActive}
          setIsActive={setIsActive}
          logoLink="https://bulma.io/"
          logoImgLink="https://bulma.io/images/bulma-logo.png"
          showLogo={false}
        />
        <div id={id} className={`navbar-menu ${isActive && 'is-active'}`}>
          <NavbarStart>
            <NavbarItem>
              <Link to="/" className="links">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/news" className="links">
                News
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/sports" className="links">
                Sports
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/world" className="links">
                World
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/movies" className="links">
                Movies
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/arts" className="links">
                Arts
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/business" className="links">
                Business
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/tech" className="links">
                Tech
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/science" className="links">
                Science
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/fashion" className="links">
                Fashion
              </Link>
            </NavbarItem>
          </NavbarStart>

          <NavbarEnd>
            <NavbarItem>
              <NavBarSignUp
                handleNavbarSubscribe={() => setIsSubscribeModalActive(true)}
                handleNavbarLogin={() => setIsLoginModalActive(true)}
              />
            </NavbarItem>
          </NavbarEnd>
        </div>
      </nav>

      {isLoginModalActive && (
        <Modal isModalActive={isLoginModalActive} setIsModalActive={setIsLoginModalActive}>
          <LoginForm
            setIsActive={setIsLoginModalActive}
            handleLogin={handleLogin}
          />
        </Modal>
      )}

      {isSubscribeModalActive && (
        <Modal isModalActive={isSubscribeModalActive} setIsModalActive={setIsSubscribeModalActive}>
          <SignupForm
            setIsActive={setIsSubscribeModalActive}
          />
        </Modal>
      )}
    </>
  );
}

function Divider() {
  return <hr className="navbar-divider" />;
}

function NavbarBrand({
  logoLink = false,
  logoImgLink = false,
  logoWidth = '112',
  logoHeight = '28',
  navbarName = 'navbarBasic',
  isActive = false,
  setIsActive = () => {},
  showLogo = true,
  ...props
}) {
  return (
    <div className="navbar-brand" {...props}>
      {logoLink && logoImgLink && showLogo && (
        <a className="navbar-item" href={logoLink}>
          <img src={logoImgLink} width={logoWidth} height={logoHeight} />
        </a>
      )}

      <a
        role="button"
        className={`navbar-burger burger ${isActive && 'is-active'}`}
        onClick={() => setIsActive(!isActive)}
        aria-label="menu"
        aria-expanded="false"
        data-target={navbarName}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
}

export function NavbarItem({ children, className = '', style = {}, ...props }) {
  return (
    <>
      {children && (
        <div
          className={`navbar-item ${className}`}
          style={{
            cursor: 'pointer',
            ...style,
          }}
          {...props}
        >
          <span
            style={{
              fontSize: '1.25rem',
            }}
          >
            {children}
          </span>
        </div>
      )}
    </>
  );
}

function NavbarLink({ children }) {
  return <>{children && <div className="navbar-link">{children}</div>}</>;
}

function NavbarStart({ children }) {
  return <>{children && <div className="navbar-start">{children}</div>}</>;
}

function NavbarEnd({ children }) {
  return <>{children && <div className="navbar-end">{children}</div>}</>;
}

export default Menu;

const menuItems = {
  home: {
    links: false,
    name: 'Home',
  },
  news: {
    links: false,
    name: 'News',
  },
  sports: {
    links: false,
    name: 'Sports',
  },
  business: {
    links: false,
    name: 'Business',
  },
  contact: {
    links: false,
    name: 'Contact Us',
  },
  about: {
    links: false,
    name: 'About Us',
  },
  community: {
    links: false,
    name: 'Community',
  },
  movies: {
    links: false,
    name: 'Movies',
  },
  fashion: {
    links: false,
    name: 'Fashion',
  },
  world: {
    links: false,
    name: 'World',
  },
  tech: {
    links: false,
    name: 'Tech',
  },
  food: {
    links: false,
    name: 'Food',
  },
  art: {
    links: false,
    name: 'Arts',
  },
};
