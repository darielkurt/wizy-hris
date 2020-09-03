import React from "react";

import FormInput from "../../components/form-input/form-input.component";

import "./job-info.styles.scss";

class JobInfo extends React.Component {

  render() {
    const { validate, handleChange, employeePosition, wizyEmail } = this.props;
    return (
      <div className="job-info">
        <h2 className="job-info-label">Wizy Information</h2>
        <form
          id="job-form"
          className="job-form-area"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="employeePosition"
            onChange={handleChange}
            value={employeePosition}
            label={validate? 'Position' : 'Position (required)'}
            required
          />
          <FormInput
            type="text"
            name="wizyEmail"
            onChange={handleChange}
            value={wizyEmail}
            label={validate? 'Wizy Email' : 'Wizy Email (required)'}
            required
          />
        </form>
      </div>
    );
  }
}

export default JobInfo;
