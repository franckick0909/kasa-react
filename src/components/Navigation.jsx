import { NavLink } from "react-router-dom";
import logoheader from '../assets/images/logoHeader.png';
import React from "react";

const Navigation = () => {
  return (
    <header>
      <img  src={logoheader} alt="logo" />
      <nav>
        <ul className="ul">
          <NavLink to="/"className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>A Propos</li>
          </NavLink>
          <NavLink to="*/*"className={(nav) => (nav.isActive ? "nav-active" : "")}>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
