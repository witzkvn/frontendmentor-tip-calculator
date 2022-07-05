import React from "react";
import styles from "./custom-button.module.css";

const CustomButton = ({ children }) => {
  return <button className={styles.customButton}>{children}</button>;
};

export default CustomButton;
