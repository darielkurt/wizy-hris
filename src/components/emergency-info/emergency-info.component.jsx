import React from "react";

import FormInput from "../../components/form-input/form-input.component";

import "./emergency-info.styles.scss";

class EmergencyInfo extends React.Component {
  render() {
    const {
      handleChange,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactNumber,
    } = this.props;

    return (
      <div className="emergency-info">
        <h2 className="emergency-info-label">Emergency Information</h2>
        <form
          id="my-form"
          className="emergency-form-area"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="emergencyContactName"
            onChange={handleChange}
            value={emergencyContactName}
            label="Emergency Contact Name"
            required
          />
          <FormInput
            type="text"
            name="emergencyContactRelationship"
            onChange={handleChange}
            value={emergencyContactRelationship}
            label="Emergency Contact Relationship"
            required
          />
          <FormInput
            type="text"
            name="emergencyContactNumber"
            onChange={handleChange}
            value={emergencyContactNumber}
            label="Emergency Contact Number"
            required
          />
        </form>
      </div>
    );
  }
}

export default EmergencyInfo;
