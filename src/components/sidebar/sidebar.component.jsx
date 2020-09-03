import React from "react";
import { Link } from "react-router-dom";

import User from "../user/user.component";
import SidebarMenu from "../sidebar-menu/sidebar-menu.component";

import "./sidebar.styles.scss";

const SideBar = ({ currentUser }) => (
  <div className="sidebar">
  <Link className='hris-link' to="/employees">
    <h1 className="hris-title">Wizy HRIS</h1>
  </Link>
    <User currentUser={currentUser} />
    <SidebarMenu />
  </div>
);

export default SideBar;
