import React from 'react';
import styles from './FAQSection.module.css'

const FAQSection = () => {
  return (
    <div className={styles.faqContainer}>
      <h2 className="sectionTitle">
        ВОПРОС-ОТВЕТ
      </h2>
      <div className={styles.questionGrid}>
        <Question text="Могу ли купить курс в рассрочку?" />
        <Question text="Что обязательно нужно для работы?" />
        <Question text="Как проходят уроки? Есть ли запись? Сколько длится уроки?" />
        <Question text="Я учусь/работаю в наёме/мама в декрете смогу ли совмещать осн деятельность и курс?" />
        <Question text="Я вообще не разбираюсь в таргете, подойдет ли мне обучение?" />
        <Question text="У меня уже есть опыт, подойдет ли мне курс?" />
        <Question text="Как быстро я смогу окупить курс?" />
        <Question text="Как получить сертификат? Они выдаются всем?" />
      </div>
      <button className="button">
        Заполнить анкету
      </button>
    </div>
  );
};

function Question({ text }) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionText}>{text}</div>
      <div className={styles.plusIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0C8.95437 0 0 8.95437 0 20C0 31.0462 8.95437 40 20 40C31.0462 40 40 31.0462 40 20C40 8.95437 31.0462 0 20 0ZM20 37.5394C10.3506 37.5394 2.5 29.6494 2.5 19.9999C2.5 10.3505 10.3506 2.49992 20 2.49992C29.6494 2.49992 37.5 10.3506 37.5 19.9999C37.5 29.6493 29.6494 37.5394 20 37.5394ZM28.75 18.75H21.25V11.25C21.25 10.56 20.69 10 20 10C19.31 10 18.75 10.56 18.75 11.25V18.75H11.25C10.56 18.75 10 19.31 10 20C10 20.69 10.56 21.25 11.25 21.25H18.75V28.75C18.75 29.44 19.31 30 20 30C20.69 30 21.25 29.44 21.25 28.75V21.25H28.75C29.44 21.25 30 20.69 30 20C30 19.31 29.44 18.75 28.75 18.75Z" fill="#261436" />
        </svg>
      </div>
    </div>
  );
}

export default FAQSection;