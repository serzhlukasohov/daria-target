import React from 'react';
import styled from './CareerPath.module.css'

const CareerPath = () => {
    return (
        <div className="bg-purple-100 min-h-screen py-10" id="123">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-purple-800">
              для ТЕБЯ, ЕСЛИ ты
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://placehold.co/100x100"
                alt="Avatar placeholder image"
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                Новичок
              </h2>
              <p className="text-purple-800">
                Очень хочешь соприкоснуться с онлайном и освоить профессию
                таргетолог с 0, зарабатывать от 1000$ месяц.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://placehold.co/100x100"
                alt="Avatar placeholder image"
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                Таргетолог
              </h2>
              <p className="text-purple-800">
                У тебя есть база знаний, но ты хочешь закрыть пробелы в
                таргете, продажах, коммуникации с клиентами, создать личный
                бренд и повысить свою квалификацию чтобы зарабатывать больше.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://placehold.co/100x100"
                alt="Avatar placeholder image"
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                SMM специалист/Фрилансер
              </h2>
              <p className="text-purple-800">
                Хочешь дополнить свои знания по продажам услуг и таргету чтобы
                перескочить потолок в заработке, поднять чек и быть еще
                полезнее своим клиентам.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://placehold.co/100x100"
                alt="Avatar placeholder image"
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                Предприниматель
              </h2>
              <p className="text-purple-800">
                Хочешь научиться настраивать рекламу самостоятельно, чтобы
                иметь стабильный поток заявок и рост в доходе.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://placehold.co/100x100"
                alt="Avatar placeholder image"
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                Владелец бизнеса
              </h2>
              <p className="text-purple-800">
                Хочешь повысить квалификацию своих сотрудников в
                таргетированной рекламе, чтобы полностью сфокусироваться на
                развитии своего бизнеса.
              </p>
            </div>
          </div>
        </div>
      </div>

    );
};

export default CareerPath;