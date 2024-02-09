import React from 'react';
import styled from './CourseProgram.module.css'

const CourseProgram = () => { return (<div class="max-w-6xl mx-auto p-8">
<h1 class="text-3xl font-bold text-center mb-10">ПРОГРАММА КУРСА</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="bg-white rounded-lg shadow-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-purple-700">
        01 Организационный
      </h2>
      <span class="text-sm font-semibold text-gray-500">4 урока</span>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">
        <i class="fas fa-book-open text-purple-500"></i> СОДЕРЖАНИЕ
      </h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>Как построено обучение?</li>
        <li>Постановка цели: как получить максимальный результат</li>
        <li>Платформы и инструменты для таргета</li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">
        <i class="fas fa-file-alt text-purple-500"></i> ДОПОЛНИТЕЛЬНЫЕ
        МАТЕРИАЛЫ
      </h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>Постановка целей на курс по технике смарт</li>
      </ul>
    </div>
  </div>
  <div class="bg-white rounded-lg shadow-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-purple-700">
        02 Основы Facebook. Рекламный кабинет
      </h2>
      <span class="text-sm font-semibold text-gray-500">
        6 уроков
      </span>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">
        <i class="fas fa-book-open text-purple-500"></i> СОДЕРЖАНИЕ
      </h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>
          Facebook: регистрация, оформление личного профиля и бизнес
          страницы
        </li>
        <li>
          Рекламный кабинет: настройка рекламного кабинета, платежи,
          Бизнес Менеджер
        </li>
        <li>Привязки: инстаграм аккаунт, доступы для таргетолога</li>
        <li>Business suit</li>
        <li>Правила рекламной деятельности Meta</li>
        <li>Фарм новых аккаунтов. Покупные аккаунты</li>
      </ul>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">
        <i class="fas fa-file-alt text-purple-500"></i> ДОПОЛНИТЕЛЬНЫЕ
        МАТЕРИАЛЫ
      </h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>
          Инструкция "Настройка и "прогрев" бизнес-страницы и привязки
          на Facebook"
        </li>
        <li>
          Гайд "Как предоставить доступ от клиента таргетологу для
          работы в Facebook"
        </li>
        <li>Гайд "Рекламные цели для разных ниш"</li>
        <li>Список ниш, которые часто попадают под блокировку</li>
        <li>Ссылки и способы разблокировки</li>
      </ul>
    </div>
  </div>
</div>
<div class="text-center mt-10">
  <span class="text-gray-600 text-sm">
    Листай, чтобы посмотреть все модули
  </span>
  <div class="flex justify-center items-center space-x-2 mt-2">
    <button class="text-purple-700">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="text-purple-700">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</div>
</div>);
};

export default CourseProgram;
