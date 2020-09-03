import React from "react";
import { NavLink } from 'react-router-dom';

import Employee from "../employee/employee.component";
import ViewEmployeesHeader from "../view-employees-header/view-employees-header.component";

import "./view-employees.styles.scss";
// import EmployeeDetails from "../employee-details/employee-details.component";

const ViewEmployees = ({ currentUser, ...props }) => {
  // console.log(currentUser,props)
  return (
    <div className="view-employees">
      <ViewEmployeesHeader />
      <div className="ve-margin">
        {currentUser
          ? currentUser.map((employee) => (
            <NavLink to={`/employees/${employee.id}`} key={employee.id}>
            <Employee key={employee.id} {...employee} />
            </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export default ViewEmployees;
// exact path={`${props.match.path}`}