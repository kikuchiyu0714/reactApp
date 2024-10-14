import React from 'react';
import 'bulma/css/bulma.min.css';

const Header = () => {
  return (
    <nav className="navbar custom-bar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <a className="navbar-item" href="/">
          <img src="/JFC-logo.svg" alt="JFC Logo"/>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">HOME</a>
          <a className="navbar-item" href="/about">ABOUT</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;