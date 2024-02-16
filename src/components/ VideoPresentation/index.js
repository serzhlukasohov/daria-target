import React from "react";
import Image from "next/image";

import styles from "./VideoPresentation.module.css";
import StubIcon from "./images/stub.svg";
import HeartIcon from "./images/heart.svg";

const VideoPresentation = () => {
  return (
    <section className={styles.videoPresentationContainer}>
      <div>
        <div className={styles.videoPresentationBlock}>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            ВИДЕО ПРЕЗЕНТАЦИЯ
          </h2>
          <div className="text-purple-600 text-2xl mb-6">
            <Image width="44" height="52" src={HeartIcon} />
          </div>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Соприкоснись с курсом ProTarget
        </p>
        <button className={`button ${styles.fillBtn}`}>Заполнить анкету</button>
      </div>

      <div className={styles.videoPresentationStub}>
        <Image width="75" height="77" src={StubIcon} />
      </div>
    </section>
  );
};

export default VideoPresentation;
