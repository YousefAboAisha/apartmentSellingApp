import React from "react";
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = ({ toggle }) => {
  return (
    <div
      className={classes.nav}
      style={{
        transform: toggle ? "translateX(0)" : "translateX(1000px)",
        opacity: toggle ? "1" : "0",
      }}
    >
      <NavLink exact to="/" activeClassName={classes.active}>
        Home
      </NavLink>
      <NavLink to="/view" activeClassName={classes.active}>
        View
      </NavLink>
      <NavLink to="/profile" activeClassName={classes.active}>
        Profile
      </NavLink>
    </div>
  );
};

export default SideBar;
