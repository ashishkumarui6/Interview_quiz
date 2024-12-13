import React, { useState } from "react";
import styles from "./index.module.css";
import Container from "../../container";
import Qcard from "../../components/Qcard";
import { quizeData } from "../../data/data";

const Home = () => {
  const [isSelected, setIsSelected] = useState({});

  const onGetAnsawer = (qNo, opt) => {
    setIsSelected((prev) => ({ ...prev, [qNo]: opt }));
  };

  const onSubmitAnswer = () => {
    const filterData = quizeData.filter(
      (it) => isSelected[it.Sn] === it.answer
    );
    console.log(filterData.length + "/" + quizeData.length);
  };

  return (
    <Container>
      <div className={styles.Home}>
        <div className={styles.top}>
          <div className={styles.left}>Javascript</div>
          <div className={styles.right}>Interview MCQ's</div>
        </div>
        <div className={styles.bot}>
          {quizeData.map((it) => {
            return (
              <Qcard
                Sn={it.Sn}
                heading={it.heading}
                A={it.aLabel}
                B={it.bLabel}
                C={it.cLabel}
                D={it.dLabel}
                isSelected={isSelected[it.Sn]}
                onGetAnsawer={onGetAnsawer}
              />
            );
          })}
        </div>
        <div className={styles.btn}>
          <button onClick={onSubmitAnswer}>Submit</button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
