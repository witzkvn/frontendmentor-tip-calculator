import React from "react";
import PropTypes from "prop-types";
import styles from "./block-wrapper.module.css";

const BlockWrapper = ({ level, withShadow, className, children }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        level === "secondary" ? styles.wrapperSecondary : styles.wrapperPrimary
      } ${withShadow ? styles.wrapperShadowed : ""}
      ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

BlockWrapper.propTypes = {
  level: PropTypes.oneOf(["primary", "secondary"]),
  withShadow: PropTypes.bool,
};

export default BlockWrapper;
