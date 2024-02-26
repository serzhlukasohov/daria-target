import React from "react";
import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <article className={styles.promoContainer}>
      <header className={styles.promoHeader}>
        <h1 className={styles.promoTitle}>
          <i className={styles.promoSubtitle}>PROTARGET</i> СОТРИ
          <br /> ГРАНИЦЫ В ПРОДВИЖЕНИИ
        </h1>

        <p className={styles.promoDescription}>
          С любой точки мира, без связей ты сможешь зарабатывать 1000-3000$ с
          помощью таргетированной рекламы. <br className={styles.br}></br>Я тебя
          научу!
        </p>
      </header>
      <div className={styles.promoFooterContainer}>
        <div className={styles.promoInfoContainer}>
          <span className={styles.promoInfoItem}>Онлайн</span>
          <span className={styles.promoInfoItem}>С спикеров</span>
        </div>
        <div className={styles.promoLearnButton}>
          <button>Заполнить анкету</button>
        </div>

        <div className={styles.promoInfoContainer}>
          <span className={styles.promoInfoItem}>8 недель</span>
          <span className={styles.promoInfoItem}>22.01.2024</span>
        </div>
      </div>
    </article>
  );
};

export default Promo;
