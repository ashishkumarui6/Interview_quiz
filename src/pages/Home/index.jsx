import React, { useState } from "react";
import styles from "./index.module.css";
import Container from "../../container";
import Qcard from "../../components/Qcard";
import { quizeData } from "../../data/data";
import ShowResult from "../../components/ShowResult";

const Home = () => {
  const [show, setShow] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [isSelected, setIsSelected] = useState({});

  const onGetAnsawer = (qNo, opt) => {
    setIsSelected((prev) => ({ ...prev, [qNo]: opt }));
  };

  const onSubmitAnswer = () => {
    setShowResult(!showResult);
    const filterData = quizeData.filter(
      (it) => isSelected[it.Sn] === it.answer
    );
    console.log(filterData.length + "/" + quizeData.length);
    setTotalCorrect(filterData.length);
  };

  const onclose = () => {
    setShowResult(!showResult);
  };

  const onShow = () => {
    setShow(!show);
  };

  return (
    <>
      {showResult && (
        <ShowResult
          mark={totalCorrect || 0}
          total_mark={quizeData.length}
          onclose={onclose}
        />
      )}
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
            {show ? (
              <button className={styles.btn_blue} onClick={onShow}>
                Submit
              </button>
            ) : (
              <>
                <button className={styles.btn_red} onClick={onSubmitAnswer}>
                  VIEW ANSWER
                </button>
                <button className={styles.btn_green} onClick={onShow}>
                  CANCEL
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
