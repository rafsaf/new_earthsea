import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Link className="site-title" to="/">
          Baza wiedzy o Ziemiomorzu
        </Link>
        <nav className="site-nav">
          <div className="trigger">
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
