import React from "react";
import styled from "./Rates.module.css";


function TariffCard({
    title,
    price,
    features,
    buttonText,
    buttonSecondaryText,
    isFeatured,
  }) {
    return (
      <div
        className={`p-6 rounded-lg shadow-lg bg-white ${
          isFeatured ? "border-4 border-yellow-400" : ""
        }`}
      >
        {isFeatured && (
          <div className="flex justify-center items-center mb-4">
            <i className="fas fa-star text-yellow-400"></i>
          </div>
        )}
        <div className="font-bold text-lg mb-4">{title}</div>
        <div className="font-bold text-xl mb-4">{price}</div>
        <ul className="mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-check text-green-500 mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg mb-2 w-full">
          {buttonText}
        </button>
        <button className="bg-purple-300 text-purple-700 py-2 px-4 rounded-lg w-full">
          {buttonSecondaryText}
        </button>
      </div>
    );
  }

const Rates = () => {
  return (
    <div className="bg-purple-100 p-8">
      <div className="text-center font-bold text-2xl mb-6">ТАРИФЫ</div>
      <div className="text-center text-sm mb-2">
        1-я цена по акции предзаписи.
      </div>
      <div className="text-center text-sm mb-8">2-я цена обычная</div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <TariffCard
          title="Базовый"
          price="260/360$"
          features={[
            "Доступ к модулям 1-7",
            "Доступ к дополнительным материалам",
            "Чат студентов обучения",
            "Доступ к материалам на 6 месяцев",
            "Доступ к бонусным урокам (мастермайндам)",
            "Участие в еженедельных вопрос/ответ",
            "Сопровождение от Лаши и проверка ДЗ",
            "Чат с Лашей",
            "Сертификация (при условии сдачи ДЗ)",
            "Групповая онлайн-встреча выпускников с Лашей после курса",
            "Передача проектов для работы",
            "Закрытое комьюнити таргетологов-с выпускниками моего менторства",
            "Стратегия продвижения для 20+ ниш",
          ]}
          buttonText="Заполнить анкету"
          buttonSecondaryText="Рассрочка"
        />
        <TariffCard
          title="С поддержкой таргетолога"
          price="490/590$"
          features={[
            "Доступ к модулям 1-8",
            "Доступ к дополнительным материалам",
            "Доступ к бонусным урокам (мастермайндам)",
            "Участие в еженедельных вопрос/ответ",
            "Куратор и проверка ДЗ",
            "Чат с куратором",
            "Сертификация (при условии сдачи ДЗ)",
            "Чат студентов обучения",
            "Групповая онлайн-встреча или выпускной с Лашей после курса",
            "Чат с кураторами",
            "Закрытое комьюнити таргетологов-с выпускниками твоего менторства",
            "Доступ к материалам на 12 месяцев",
            "Закрытое обратной связи",
            "Стратегия продвижения для 20+ ниш",
          ]}
          buttonText="Заполнить анкету"
          buttonSecondaryText="Рассрочка"
          isFeatured
        />
        <TariffCard
          title="Без границ с Лашей"
          price="890/990$"
          features={[
            "Доступ к модулям 1-8",
            "Доступ к дополнительным материалам",
            "Доступ к бонусным урокам (мастермайндам)",
            "Участие в еженедельных вопрос/ответ",
            "Сопровождение от Лаши и проверка ДЗ",
            "Чат с Лашей",
            "Сертификация (при условии сдачи ДЗ)",
            "Чат студентов обучения",
            "Личная онлайн-встреча или выпускной с Лашей после курса",
            "Чат с вакансиями",
            "Передача проектов для работы",
            "Доступ к материалам пожизненный",
            "1 месяц обратной связи",
            "Закрытое комьюнити таргетологов с выпускниками моего менторства",
            "Стратегия продвижения для 20 ниш",
          ]}
          buttonText="Заполнить анкету"
          buttonSecondaryText="Рассрочка"
        />
      </div>
    </div>
  );
};

export default Rates;
