import React from "react";
import styles from "./index.module.css";
const ShowResult = ({ mark, total_mark, onclose }) => {
  return (
    <>
      <div className={styles.show_result}>
        <div onClick={onclose} className={styles.show_result_close}>
          <p>x</p>
        </div>
        <div className={styles.show_result_container}>
          <div className={styles.show_result_container_body}>
            <div className={styles.show_result_container_body_mark}>
              <h1>{mark}</h1>
            </div>
          </div>
          <div className={styles.show_result_container_body}>
            <div className={styles.show_result_container_body_mark}>
              <h1>{total_mark}</h1>
            </div>
          </div>
          <h1 className={styles.show_result_container_title}>Your Score</h1>
        </div>
      </div>
    </>
  );
};

export default ShowResult;
