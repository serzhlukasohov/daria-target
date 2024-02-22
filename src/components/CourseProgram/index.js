import React from 'react';
import Image from 'next/image'

import styles from './CourseProgram.module.css'
import ClipIcon from './images/clip.svg';
import BookIcon from './images/book.svg';

const CourseProgram = () => {
  return (
    <div id='program'>
      <h2 className="sectionTitle">ПРОГРАММА КУРСА</h2>
      <div className={styles.listCards}>
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.headerCard}>
        <h2 className={styles.title}><span className={styles.number}>01</span>Организационный</h2>
        <span className={styles.quantityLessons}>4 урока</span>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.cardTitle}>
          <Image
            width="24"
            height="24"
            className={styles.icon}
            src={ClipIcon}
          />
          СОДЕРЖАНИЕ
        </h3>
        <ul>
          <li className={styles.cardItem}>Как построено обучение?</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.cardTitle}>
          <Image
            width="24"
            height="24"
            className={styles.icon}
            src={BookIcon}
          />
          ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ
        </h3>
        <ul>
          <li className={styles.cardItem}>Постановка целей на курс по технике смарт</li>
        </ul>
      </div>
    </div>
  )
}

export default CourseProgram;
