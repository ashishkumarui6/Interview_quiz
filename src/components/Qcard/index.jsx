import React from "react";
import styles from "./index.module.css";
const Qcard = () => {
  return (
    <div className={styles.Qcard}>
      <div className={styles.left}>
        <div className={styles.serial_num}>
          <p>1.</p>
        </div>
        <h1>Which is not valid data type in Javascript?</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.Question1}>
          <input type="radio" name="1" />
          <p>A.</p>
          <label>Undefinded</label>
        </div>
        <div className={styles.Question2}>
          <input type="radio" name="1" />
          <p>B.</p>
          <label>Undefinded</label>
        </div>
        <div className={styles.Question3}>
          <input type="radio" name="1" />
          <p>C.</p>
          <label>Undefinded</label>
        </div>
        <div className={styles.Question4}>
          <input type="radio" name="1" />
          <p>D.</p>
          <label>Undefinded</label>
        </div>
      </div>
    </div>
  );
};

export default Qcard;
