import React from "react";
import Image from "next/image";

import styles from "./AboutMe.module.css";
import DariaLevshinaImage from "./images/DariaLevshina.png";

const AboutMe = () => {
  return (
    <section id="about">
      <div className={styles.aboutMeContainer}>
        <h2 className={styles.aboutMeTitle}>ОБО МНЕ</h2>
        <div className={styles.aboutMeBlock}>
          <div className={styles.aboutMeImgBox}>
            <Image
              className={styles.aboutMeImg}
              width="419"
              height="620"
              alt="Daria Levshina"
              src={DariaLevshinaImage}
            />
          </div>
          <div className={styles.aboutMeBlockText}>
            <div className={styles.aboutMeText}>
              <span className={styles.aboutMeTextSpan}>
                Привет! Меня зовут Дарья Левшина!
              </span>
              <p >
                Я живу в Польше и с 2022 года я Таргетолог, работаю с
                предпринимателями, салонами, блогерами, онлайн-школами и
                другими, мой доход ОТ 2000$ месяц.
              </p>
              <p>
                Первый свой курс по таргету я покупала работая в найме (в
                рассрочку) всегда мечтала работать удаленно на себя несколько
                часов в день, чтобы больше времени уделять себе, семье и
                путешествиям. <br className={styles.br} /> Для себя я разрушила систему жизни от ЗП до ЗП и
                работы на пенсию. <br className={styles.br}/> И воплотила свою мечту достаточно быстро с
                помощью Фриланса! Мой доход, зависит только от меня и я
                продолжаю работать в таргете, а также помогаю всем кто этого
                хочет.
              </p>
            </div>
            <div className={styles.aboutMeBlockFlex}>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>от 2000$</span>
                <p>доход в месяц </p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>40+</span>
                <p>успешных проектов</p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>Европа</span>
                <p>гео</p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>50</span>
                <p>выпускников</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutMeBlockFlexTab}>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>от 2000$</span>
                <p>доход в месяц </p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>40+</span>
                <p>успешных проектов</p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>Европа</span>
                <p>гео</p>
              </div>
              <div className={styles.aboutMeFlexBlock}>
                <span className={styles.aboutMeTextSpan}>50</span>
                <p>выпускников</p>
              </div>
            </div>
      </div>
    </section>
  );
};

export default AboutMe;
