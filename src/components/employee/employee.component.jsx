import React from "react";
import { NavLink } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { firestore, auth } from "../../firebase/firebase.utils";

import "./employee.styles.scss";

class Employee extends React.Component {
  handleDeleteEmployee = () => {
    try {
      // console.log(auth.currentUser.uid)
      firestore
        .doc(`users/${auth.currentUser.uid}/employees/${this.props.id}`)
        .delete();
      console.log(
        "delete employee successful",
        `employee id: ${this.props.id}`
      );
    } catch (error) {
      console.log("error deleting employee", error.message);
    }
  };
//
  render() {
    const {
      firstName,
      lastName,
      employeePosition,
      wizyEmail,
      contactNumber, 
      ...otherProps
    } = this.props;
    // console.log(otherProps.id)
    return (
      <div className="employee">
        <div className="employee-pic">
          <span className="pic-kunyari"></span>
        </div>
        <div className="employee-deets">
          <h3 className="employee-name">
            {firstName} {lastName}
          </h3>
          <h3 className="employee-position">{employeePosition}</h3>
          <h3 className="employee-wizy-email">{wizyEmail}</h3>
          <h3 className="employee-contact-number">{contactNumber}</h3>
        </div>
        <div className="employee-option">
          <NavLink to={`/employees/edit-employee/${otherProps.id}`}>
            <CustomButton name="EDIT" classname="edit-employee-button" />
          </NavLink>
          <NavLink to="/employees">
            <CustomButton
              name="DELETE"
              classname="delete-employee-button"
              onClick={this.handleDeleteEmployee}
            />
          </NavLink>
        </div>
      </div>
    );
  }
}

// export default Employee;
// import React from "react";
// import { Link } from "react-router-dom";

// import CustomButton from "../custom-button/custom-button.component";
// import { firestore, auth } from "../../firebase/firebase.utils";

// import "./employee.styles.scss";

// const Employee = () => {
//   return (
//     <div className="employee">
//       <div className="employee-pic">
//         <span className="pic-kunyari"></span>
//       </div>
//       <div className="employee-deets">
//         <h3 className="employee-name">
//           {firstName} {lastName}
//         </h3>
//         <h3 className="employee-position">{employeePosition}</h3>
//         <h3 className="employee-wizy-email">{wizyEmail}</h3>
//         <h3 className="employee-contact-number">{contactNumber}</h3>
//       </div>
//       <div className="employee-option">
//         <Link to="/edit-employee">
//           <CustomButton name="EDIT" classname="edit-employee-button" />
//         </Link>
//         <CustomButton
//           name="DELETE"
//           classname="delete-employee-button"
//           // onClick={handleDeleteEmployee}
//         />
//       </div>
//     </div>
//   );
// };

export default Employee;
