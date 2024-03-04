import React from "react";
import Image from "next/image";

import styles from "./VideoPresentation.module.css";
import StubIcon from "./images/stub.svg";
import HeartIcon from "./images/heart.svg";

const VideoPresentation = () => {
  return (
    <section className={styles.videoPresentationContainer}>
      <div className={styles.videoPresentationBox}>
        <div className={styles.videoPresentationBlock}>
          <h2 className={styles.videoPresentationTitle}>ВИДЕО ПРЕЗЕНТАЦИЯ</h2>
          <div>
            <Image
              width="44"
              height="52"
              src={HeartIcon}
              className={styles.videoPresentationHeart}
            />
          </div>
        </div>
        <p className={styles.videoPresentationText}>
          Соприкоснись с курсом ProTarget
        </p>
        <button className={styles.videoPresentationBtn}>
          Заполнить анкету
        </button>
      </div>

      <div className={styles.videoPresentationStub}>
        <Image width="75" height="77" src={StubIcon} />
      </div>
    </section>
  );
};

export default VideoPresentation;
