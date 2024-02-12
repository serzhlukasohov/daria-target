import React from "react";
import Image from 'next/image'

import styles from "./Speakers.module.css";
import SpeakerImage from './images/speaker.png';

function Speaker({ name, imageSrc }) {
  return (
    <div className={styles.speaker}>
        <Image
          width="278"
          height="278"
          className={styles.speakerImg}
          src={imageSrc}
        />
      <span className={styles.speakerName}>{name}</span>
    </div>
  );
}

const Speakers = () => {
  return (
    <div className={styles.speakersContainer}>
      <h2 className="sectionTitle">СПИКЕРЫ — СОВСЕМ СКОРО</h2>
      <div className={styles.listSpeakers}>
        <Speaker name="Дизайнер" imageSrc={SpeakerImage} />
        <Speaker name="Бухгалтер" imageSrc={SpeakerImage} />
        <Speaker name="Психолог" imageSrc={SpeakerImage} />
        <Speaker name="Таргетолог" imageSrc={SpeakerImage} />
        <Speaker name="Айтишник" imageSrc={SpeakerImage} />
      </div>
    </div>
  );
};

export default Speakers;
