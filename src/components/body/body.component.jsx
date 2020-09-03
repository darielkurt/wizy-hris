import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header/header.component";
import ViewEmployees from "../view-employees/view-employees.component";
import AddForm from "../../pages/add-form/add-form.component";
import UpdateForm from "../../pages/update-form/update-form.component";

import "./body.styles.scss";
import EmployeeDetails from "../employee-details/employee-details.component";

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Header {...this.props} />
        <Switch>
          <Route
            exact
            path="/employees"
            render={(props) => <ViewEmployees {...this.props} {...props} />}
          />
          <Route exact path="/employees/add-employee" component={AddForm} />
          <Route
            path="/employees/edit-employee/:employeeId"
            render={(props) => <UpdateForm {...this.props} {...props} />}
          />
          <Route
            path={`/employees/:employeeId`}
            render={(props) => <EmployeeDetails {...this.props} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Body;

// <Route exact path="/:employeeId" render={() => <EmployeeDetails {...this.props} />}
// />
