import React from "react";
import { Link } from "react-router-dom";

import Header from "../header/header.component";

import "./dashboard.styles.scss";

const Dashboard = (props) => {
  // console.log(props.employees)
  const currentDate = new Date().toLocaleDateString();
  const createdToday = props.employees.filter(
    (employee) => employee.createdAt === currentDate
  );
  const birthdayToday = props.employees.filter(
    (employee) => employee.birthdate === currentDate
  );

  return (
    <div className="dashboard">
      <Header {...props} />
      <div className="dashboard-area">
        <div className="employee-count">
          <h2>Employee Count</h2>
          <div className="count-text">{props.employees.length}</div>
          <Link to="/employees">
            <h3 className="count-view-employee">View Employees</h3>
          </Link>
        </div>
        <div className="new-employees">
          <h2>New Employees</h2>
          {createdToday ? (
            createdToday.map((employee) => (
              <div
                key={employee.id}
              >{`${employee.firstName} ${employee.lastName}`}</div>
            ))
          ) : (
            <div>No new employees today.</div>
          )}
        </div>
        <div className="employee-celebrations">
          <h2>Celebrations</h2>
          {birthdayToday ? (
            birthdayToday.map((employee) => (
              <div>{`${employee.firstName} ${employee.lastName}`}</div>
            ))
          ) : (
            <div>No one has a birthday today.</div>
          )}
          <span className="celeb-emoji" role="img" aria-label="celeb-emoji">🥳</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
