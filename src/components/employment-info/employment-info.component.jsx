import React from "react";

import FormInput from "../../components/form-input/form-input.component";

import "./employment-info.styles.scss";

class EmploymentInfo extends React.Component {

  render() {
    const { handleChange, SSS, PhilHealth, PAGIBIG, TIN } = this.props;
    return (
      <div className="employment-info">
        <h2 className="employment-info-label">Employment Information</h2>
        <form
          id="employment-form"
          className="employment-form-area"
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type="text"
            name="SSS"
            onChange={handleChange}
            value={SSS}
            label="SSS Number"
            required
          />
          <FormInput
            type="text"
            name="PhilHealth"
            onChange={handleChange}
            value={PhilHealth}
            label="PhilHealth"
            required
          />
          <FormInput
            type="text"
            name="PAGIBIG"
            onChange={handleChange}
            value={PAGIBIG}
            label="PAGIBIG"
            required
          />
          <FormInput
            type="text"
            name="TIN"
            onChange={handleChange}
            value={TIN}
            label="TIN"
            required
          />
        </form>
      </div>
    );
  }
}

export default EmploymentInfo;
