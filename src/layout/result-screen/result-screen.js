import React from "react";
import PropTypes from "prop-types";
import styles from "./result-screen.module.css";

const ResultScreen = ({ tipPerPerson, totalPerPerson, handleResetAll }) => {
  return (
    <section className={styles.resultScreen}>
      <div className={styles.resultBox}>
        <div className={styles.resultItem}>
          <p className={styles.resultTitle}>Tip Amount</p>
          <p className={styles.resultSubTitle}>/ person</p>
        </div>
        <div className={styles.resultValue}>${tipPerPerson}</div>
      </div>
      <div className={styles.resultBox}>
        <div className={styles.resultItem}>
          <p className={styles.resultTitle}>Total</p>
          <p className={styles.resultSubTitle}>/ person</p>
        </div>
        <div className={styles.resultValue}>${totalPerPerson}</div>
      </div>
      <button
        className={`${styles.resetBtn} ${
          tipPerPerson === 0 && totalPerPerson === 0
            ? styles.desactivatedBtn
            : styles.activeBtn
        }`}
        onClick={() => handleResetAll()}
      >
        Reset
      </button>
    </section>
  );
};

ResultScreen.propTypes = {
  tipPerPerson: PropTypes.number,
  totalPerPerson: PropTypes.number,
  handleResetAll: PropTypes.func,
};

export default ResultScreen;
