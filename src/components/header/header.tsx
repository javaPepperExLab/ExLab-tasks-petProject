import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="Pizza logo" />
            <div>
              <h1>ExLab</h1>
              <p>Template text...</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
