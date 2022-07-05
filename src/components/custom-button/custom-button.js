import React from "react";
import PropTypes from "prop-types";
import styles from "./custom-button.module.css";

const CustomButton = ({ value, isSelected, handleTipSelection }) => {
  return (
    <button
      className={`${styles.customButton} ${isSelected ? styles.active : ""}`}
      onClick={() => handleTipSelection(value)}
    >
      {value}%
    </button>
  );
};

CustomButton.propTypes = {
  value: PropTypes.number,
  isSelected: PropTypes.bool,
  handleTipSelection: PropTypes.func,
};

export default CustomButton;
