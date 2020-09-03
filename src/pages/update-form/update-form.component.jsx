import React from "react";
import { Link } from "react-router-dom";

import { firestore, auth } from "../../firebase/firebase.utils";

import PersonalInfo from "../../components/personal-info/personal-info.component";
import JobInfo from "../../components/job-info/job-info.component";
import EmploymentInfo from "../../components/employment-info/employment-info.component";
import EmergencyInfo from "../../components/emergency-info/emergency-info.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./update-form.styles.scss";

class UpdateForm extends React.Component {
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
      isLoading: true,
    };
  }

  handleSubmit = (event) => {
    try {
      firestore
        .doc(`users/${auth.currentUser.uid}/employees/${this.state.id}`)
        .update({
          ...this.state,
        })
        .then(alert("employee records updated to firestore successfully"));
    } catch (error) {
      console.log("error adding to firestore", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleIsLoading = (itemIsLoading, itemProps) => {
    if (itemIsLoading) {
      if (itemProps) {
        this.setState({ ...itemProps, isLoading: false });
      }
    }
  };

  render() {
    const item = this.props.currentUser.find(
      (a) => `/employees/edit-employee/${a.id}` === this.props.match.url
    );

    this.handleIsLoading(this.state.isLoading, item);

    // if (this.state.isLoading) {
    //   if (item) {
    //     this.setState({ ...item, isLoading: false });
    //     // console.log(item);
    //   }
    // }
    // console.log(this.props.currentUser)
    // console.log(this.props.match.url)
    // console.log(this.props)
    // console.log(item)
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
      id
    } = this.state;

    return !this.state.isLoading ? (
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
        />
        <JobInfo
          handleChange={this.handleChange}
          employeePosition={employeePosition}
          wizyEmail={wizyEmail}
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
        <Link to={`/employees/${id}`} style={{ justifyContent : 'center', display : 'flex' }}>
          <CustomButton
            type="submit"
            name="EDIT EMPLOYEE"
            classname="edit-employee-form-button"
            onClick={this.handleSubmit}
          />
        </Link>
      </div>
    ) : (
      <div className="isLoading">
        <span className="isLoading-text">Loading...</span>
      </div>
    );
  }
}

export default UpdateForm;
