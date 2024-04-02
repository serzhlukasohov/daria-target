import React from "react";
import Image from "next/image";

import styles from "./CoursePath.module.css";
import ArrowIcon from "./images/arrow.svg";

const CoursePath = () => {
  return (
    <section className={styles.coursePathContainer}>
      <h2 className={styles.coursePathTitle}>ПУТЬ НА КУРСЕ</h2>

      <ol className={styles.coursePathFlex}>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>01</span>
            </div>
            <p className={styles.coursePathText}>
              Поставишь цель на курс и разработаешь план работы, чтобы достичь
              результата
            </p>
          </div>
          <div className={styles.coursePathIcon}>
            <Image width="102" height="8" src={ArrowIcon} />
          </div>
        </li>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>02</span>
            </div>
            <p className={styles.coursePathText}>
              Комплексно освоишь таргетированную рекламу, маркетинг и продажи
              услуг
            </p>
          </div>
          <div className={styles.coursePathIcon}>
            <Image width="102" height="8" src={ArrowIcon} />
          </div>
        </li>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>03</span>
            </div>
            <p className={styles.coursePathText}>
              Оформишь свою аутентичную страницу специалиста, начнешь
              выстраивать личный бренд
            </p>
          </div>
        </li>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>04</span>
            </div>
            <p className={styles.coursePathText}>
              Возмешься за поиск клиентов и будешь практиковать продажи
            </p>
          </div>
          <div className={styles.coursePathIcon}>
            <Image width="102" height="8" src={ArrowIcon} />
          </div>
        </li>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>05</span>
            </div>
            <p className={styles.coursePathText}>
              Получишь первые оплаты 200, 300, 400$ от клиентов
            </p>
          </div>
          <div className={styles.coursePathIcon}>
            <Image width="102" height="8" src={ArrowIcon} />
          </div>
        </li>
        <li className={styles.coursePathFlex}>
          <div className={styles.coursePathBlock}>
            <div className={styles.coursePathBorder}>
              <span>06</span>
            </div>
            <p className={styles.coursePathText}>
              Сдача экзамена (тестирование) и получение сертификата
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default CoursePath;
