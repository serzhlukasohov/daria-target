import React from "react";
import Image from "next/image";

import styles from "./CareerPath.module.css";
import EntrepreneurIcon from "./images/entrepreneur.svg";
import NewbieIcon from "./images/newbie.svg";
import OwnerIcon from "./images/owner.svg";
import SmmIcon from "./images/smm.svg";
import TargetologistIcon from "./images/targetologist.svg";

const CareerPath = () => {
  return (
    <section className={styles.careerPathContainer}>
      <h2 className={styles.careerPathItem}>ДЛЯ ТЕБЯ, ЕСЛИ ТЫ</h2>
      <div className={styles.careerPathList}>
        <div className={styles.careerPathBlock}>
          <div>
            <div className={styles.careerPathFlex}>
              <Image width="56" height="56" src={NewbieIcon} />
              <h3 className={styles.careerPathTitle}>Новичок</h3>
            </div>

            <p className={styles.careerPathText}>
              Очень хочешь соприкоснуться с онлайном и освоить профессию
              таргетолог с 0, зарабатывать от 1000$ месяц.
            </p>
          </div>
          <div>
            <div className={styles.careerPathFlex}>
              <Image width="56" height="56" src={TargetologistIcon} />
              <h3 className={styles.careerPathTitle}>Таргетолог</h3>
            </div>

            <p className={styles.careerPathText}>
              У тебя есть база знаний, но ты хочешь закрыть пробелы в таргете,
              продажах, коммуникации с клиентами, создать личный бренд и
              повысить свою квалификацию чтобы зарабатывать больше.
            </p>
          </div>
        </div>

        <div className={styles.careerPathBlock}>
          <div>
            <div className={styles.careerPathFlex}>
              <Image width="56" height="56" src={SmmIcon} />
              <h3 className={styles.careerPathTitle}>
                SMM специалист/фрилансер
              </h3>
            </div>

            <p className={styles.careerPathText}>
              Хочешь дополнить свои знания по продажам услуг и таргету чтобы
              перескочить потолок в заработке, поднять чек и быть еще полезнее
              своим клиентам.
            </p>
          </div>
        </div>

        <div className={styles.careerPathBlock}>
          <div>
            <div className={styles.careerPathFlex}>
              <Image width="56" height="56" src={EntrepreneurIcon} />
              <h3 className={styles.careerPathTitle}>Предприниматель</h3>
            </div>

            <p className={styles.careerPathText}>
              Хочешь научиться настраивать рекламу самостоятельно, чтобы иметь
              стабильный поток заявок и рост в доходе.
            </p>
          </div>
          <div>
            <div className={styles.careerPathFlex}>
              <Image width="56" height="56" src={OwnerIcon} />
              <h3 className={styles.careerPathTitle}>Владелец бизнеса</h3>
            </div>

            <p className={styles.careerPathText}>
              Хочешь повысить квалификацию своих сотрудников в таргетированной
              рекламе, чтобы полностью сфокусироваться на развитии своего
              бизнеса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
