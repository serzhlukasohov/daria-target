import React from "react";
import styled from "./Reviews.module.css";

function TestimonialCard({ name, description, imageSrc, imageAlt }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-6 m-4">
      <div className="w-24 h-24 mx-auto mb-4">
        <img
          className="rounded-full border-solid border-white border-2 -mt-12"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-4">
        Смотреть видео
      </button>
    </div>
  );
}

function Testimonial({ name, price, username, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        className="w-24 h-24 rounded-full border-2 border-purple-300 p-1"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="text-center mt-2">
        <p className="text-sm font-semibold">
          {name} - {price}
        </p>
        <p className="text-xs text-gray-500">@{username}</p>
      </div>
    </div>
  );
}

const Reviews = () => {
  return (
    <section>
      <div className="bg-purple-200 py-12 px-4">
        <div className="text-3xl text-center text-black mb-6">ОТЗЫВЫ</div>
        <div className="flex justify-center">
          <TestimonialCard
            name="Катя"
            description="Нащла себя, зарабатывает 700$ мес, делает клиентам заявки меньше 1$"
            imageSrc="https://placehold.co/96x96.png"
            imageAlt="Woman sitting with a laptop"
          />
          <TestimonialCard
            name="Ира"
            description="С 2 детьми в декрете за 2 месяца вышла на доход 1600$"
            imageSrc="https://placehold.co/96x96.png"
            imageAlt="Woman standing in a kitchen"
          />
          <TestimonialCard
            name="Катя"
            description="Нащла себя, зарабатывает 700$ мес, делает клиентам заявки меньше 1$"
            imageSrc="https://placehold.co/96x96.png"
            imageAlt="Woman sitting with a laptop"
          />
        </div>
      </div>
      <div className="bg-pink-100 p-10 rounded-xl">
        <h2 className="text-xl text-center font-semibold mb-6">
          50 ДОВОЛЬНЫХ УЧЕНИКОВ ПИШУТ СВОИ ОТЗЫВЫ
        </h2>
        <p className="text-center text-sm mb-10">
          (Кликните по фото, чтобы прочитать отзыв)
        </p>
        <div className="grid grid-cols-3 gap-4">
          <Testimonial
            name="Ира"
            price="1600$"
            username="ira_smm_target"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Ира, blonde hair, wearing white top"
          />
          <Testimonial
            name="Таня"
            price="1500$"
            username="tatiana.munich"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Таня, wearing glasses and blue sweater"
          />
          <Testimonial
            name="Даша"
            price="750$"
            username="darjatarget"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Даша, smiling with pink background"
          />
          <Testimonial
            name="Катя"
            price="700$"
            username="catrine_ha"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Катя, long blonde hair, white jacket"
          />
          <Testimonial
            name="Анита"
            price="850$"
            username="anita.skrynska"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Анита, smiling in a cafe"
          />
          <Testimonial
            name="Оля"
            price="650$"
            username="fesenko_olgha"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Оля, black and white photo, long hair"
          />
          <Testimonial
            name="Марина"
            price="850$"
            username="olia_marchuk_"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Марина, blonde hair, holding flowers"
          />
          <Testimonial
            name="Юля"
            price="850$"
            username="akva_yuli"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Юля, black and white photo, curly hair"
          />
          <Testimonial
            name="Женя"
            price="850$"
            username="yevheniia.tg"
            imageSrc="https://placehold.co/100x100.png"
            imageAlt="Женя, long straight hair, looking away"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
