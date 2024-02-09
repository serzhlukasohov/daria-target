import React from "react";
import styled from "./Present.module.css";

const items = [
  { icon: "fas fa-book", text: "Уроки от дизайнера по рекламным макетам" },
  {
    icon: "fas fa-newspaper",
    text: "Как работать с серыми нишами в таргете?",
  },
  {
    icon: "fas fa-user-friends",
    text: "Как заинтересовать и удержать аудиторию?",
  },
  { icon: "fas fa-heart", text: "Топ 5 методов как не выгорать от блога?" },
  {
    icon: "fas fa-mobile-alt",
    text: "Как превратить личную страницу в эффективный механизм для получения заявок на свои услуги?",
  },
  { icon: "fas fa-comments", text: "Как создавать автоворонки и чат боты?" },
  {
    icon: "fas fa-laptop",
    text: "Искусственный интеллект, как он поможет тебе в работе?",
  },
  {
    icon: "fas fa-hand-holding-usd",
    text: "Урок с бухгалтером. Как принимать оплаты за услуги?",
  },
  {
    icon: "fas fa-times",
    text: "Топ 7 клиентов с которыми НЕ стоит сотрудничать",
  },
];

const Present = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-10">ПОДАРКИ</h1>
      <div className="grid grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4 p-4 bg-white rounded-full shadow-lg">
              <i className={`${item.icon} fa-2x text-yellow-500`}></i>
            </div>
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Present;
