import React from "react";

import FormInput from "../../components/form-input/form-input.component";

import "./personal-info.styles.scss";

class PersonalInfo extends React.Component {
  render() {
    const {
      handleChange,
      firstName,
      lastName,
      contactNumber,
      personalEmail,
      birthdate,
      bloodType,
      address,
      validate
    } = this.props;

    return (
      <div className="personal-info">
        <h2 className="personal-info-label">Personal Information</h2>
        <form className="personal-form-area">
            <FormInput
              type="text"
              name="firstName"
              // defaultValue={firstName}
              onChange={handleChange}
              value={firstName}
              label={validate.firstName? 'First Name' : 'First Name (required)'}
              required
            />
          <FormInput
            type="text"
            name="lastName"
            onChange={handleChange}
            value={lastName}
            label={validate.lastName? 'Last Name' : 'Last Name (required)'}
            required
          />
          <FormInput
            type="text"
            name="contactNumber"
            onChange={handleChange}
            value={contactNumber}
            label={validate? 'Contact Number' : 'Contact Number (required)'}
            required
          />
          <FormInput
            type="email"
            name="personalEmail"
            onChange={handleChange}
            value={personalEmail}
            label="Personal Email"
            required
          />
          <FormInput
            type="date"
            name="birthdate"
            onChange={handleChange}
            value={birthdate}
            label="Birthdate"
            required
          />
          <FormInput
            type="text"
            name="bloodType"
            onChange={handleChange}
            value={bloodType}
            label="Blood Type"
            required
          />
          <FormInput
            type="text"
            name="address"
            onChange={handleChange}
            value={address}
            label="Address"
            required
          />
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
