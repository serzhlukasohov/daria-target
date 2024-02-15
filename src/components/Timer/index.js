import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const padWithZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };
  
  const calculateTimeLeft = () => {
    const difference = +new Date("February 20, 2024 00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padWithZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padWithZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padWithZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padWithZero(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.countdownTimer}>
      <h2 className={styles.title}>ИДЕТ ПРЕДЗАПИСЬ!</h2>
      <h3 className={styles.subtitle}>Окончание через:</h3>
      <div className={styles.timerContainer}>
        <div className={styles.timerSection}>
          <span className={styles.timer}>{timeLeft.days}</span>
          <span className={styles.date}>дней</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timerSection}>
          <span className={styles.timer}>{timeLeft.hours}</span>
          <span className={styles.date}>часа</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timerSection}>
          <span className={styles.timer}>{timeLeft.minutes}</span>
          <span className={styles.date}>мин</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timerSection}>
          <span className={styles.timer}>{timeLeft.seconds}</span>
          <span className={styles.date}>сек</span>
        </div>
      </div>
      <button className={`button ${styles.fillBtn}`}>
        Заполнить анкету
      </button>
    </div>
  );
};

export default Timer;