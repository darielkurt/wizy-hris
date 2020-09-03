import React from "react";
import { Link } from "react-router-dom";

import { firestore, auth } from "../../firebase/firebase.utils";

import PersonalInfo from "../../components/personal-info/personal-info.component";
import JobInfo from "../../components/job-info/job-info.component";
import EmploymentInfo from "../../components/employment-info/employment-info.component";
import EmergencyInfo from "../../components/emergency-info/emergency-info.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./add-form.styles.scss";

class AddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      contactNumber: "",
      personalEmail: "",
      birthdate: "",
      bloodType: "",
      address: "",
      employeePosition: "",
      wizyEmail: "",
      SSS: "",
      PhilHealth: "",
      PAGIBIG: "",
      TIN: "",
      emergencyContactName: "",
      emergencyContactRelationship: "",
      emergencyContactNumber: "",
      validate: {
        firstName: '',
        lastName: '',
        employeePosition: '',
        wizyEmail: '',
        contactNumber: '',
      },
    };
  }

  handleSubmit = (event) => {
    try {
      if (
        !(
          this.state.firstName ||
          this.state.lastName ||
          this.state.employeePosition ||
          this.state.wizyEmail ||
          this.state.contactNumber
        )
      ) {
        event.preventDefault();
        alert("Please input values to required fields.");
        return;
      }

      // console.log(auth.currentUser.uid);
      firestore
        .collection(`users/${auth.currentUser.uid}/employees`)
        .add({
          ...this.state,
          birthdate: new Date(
            parseInt(new Date(this.state.birthdate).getTime())
          ).toLocaleDateString(),
          createdAt: new Date().toLocaleDateString(),
        })
        .then(
          console.log(
            "employee records added to firestore",
            this.state.birthdate
          )
        );
    } catch (error) {
      console.log("error adding to firestore", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
      case "firstName":
        value.length < 1
          ? this.setState({ validate: {firstName: false, ...this.state} })
          : this.setState({ validate: {firstName: true, ...this.state} })
        break;
      case "lastName":
        value.length < 1
          ? this.setState({ validate: {lastName: false, ...this.state} })
          : this.setState({ validate: {lastName: true, ...this.state} })
        break;
      // case "employeePosition":
      //   value.length < 1
      //     ? this.setState({ validate: false })
      //     : this.setState({ validate: true });
      //   break;
      // case "wizyEmail":
      //   validEmailRegex.test(value)
      //     ? this.setState({ validate: { wizyEmail: false } })
      //     : this.setState({ validate: { wizyEmail: true } });
      //   break;
      // case "contactNumber":
      //   value.length < 1
      //     ? this.setState({ validate: false })
      //     : this.setState({ validate: true });
      //   break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      contactNumber,
      personalEmail,
      birthdate,
      bloodType,
      address,
      employeePosition,
      wizyEmail,
      SSS,
      PhilHealth,
      PAGIBIG,
      TIN,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactNumber,
      validate,
    } = this.state;

    return (
      <div className="add-form">
        <PersonalInfo
          handleChange={this.handleChange}
          firstName={firstName}
          lastName={lastName}
          contactNumber={contactNumber}
          personalEmail={personalEmail}
          birthdate={birthdate}
          bloodType={bloodType}
          address={address}
          validate={validate}
        />
        <JobInfo
          handleChange={this.handleChange}
          employeePosition={employeePosition}
          wizyEmail={wizyEmail}
          validate={validate}
        />
        <EmploymentInfo
          handleChange={this.handleChange}
          SSS={SSS}
          PhilHealth={PhilHealth}
          PAGIBIG={PAGIBIG}
          TIN={TIN}
        />
        <EmergencyInfo
          handleChange={this.handleChange}
          emergencyContactName={emergencyContactName}
          emergencyContactRelationship={emergencyContactRelationship}
          emergencyContactNumber={emergencyContactNumber}
        />
        <Link
          to="/employees"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <CustomButton
            type="submit"
            name="ADD EMPLOYEE"
            classname="add-employee-form-button"
            onClick={this.handleSubmit}
          />
        </Link>
      </div>
    );
  }
}

export default AddForm;
