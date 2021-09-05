import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>

      <nav>
        <ul className="lista">
          <li>
            <NavLink activeClassName="ativo" to="/" exact>
              principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="ativo" exact>
              login/registro
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
