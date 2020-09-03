import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({name, classname, ...otherProps}) => (
  <button className={classname} {...otherProps}> 	
{name}
  </button>
);

export default CustomButton;
