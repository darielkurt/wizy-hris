import React from "react";

import "./employee-details.styles.scss";

class EmployeeDetails extends React.Component {
  render() {
    const item = this.props.currentUser.find(
      (a) => `/employees/${a.id}` === this.props.match.url
    );

    return item ? (
      <div className="employee-details">
      <div className="ed-item-wrapper">
      <h2 className="ed-label">Personal Information</h2>
      <div className="ed-info">
        <h3>
          First Name: <span className='ed-value'>{item.firstName}</span>
        </h3>
        <h3>Last Name: <span className='ed-value'>{item.lastName}</span></h3>
        <h3>Contact Number: <span className='ed-value'>{item.contactNumber}</span></h3>
        <h3>Personal Email: <span className='ed-value'>{item.personalEmail}</span></h3>
        <h3>Birthdate: <span className='ed-value'>{item.birthdate}</span></h3>
        <h3>Blood Type: <span className='ed-value'>{item.bloodType}</span></h3>
        <h3>Address: <span className='ed-value'>{item.address}</span></h3>
      </div>
    </div>
    <div className="ed-item-wrapper">
      <h2 className="ed-label">Wizy Information</h2>
      <div className="ed-info">
        <h3>Employee Position: <span className='ed-value'>{item.employeePosition}</span></h3>
        <h3>Wizy Email: <span className='ed-value'>{item.wizyEmail}</span></h3>
      </div>
    </div>
    <div className="ed-item-wrapper">
      <h2 className="ed-label">Employment Information</h2>
      <div className="ed-info">
        <h3>SSS Number: <span className='ed-value'>{item.SSS}</span></h3>
        <h3>PhilHealth: <span className='ed-value'>{item.PhilHealth}</span></h3>
        <h3>PAGIBIG: <span className='ed-value'>{item.PAGIBIG}</span></h3>
        <h3>TIN: <span className='ed-value'>{item.TIN}</span></h3>
      </div>
    </div>
    <div className="ed-item-wrapper">
      <h2 className="ed-label">Emergency Information</h2>
      <div className="ed-info">
        <h3>Emergency Contact Name: <span className='ed-value'>{item.emergencyContactName}</span></h3>
        <h3>
          Emergency Contact Relationship: <span className='ed-value'>{item.emergencyContactRelationship}</span>
        </h3>
        <h3>Emergency Contact Number: <span className='ed-value'>{item.emergencyContactNumber}</span></h3>
      </div>
    </div>
      </div>
    ) : (
      <div className='loading'><span className='loading-text'>Loading...</span></div>
    );
  }
}

export default EmployeeDetails;

    // const {
    //   firstName,
    //   lastName,
    //   contactNumber,
    //   personalEmail,
    //   birthdate,
    //   bloodType,
    //   address,
    //   employeePosition,
    //   wizyEmail,
    //   SSS,
    //   PhilHealth,
    //   PAGIBIG,
    //   TIN,
    //   emergencyContactName,
    //   emergencyContactRelationship,
    //   emergencyContactNumber,
    // } = item;
