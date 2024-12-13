import React from "react";
import styles from "./index.module.css";
const Qcard = ({ Sn, heading, A, B, C, D, isSelected, onGetAnsawer }) => {
  return (
    <div className={styles.Qcard}>
      <div className={styles.left}>
        <div className={styles.serial_num}>
          <p>{Sn}.</p>
        </div>
        <h1>{heading}</h1>
      </div>
      <div className={styles.right}>
        <div onClick={() => onGetAnsawer(Sn, A)} className={styles.Question1}>
          <input type="radio" name={heading} checked={isSelected === A} />
          <p>A.</p>
          <label>{A}</label>
        </div>
        <div onClick={() => onGetAnsawer(Sn, B)} className={styles.Question2}>
          <input type="radio" name={heading} checked={isSelected === B} />
          <p>B.</p>
          <label>{B}</label>
        </div>
        <div onClick={() => onGetAnsawer(Sn, C)} className={styles.Question3}>
          <input type="radio" name={heading} checked={isSelected === C} />
          <p>C.</p>
          <label>{C}</label>
        </div>
        <div onClick={() => onGetAnsawer(Sn, D)} className={styles.Question4}>
          <input type="radio" name={heading} checked={isSelected === D} />
          <p>D.</p>
          <label>{D}</label>
        </div>
      </div>
    </div>
  );
};

export default Qcard;
