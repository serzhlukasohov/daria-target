import React from 'react';
import styles from './Promo.module.css';

const Promo = () => {
  return (
    <article className={styles.promoContainer}>
      <header className={styles.promoHeader}>
        <section className="space-y-2">
          <h1 className={styles.promoTitle}>
            <i className={styles.promoSubtitle}>PROTARGET</i> СОТРИ
            ГРАНИЦЫ В ПРОДВИЖЕНИИ
          </h1>
        </section>
        <p className={styles.promoDescription}>
          С любой точки мира, без связей ты сможешь зарабатывать 1000-3000$ с помощью таргетированной рекламы. Я тебя научу!
        </p>
      </header>
      <div className={styles.promoFooterContainer}>
        <div className={styles.promoInfoContainer}>
          <span className={styles.promoInfoItem}>Онлайн</span>
          <span className={styles.promoInfoItem}>С спикеров</span>
        </div>
        <button className={styles.promoLearnButton}>Заполнить анкету</button>
        <div className={styles.promoInfoContainer}>
          <span className={styles.promoInfoItem}>8 недель</span>
          <span className={styles.promoInfoItem}>22.01.2024</span>
        </div>
      </div>
    </article>
  )
}

export default Promo;