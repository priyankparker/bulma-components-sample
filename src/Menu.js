/* eslint-disable */

import React, { useState } from 'react';
import NavBarSignUp from './components/NavBarSignUp';
// import Link from './components/Link';
import { Link } from '@reach/router';

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

  // const setHomeRoute = () => setRoute('home');
  // const setNewsRoute = () => setRoute('news');
  // const setSportsRoute = () => setRoute('sports');
  // const setBusinessRoute = () => setRoute('business');
  // const setContactRoute = () => setRoute('contact');
  // const setAboutRoute = () => setRoute('about');
  // const setMoviesRoute = () => setRoute('movies');
  // const setFashionRoute = () => setRoute('fashion');
  // const setWorldRoute = () => setRoute('world');
  // const setTechRoute = () => setRoute('tech');
  // const setArtRoute = () => setRoute('Art');
  // const setFoodRoute = () => setRoute('food');
  // const setCommunityRoute = () => setRoute('community');
  return (
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
          {/* <NavbarItem>
                        <Link className="links" onClick={setCommunityRoute}>
                            Community
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setBusinessRoute}>
                            Business
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setTechRoute}>
                            Tech
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setMoviesRoute}>
                            Movies
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setFashionRoute}>
                            Fashion
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setFoodRoute}>
                            Food
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setArtRoute}>
                            Arts
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="links" onClick={setWorldRoute}>
                            World
                        </Link>
                    </NavbarItem>

                    <NavbarItemDropdown label="More">
                        <NavbarItem>
                            <Link className="links" onClick={setContactRoute}>
                                Contact Us
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link className="links" onClick={setAboutRoute}>
                                About Us
                            </Link>
                        </NavbarItem>
                        <Divider />
                        <NavbarItem text="Report an issue" />
                    </NavbarItemDropdown> */}
        </NavbarStart>

        <NavbarEnd>
          <NavbarItem>
            <NavBarSignUp />
          </NavbarItem>
        </NavbarEnd>
      </div>
    </nav>
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
          {children}
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
