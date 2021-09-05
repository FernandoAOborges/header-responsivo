import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [abrir, setAbrir] = useState(false);

  return (
    <header>
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>

      <nav>
        <div className="menu-icon" onClick={() => setAbrir(!abrir)}>
          <i className={abrir ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={abrir ? "lista" : "lista fechar"}>
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
