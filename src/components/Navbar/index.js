import React from 'react';
import styles from './Nav.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} flex space-x-4`} aria-label="Main Navigation">
        <li className={styles.navItem}>
          <a
            href="/about"
            title="About Us"
            className={styles.navLink}
          >
            Обо мне
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="/for-whom"
            title="Target Audience"
            className={styles.navLink}
          >
            Для кого
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="/program"
            title="Program Details"
            className={styles.navLink}
          >
            Программа
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="/pricing"
            title="Pricing Plans"
            className={styles.navLink}
          >
            Тарифы
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="/speakers"
            title="Meet the Speakers"
            className={styles.navLink}
          >
            Спикеры
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="/testimonials"
            title="Customer Testimonials"
            className={styles.navLink}
          >
            Отзывы
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
