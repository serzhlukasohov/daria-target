import React from "react";
import styles from "./FeaturesSection.module.css"; // Make sure the path is correct


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
              <i className={`fas fa-lightbulb ${styles.featureIcon}`}></i>
              <p>Ты узнаешь:</p>
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
        <div className={styles.featureImage}>
          <img
            alt="A woman in a white dress posing with a confident smile"
            className="rounded-full"
            height="400"
            src="./img.jpg"
            width="300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
