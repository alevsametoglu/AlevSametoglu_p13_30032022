import React from "react";
import { Link } from "react-router-dom";
import logo from "./argentBankLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div>
        <Link to="login" className="login">
          <i className="fa fa-user-circle"></i>
          <span>Sing in</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
