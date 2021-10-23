import React, { useState, useRef, useEffect } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SideBar from "../Sideabar/Sidebar";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className={classes.left}>
          <NavLink to="/" className={classes.logo}>
            SellHouse.org <i className="fas fa-shapes"></i>
          </NavLink>
        </div>
        <div className={classes.right}>
          <NavLink exact to="/" activeClassName={classes.active}>
            Home
          </NavLink>
          <NavLink to="/view" activeClassName={classes.active}>
            View
          </NavLink>
          <NavLink exact to="/profile" activeClassName={classes.active}>
            Profile
          </NavLink>
          <NavLink exact to="/dashboard" activeClassName={classes.active}>
            Dashboard
          </NavLink>
          <NavLink exact to="/login" activeClassName={classes.active}>
            Login
          </NavLink>
        </div>
        <div className={classes.toggle} onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <SideBar toggle={toggle} />
    </>
  );
};

export default NavBar;
