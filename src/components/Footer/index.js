import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBackground}>
      <div className={styles.footerContent}>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Обо мне</a>
          <a href="#" className={styles.navLink}>Для кого</a>
          <a href="#" className={styles.navLink}>Программа</a>
          <a href="#" className={styles.navLink}>Тарифы</a>
          <a href="#" className={styles.navLink}>Спикеры</a>
          <a href="#" className={styles.navLink}>Отзывы</a>
        </nav>
        <div className={styles.footerTop}>
          <div className={styles.contactInfo}>
            <p className={styles.email}>22dasha07@gmail.com</p>
            <h1 className={styles.businessName}>ФОП ДАРЬЯ ЛЕВИНА</h1>
            <p className={styles.businessNumber}>492485732</p>
          </div>
          <div className={styles.footerLinks}>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
            <p>Сайт сделан с любовью</p>
            <p>@an.romashchenko</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
