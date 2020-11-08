import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label.name}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
        Auto Refresh
      />
      {label.name}
    </label>
  </div>
);

export default Checkbox;
