import React from 'react';
import Image from 'next/image'

import styles from './ForYou.module.css';
import MobileIcon from './images/mobileIcon.svg';
import NotebookIcon from './images/notebook.svg';
import CameraIcon from './images/camera.svg';
import ChartIcon from './images/chart.svg';
import LetterWithHeartIcon from './images/letterWithHeart.svg';
import ConfidentEmoticonIcon from './images/confidentEmoticon.svg';
import MoneyIcon from './images/moneyIcon.svg';
import CreditCardIcon from './images/creditCard.svg';

const items = [
  {
    icon: MobileIcon,
    text: "Качественно настраивать рекламу в INST FB для предпринимателей и блогеров."
  },
  {
    icon: NotebookIcon,
    text: "Создавать стратегии продвижения опираясь на цели бизнеса каждого клиента.",
  },
  {
    icon: CameraIcon,
    text: "Создавать рекламные макеты, глубоко проанализировав целевую аудиторию."
  },
  {
    icon: ChartIcon,
    text: "Не просто анализировать показатели, а смотреть на окупаемость вложений в рекламу.",
  },
  {
    icon: LetterWithHeartIcon,
    text: "Начнешь делать из своей страницы инстаграм конвейер заявок с помощью личного бренда.",
  },
  {
    icon: ConfidentEmoticonIcon,
    text: "Подходить к работе в комплексе, задействовав: рекламу, маркетинг и психологию продаж."
  },
  {
    icon: MoneyIcon,
    text: "Грамотно продавать свои услуги на 1000-3000$+ месяц и зарабатывать своему клиенту Х.",
  },
  {
    icon: CreditCardIcon,
    text: "Выстраивать систему стабильного заработка из месяц в месяц.",
  },
];

const ForYou = () => {
  return (
    <div className={styles.container}>
      <h2 className="sectionTitle">
        ЧЕРЕЗ 8 НЕДЕЛЬ ТЫ СТАНЕШЬ СПЕЦИАЛИСТОМ
        <br />
        КОТОРЫЙ БУДЕТ:
      </h2>
      <div className={styles.forYouList}>
        {items.map(({ icon, text }, index) => (
          <div key={index} className={styles.forYouItem}>
            <Image
              width="80"
              height="80"
              className={styles.forYouIcon}
              src={icon}
            />
            <span className={styles.text}>{text}</span>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ForYou;