import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function HeaderComponent() {
  return (
    <div className="header">
      <Link className="logo-contaienr" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
