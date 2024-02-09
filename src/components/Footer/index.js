import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
      <div className="pt-10 pb-5 px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <p className="text-sm">22dasha07@gmail.com</p>
            <h1 className="text-lg font-medium">ФОП ДАРЬЯ ЛЕВИНА</h1>
            <p className="text-sm">492485732</p>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Обо мне
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Для кого
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Программа
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Тарифы
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Спикеры
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Отзывы
            </a>
          </nav>
          <div className="text-gray-700 text-sm">
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
            <p>Сайт сделан с любовью @an.romashchenko</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 border-dotted border-t-2 border-gray-400"></div>
      </div>
    </div>
  );
};

export default Footer;
