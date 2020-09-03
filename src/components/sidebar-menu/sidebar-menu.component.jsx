import React from "react";

import { Link } from "react-router-dom";

import "./sidebar-menu.styles.scss";

const SidebarMenu = () => (
  <div className="sidebar-menu">
    <Link to="/dashboard" className="menu-text">
      Dashboard
    </Link>
    <Link to="/employees" className="menu-text">
      Employees
    </Link>
  </div>
);

export default SidebarMenu;
