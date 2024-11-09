import React from "react";
import styles from "./index.module.css";
import Container from "../../container";
import Qcard from "../../components/Qcard";

const Home = () => {
  return (
    <Container>
      <div className={styles.Home}>
        <div className={styles.top}>
          <div className={styles.left}>Javascript</div>
          <div className={styles.right}>Interview MCQ's</div>
        </div>
        <div className={styles.bot}>
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
          <Qcard />
        </div>
      </div>
    </Container>
  );
};

export default Home;
