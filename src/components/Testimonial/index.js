import React from "react";
import Image from 'next/image'

import styles from "./Testimonial.module.css";
import IraImage from './images/ira.png';
import KateImage from './images/kate.png';
import MaryImage from './images/mary.png';
import JuliaImage from './images/julia.png';
import OlgaImage from './images/olga.png';
import TanjaImage from './images/tanja.png';
import AnitaImage from './images/anita.png';
import YevheniiaImage from './images/yevheniia.png';
import DariaImage from './images/daria.png';
import VolhaImage from './images/volha.png';
import KateVideoImage from './images/kateVideo.png';
import IraVideoImage from './images/iraVideo.png';

const TestimonialContainer = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <h2 className="sectionTitle">
        ОТЗЫВЫ
      </h2>
      <div className={styles.testimonialsVideoContainer}>
        <TestimonialVideoCard
          name="Катя"
          description="Нашла себя, зарабатывает 700$ мес, делает клиентам заявки меньше 1$"
          imageSrc={KateVideoImage}
        />
        <TestimonialVideoCard
          name="Ира"
          description="С 2 детьми в декрете за 2 месяца вышла на доход 1600$"
          imageSrc={IraVideoImage}
        />
        <TestimonialVideoCard
          name="Ира"
          description="С 2 детьми в декрете за 2 месяца вышла на доход 1600$"
          imageSrc={IraVideoImage}
        />
      </div>
      <h2 className={styles.testimonialsContainerTitle}>
        50 ДОВОЛЬНЫХ УЧЕНИКОВ ПИШУТ СВОИ ОТЗЫВЫ
      </h2>
      <p className={styles.testimonialsContainerSubtitleTitle}>
        (Кликните по фото, чтобы прочитать отзыв)
      </p>
      <div className={styles.realTestimonial}>
        <div>
          <TestimonialCard
            name="Ира"
            price="1600$"
            username="ira_smm_target"
            imageSrc={IraImage}
          />
          <TestimonialCard
            name="Катя"
            price="700$"
            username="catrine_ha"
            imageSrc={KateImage}
          />
          <TestimonialCard
            name="Марина"
            price=""
            username=""
            imageSrc={MaryImage}
          />
        </div>
        <div>
          <TestimonialCard
            name="Юля"
            price="850$"
            username="akva_yuli"
            imageSrc={JuliaImage}
          />
          <TestimonialCard
            name="Оля"
            price="$"
            username="olia_marchuk_"
            imageSrc={OlgaImage}
          />
        </div>
        <div>
          <TestimonialCard
            name="Таня"
            price="1500$"
            username="tatiana.munich"
            imageSrc={TanjaImage}
          />
          <TestimonialCard
            name="Анита"
            price="$"
            username="anita.skrynska"
            imageSrc={AnitaImage}
          />
          <TestimonialCard
            name="Женя"
            price="$"
            username="yevheniia.tg"
            imageSrc={YevheniiaImage}
          />
        </div>
        <div>
          <TestimonialCard
            name="Даша"
            price="750$"
            username="darjatarget"
            imageSrc={DariaImage}
          />
          <TestimonialCard
            name="Оля"
            price="650$"
            username="fesenko_olgha"
            imageSrc={VolhaImage}
          />
        </div>
      </div>
    </section>
  );
};

function TestimonialCard({ name, price, username, imageSrc }) {
  return (
    <div className={styles.testimonialContainer}>
      <Image
        width="210"
        height="210"
        className={styles.testimonialImage}
        src={imageSrc}
      />
      <p className={styles.nameAndPrice}>
        {name} - {price}
      </p>
      <p className={styles.instagram}>@{username}</p>
    </div>
  );
}

function TestimonialVideoCard({ name, description, imageSrc }) {
  return (
    <div className={styles.videoCardContainer}>
      <Image
        width="278"
        height="278"
        className={styles.testimonialImage}
        src={imageSrc}
      />
      <span className={styles.nameVideo}>{name}</span>
      <p className={styles.descriptionVideo}>{description}</p>
      <button className="button">
        Смотреть видео
      </button>
    </div>
  );
}

export default TestimonialContainer;
