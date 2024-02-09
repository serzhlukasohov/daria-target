import React from 'react';
import staled from './QuestionAnswer.module.css'

function Question({ text }) {
    return (
      <div className="flex justify-between items-center bg-purple-300 p-4 rounded-lg">
        <div className="text-white font-medium">{text}</div>
        <i className="fas fa-plus text-white"></i>
      </div>
    );
  }

const QuestionAnswer = () => { 
    return (
        <div className="bg-purple-200 p-10">
        <div className="text-center text-3xl font-medium mb-8">
          ВОПРОС-ОТВЕТ
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Question text="Могу ли купить курс в рассрочку?" />
          <Question text="Что обязательно нужно для работы?" />
          <Question text="Как проходят уроки? Есть ли запись? Сколько длится уроки?" />
          <Question text="Я учусь/работаю в наёме/мама в декрете смогу ли совмещать осн деятельность и курс?" />
          <Question text="Я вообще не разбираюсь в таргете, подойдет ли мне обучение?" />
          <Question text="У меня уже есть опыт, подойдет ли мне курс?" />
          <Question text="Как быстро я смогу окупить курс?" />
          <Question text="Как получить сертификат? Они выдаются всем?" />
        </div>
        <div className="text-center mt-8">
          <button className="bg-purple-400 text-white font-medium py-2 px-4 rounded-full">
            Заполнить анкету
          </button>
        </div>
      </div>
    );
};

export default QuestionAnswer;