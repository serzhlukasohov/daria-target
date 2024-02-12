import React from "react";
import Image from 'next/image'

import styles from "./Gifts.module.css";
import NotebookBookmarkIcon from './images/notebookBookmarkIcon.svg';
import BookIcon from './images/bookIcon.svg';
import SpeechBubbleIcon from './images/speechBubbleIcon.svg';
import MoneyIcon from './images/moneyIcon.svg';
import TwoPersonSilhouetteIcon from './images/twoPersonSilhouetteIcon.svg';
import HeartStarsIcon from './images/heartStarsIcon.svg';
import LaptopIcon from './images/laptopIcon.svg';
import CrossIcon from './images/crossIcon.svg';
import MobileIcon from './images/mobileIcon.svg';

const items = [
  {
    icon: NotebookBookmarkIcon,
    text: "Уроки от дизайнера по рекламным макетам"
  },
  {
    icon: BookIcon,
    text: "Как работать с серыми нишами в таргете?",
  },
  {
    icon: SpeechBubbleIcon,
    text: "Как создавать автоворонки и чат боты?"
  },
  {
    icon: MoneyIcon,
    text: "Урок с бухгалтером. Как принимать оплаты за услуги?",
  },
  {
    icon: TwoPersonSilhouetteIcon,
    text: "Как заинтересовать и удержать аудиторию?",
  },
  {
    icon: HeartStarsIcon,
    text: "Топ 5 методов как не выгорать от блога?"
  },
  {
    icon: LaptopIcon,
    text: "Искусственный интеллект, как он поможет тебе в работе?",
  },
  {
    icon: CrossIcon,
    text: "Топ 7 клиентов с которыми НЕ стоит сотрудничать",
  },
  {
    icon: MobileIcon,
    text: "Как превратить личную страницу в эффективный механизм для получения заявок на свои услуги?",
  },
];

const Gifts = () => {
  return (
    <div className={styles.container}>
      <h2 className="sectionTitle">ПОДАРКИ</h2>
      <div className={styles.bonusesList}>
        {items.map(({ icon, text }, index) => (
          <div key={index} className={styles.bonusItem}>
            <Image
              width="80"
              height="80"
              className={styles.bonusIcon}
              src={icon}
            />
            <span className={styles.text}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gifts;
