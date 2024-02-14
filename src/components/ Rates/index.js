import React from "react";
import Image from 'next/image'
import styles from "./Rates.module.css";
import { BASE_RATE, WITH_SUPPORT, WITHOUT_BORDERS } from './constants';
import CheckIcon from './images/checkIcon.svg';
import CloseIcon from './images/close.svg';
import StarIcon from './images/star.svg';

function RateCard({
  title,
  price,
  features,
  isFeatured,
}) {
  return (
    <div className={`${styles.containerRate} ${isFeatured ? styles.featuredContainer : ''}`}>
      <div className={styles.headerTopContainer}>
        <div>
          <div className={styles.rateType}>{title}</div>
          <div className={styles.ratePrice}>{price}</div>
        </div>
        {isFeatured && (
          <Image
            width="40"
            height="40"
            src={StarIcon}
          />
        )}
      </div>
      <ul className={styles.rateList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.rateItem}>
            <Image
              width="20"
              height="20"
              src={feature.hasFeature ? CheckIcon : CloseIcon}
              className={styles.checkIcon}
            />
            <span className={`${styles.textItem} ${!feature.hasFeature ? styles.featureItem : ''}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button className="button">
        Заполнить анкету
      </button>
      <button className={`button ${styles.fillFormBtn}`}>
        Рассрочка
      </button>
    </div>
  );
}

const Rates = () => {
  return (
    <div className={styles.containerRates}>
      <h2 className="sectionTitle">ТАРИФЫ</h2>
      <h3 className={styles.priceText}>
        1-я цена по акции предзаписи.
        <br />
        2-я цена обычная
      </h3>
      <div className={styles.listRates}>
        <RateCard
          title="Базовый"
          price="260/360$"
          features={BASE_RATE}
        />
        <RateCard
          title="С поддержкой таргетолога"
          price="490/590$"
          features={WITH_SUPPORT}
          isFeatured
        />
        <RateCard
          title="Без границ с Лашей"
          price="890/990$"
          features={WITHOUT_BORDERS}
        />
      </div>
    </div>
  );
};

export default Rates;
