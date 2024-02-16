import React from "react";
import Image from "next/image";

import styles from "./FeaturesSection.module.css";
import DariaLevshinaImage from "./images/DariaLevshina.png";
import HeartIcon from "./images/heart.svg";

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>
        PROTARGET — СОТРИ ГРАНИЦЫ В ПРОДВИЖЕНИИ
      </h2>
      <div className={styles.featuresContent}>
        <div className={styles.featuresText}>
          <div className={styles.featuresText}>
            <div className="flex items-center">
              <Image 
              width="33" 
              height="44" 
              src={HeartIcon} 
              className={styles.featureIcon}/>
              <p >Ты узнаешь:</p>
            </div>
            <ul className={styles.featureList}>
              <li>
                <p>секреты эффективной таргетированной рекламы </p>
              </li>
              <li>
                <p>создашь креативные стратегии продвижения</p>
              </li>
              <li>
                <p>
                  научишься привлекать потенциальных клиентов и продавать им в
                  социальных сетях
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.c}>
          <Image 
          width="303"
          height="437"
          alt="Daria Levshina"
          src={DariaLevshinaImage} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
