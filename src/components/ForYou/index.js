import React from 'react'; 
import styles from './ForYou.module.css';

const ForYou = () => { 
    return (
        <div className="bg-gradient-to-br from-[#FFEDD5] to-[#FECACA] min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-12">
          ЧЕРЕЗ 8 НЕДЕЛЬ ТЫ СТАНЕШЬ СПЕЦИАЛИСТОМ
          <br />
          КОТОРЫЙ БУДЕТ:
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Mobile phone icon representing setting up quality ads on Instagram and Facebook for entrepreneurs and bloggers"
              className="mx-auto mb-4"
            />
            <p>
              Качественно настраивать рекламу в INST FB для предпринимателей и
              блогеров.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Notepad icon representing creating strategies for business promotion for each client"
              className="mx-auto mb-4"
            />
            <p>
              Создавать стратегии продвижения опираясь на цели бизнеса каждого
              клиента.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Graph icon representing not just analyzing indicators but looking at the return on investment in advertising"
              className="mx-auto mb-4"
            />
            <p>
              Не просто анализировать показатели, а смотреть на окупаемость
              вложений в рекламу.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Heart icon representing starting to receive applications through Instagram with the help of a personal brand"
              className="mx-auto mb-4"
            />
            <p>
              Начнешь делать из своей страницы инстаграм конвейер заявок с
              помощью личного бренда.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Smiling face icon representing approaching work comprehensively, being involved in advertising, marketing, and sales psychology"
              className="mx-auto mb-4"
            />
            <p>
              Подходить к работе в комплексе, задействовать: рекламу,
              маркетинг и психологию продаж.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Money icon representing competently selling services for $1000-3000+ per month and earning for client X"
              className="mx-auto mb-4"
            />
            <p>
              Грамотно продавать свои услуги на 1000-3000$+ месяц и
              зарабатывать своему клиенту X.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Bomb icon representing creating deep-analyzed advertising layouts for a targeted audience"
              className="mx-auto mb-4"
            />
            <p>
              Создавать рекламные макеты, глубоко проанализировав целевую
              аудиторию.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/100x100"
              alt="Calendar icon representing building a system for stable earnings from month to month"
              className="mx-auto mb-4"
            />
            <p>
              Выстраивать систему стабильного заработка из месяца в месяц.
            </p>
          </div>
        </div>
      </div>

    );
};

export default ForYou;