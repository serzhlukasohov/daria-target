import React from "react";
import styles from "./Reviews.module.css";
import Image from 'next/image'
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

const Reviews = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <h2 className={styles.testimonialsContainerTitle}>
        50 ДОВОЛЬНЫХ УЧЕНИКОВ ПИШУТ СВОИ ОТЗЫВЫ
      </h2>
      <p className={styles.testimonialsContainerSubtitleTitle}>
        (Кликните по фото, чтобы прочитать отзыв)
      </p>
      <div className={styles.realTestimonial}>
        <div>
          <Testimonial
            name="Ира"
            price="1600$"
            username="ira_smm_target"
            imageSrc={IraImage}
          />
          <Testimonial
            name="Катя"
            price="700$"
            username="catrine_ha"
            imageSrc={KateImage}
          />
          <Testimonial
            name="Марина"
            price=""
            username=""
            imageSrc={MaryImage}
          />
        </div>
        <div>
          <Testimonial
            name="Юля"
            price="850$"
            username="akva_yuli"
            imageSrc={JuliaImage}
          />
          <Testimonial
            name="Оля"
            price="$"
            username="olia_marchuk_"
            imageSrc={OlgaImage}
          />
        </div>
        <div>
          <Testimonial
            name="Таня"
            price="1500$"
            username="tatiana.munich"
            imageSrc={TanjaImage}
          />
          <Testimonial
            name="Анита"
            price="$"
            username="anita.skrynska"
            imageSrc={AnitaImage}
          />
          <Testimonial
            name="Женя"
            price="$"
            username="yevheniia.tg"
            imageSrc={YevheniiaImage}
          />
        </div>
        <div>
          <Testimonial
            name="Даша"
            price="750$"
            username="darjatarget"
            imageSrc={DariaImage}
          />
          <Testimonial
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

function Testimonial({ name, price, username, imageSrc }) {
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

export default Reviews;
