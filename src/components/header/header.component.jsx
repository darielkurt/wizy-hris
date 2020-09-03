import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./header.styles.scss";

const Header = props => {
  return (
    <div className="header">
      <h2 className="route-name">{`${props.location.pathname}`.replace(/\//g, ' > ')}</h2>
      <Link to="/employees/add-employee">
        <CustomButton
          name="&#65291; Add Employee"
          classname="add-employee-button"
        />
      </Link>
    </div>
  );
};

export default Header;
