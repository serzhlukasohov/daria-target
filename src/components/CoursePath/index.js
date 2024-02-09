import React from "react";
import styles from "./CoursePath.module.css";


    function getContent(index) {
      switch (index) {
        case 0:
          return "Поставишь цель на курс и разработаешь план работы, чтобы достичь результата";
        case 1:
          return "Комплексно освоишь таргетированную рекламу, маркетинг и продажи услуг";
        case 2:
          return "Оформишь свою аутентичную страницу специалиста, начнешь выстраивать личный бренд";
        case 3:
          return "Возьмешься за поиск клиентов и будешь практиковать продажи";
        case 4:
          return "Получишь первые оплаты 200, 300, 400$ от клиентов";
        case 5:
          return "Сдача экзамена (тестирование) и получение сертификата";
        default:
          return "";
      }
    }

const CoursePath = () => {
  return (
    <section className="bg-white p-10">
      <h2 className={styles.сoursePathTitle}>
        ПУТЬ НА КУРСЕ
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`flex items-center mb-6 ${i === 5 ? "mb-0" : ""}`}
            >
              <div
                className={`bg-purple-300 p-6 rounded-lg shadow-md w-64 ${
                  i % 2 === 0 ? "mb-14" : "mt-14"
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-purple-600 text-2xl font-semibold">
                    <span className="rounded-full border-2 border-dotted border-purple-500 p-3">
                      {`0${i + 1}`}
                    </span>
                  </div>
                </div>
                <div className="text-purple-900 text-sm">{getContent(i)}</div>
              </div>
              {i < 5 && (
                <div className="flex-auto border-t-2 border-gray-300 mx-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePath;
