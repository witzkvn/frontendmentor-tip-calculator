import React from "react";
import styles from "./result-screen.module.css";

const ResultScreen = ({ tipPerPerson, totalPerPerson }) => {
  return (
    <section className={styles.resultScreen}>
      <div className={styles.resultBox}>
        <div className={styles.resultItem}>
          <p className={styles.resultTitle}>Tip Amount</p>
          <p className={styles.resultSubTitle}>/ person</p>
        </div>
        <div className={styles.resultValue}>${tipPerPerson || 0}</div>
      </div>
      <div className={styles.resultBox}>
        <div className={styles.resultItem}>
          <p className={styles.resultTitle}>Total</p>
          <p className={styles.resultSubTitle}>/ person</p>
        </div>
        <div className={styles.resultValue}>${totalPerPerson || 0}</div>
      </div>
      <button className={styles.resetBtn}>Reset</button>
    </section>
  );
};

export default ResultScreen;
