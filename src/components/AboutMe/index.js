import React from "react";
import styled from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className="bg-white p-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">ОБО МНЕ</h1>
        <div className="mt-6 relative">
          <div className="inline-block bg-purple-100 rounded-full p-2">
            <img
              src="https://placehold.co/200x200"
              alt="Portrait of a woman with brown hair, wearing a white top, with a light purple circular background"
              className="rounded-full"
            />
          </div>
          <div className="mt-6 text-left">
            <p className="text-gray-700">Привет! Меня зовут Дарья Левшина!</p>
            <p className="text-gray-700 mt-4">
              Я живу в Польше с 2022 года и Таргетолог, работаю с
              предпринимателями, салонами, блогерами, онлайн-школами и другими,
              мой доход ОТ 2000$ месяц.
            </p>
            <p className="text-gray-700 mt-4">
              Первый свой курс по таргету я покупала работая в найме (в
              расрочку) всегда мечтала работать удаленно на себя несколько часов
              в день, чтобы больше времени уделять себе, семье и путешествиям.
            </p>
            <p className="text-gray-700 mt-4">
              Для себя я разрушила систему жизни от ЗП до ЗП и работы на пенсию.
            </p>
            <p className="text-gray-700 mt-4">
              И воплотила свою мечту достаточно быстро с помощью Фриланса! Мой
              доход, зависит только от меня и я продолжаю работать в таргете, а
              также помогаю всем кто этого хочет.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="text-gray-700">
                <span className="block font-bold text-xl">от 2000$</span>
                <span className="block text-sm">доход в месяц</span>
              </div>
              <div className="text-gray-700">
                <span className="block font-bold text-xl">40+</span>
                <span className="block text-sm">успешных проектов</span>
              </div>
              <div className="text-gray-700">
                <span className="block font-bold text-xl">Европа</span>
                <span className="block text-sm">гео</span>
              </div>
              <div className="text-gray-700">
                <span className="block font-bold text-xl">50</span>
                <span className="block text-sm">выпускников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
