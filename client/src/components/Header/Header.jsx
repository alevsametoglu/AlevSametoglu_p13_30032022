import React from "react";
import { Link } from "react-router-dom";
import logo from "./argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/appSlice";
import "./Header.scss";

const Header = () => {
  const { firstName } = useSelector((state) => state.user);
  const { isAuth } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      {isAuth ? (
        <div className="login">
          <div>
            <i className="fa fa-user-circle"></i>
            <span>{firstName}</span>
          </div>
          <div
            onClick={() => {
              dispatch(appActions.logout());
            }}
          >
            <i className="fa fa-sign-out"></i>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div>
          <Link to="login" className="login">
            <i className="fa fa-user-circle"></i>
            <span>Sing in</span>
          </Link>
        </div>
      )}{" "}
    </div>
  );
};
export default Header;
