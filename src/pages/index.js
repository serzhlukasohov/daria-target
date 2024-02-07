import Head from 'next/head';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  function getContent(index) {
    switch (index) {
      case 0:
        return 'Поставишь цель на курс и разработаешь план работы, чтобы достичь результата';
      case 1:
        return 'Комплексно освоишь таргетированную рекламу, маркетинг и продажи услуг';
      case 2:
        return 'Оформишь свою аутентичную страницу специалиста, начнешь выстраивать личный бренд';
      case 3:
        return 'Возьмешься за поиск клиентов и будешь практиковать продажи';
      case 4:
        return 'Получишь первые оплаты 200, 300, 400$ от клиентов';
      case 5:
        return 'Сдача экзамена (тестирование) и получение сертификата';
      default:
        return '';
    }
  }

  function TariffCard({ title, price, features, buttonText, buttonSecondaryText, isFeatured }) {
    return (
      <div className={`p-6 rounded-lg shadow-lg bg-white ${isFeatured ? 'border-4 border-yellow-400' : ''}`}>
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
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg mb-2 w-full">{buttonText}</button>
        <button className="bg-purple-300 text-purple-700 py-2 px-4 rounded-lg w-full">{buttonSecondaryText}</button>
      </div>
    );
  }

  const items = [
    { icon: 'fas fa-book', text: 'Уроки от дизайнера по рекламным макетам' },
    { icon: 'fas fa-newspaper', text: 'Как работать с серыми нишами в таргете?' },
    { icon: 'fas fa-user-friends', text: 'Как заинтересовать и удержать аудиторию?' },
    { icon: 'fas fa-heart', text: 'Топ 5 методов как не выгорать от блога?' },
    { icon: 'fas fa-mobile-alt', text: 'Как превратить личную страницу в эффективный механизм для получения заявок на свои услуги?' },
    { icon: 'fas fa-comments', text: 'Как создавать автоворонки и чат боты?' },
    { icon: 'fas fa-laptop', text: 'Искусственный интеллект, как он поможет тебе в работе?' },
    { icon: 'fas fa-hand-holding-usd', text: 'Урок с бухгалтером. Как принимать оплаты за услуги?' },
    { icon: 'fas fa-times', text: 'Топ 7 клиентов с которыми НЕ стоит сотрудничать' }
  ];

  function Speaker({ name, image }) {
    return (
      <div className="flex flex-col items-center">
        <div className="dotted-border p-2">
          <img
            className="rounded-full w-24 h-24"
            src={`https://placehold.co/96x96?text=${image}`}
            alt={`Blurred image of a ${name}`}
          />
        </div>
        <span className="mt-2">{name}</span>
      </div>
    );
  }

  function TestimonialCard({ name, description, imageSrc, imageAlt }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-6 m-4">
        <div className="w-24 h-24 mx-auto mb-4">
          <img className="rounded-full border-solid border-white border-2 -mt-12" src={imageSrc} alt={imageAlt} />
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
          <p className="text-sm font-semibold">{name} - {price}</p>
          <p className="text-xs text-gray-500">@{username}</p>
        </div>
      </div>
    );
  }

  function Question({ text }) {
    return (
      <div className="flex justify-between items-center bg-purple-300 p-4 rounded-lg">
        <div className="text-white font-medium">{text}</div>
        <i className="fas fa-plus text-white"></i>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br">
      <Head>
        <title>PROTARGET — СОТРИ ГРАНИЦЫ В ПРОДВИЖЕНИИ</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto px-4">
        <Navbar />
        <Promo />
        <FeaturesSection />
        {/* <section>
          <h2 className="text-4xl font-bold text-purple-800 mb-6">PROTARGET — СОТРИ ГРАНИЦЫ В ПРОДВИЖЕНИИ</h2>
          <div className="flex items-start space-x-8">
            <div className="flex-1">
              <div className="text-purple-800 space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-lightbulb text-purple-400 mr-2"></i>
                  <p>Ты узнаешь:</p>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>секреты эффективной таргетированной рекламы</li>
                  <li>создашь креативные стратегии продвижения</li>
                  <li>научишься привлекать потенциальных клиентов и продавать им в социальных сетях</li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <img alt="A woman in a white dress posing with a confident smile" className="rounded-full border-4 border-white shadow-lg" height="400" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-NiL6E9FjM1o27lDaXbE7fiGE/user-MsW48An7vHtdyyYSWJqV9I05/img-iyuoKj56Fyt5ZzfvDZ1jnJjF.png?st=2023-12-31T09%3A06%3A30Z&amp;se=2023-12-31T11%3A06%3A30Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-12-30T15%3A19%3A11Z&amp;ske=2023-12-31T15%3A19%3A11Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=%2BcQd41gYrJnggMECh3WBBSHZEJI0ac3O3cbBYHPlwKE%3D" width="300" />
            </div>
          </div>
        </section> */}

        <div className="fixed bottom-4 right-4 bg-purple-400 p-3 rounded-full shadow-lg">
          <i className="fas fa-arrow-up text-white"></i>
        </div>

        <div className="bg-white p-8">
          <div className="bg-purple-200 p-4 rounded-t-lg text-center">
            <span className="text-purple-700 font-semibold">ИДЕТ ПРЕДЗАПИСЬ!</span>
            <span className="block text-gray-600">Окончание через:</span>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <div className="bg-white rounded p-2">
                <span className="text-2xl font-bold text-purple-700">00</span>
                <span className="block text-xs text-gray-600">ДНЕЙ</span>
              </div>
              <div className="bg-white rounded p-2">
                <span className="text-2xl font-bold text-purple-700">02</span>
                <span className="block text-xs text-gray-600">ЧАСА</span>
              </div>
              <div className="bg-white rounded p-2">
                <span className="text-2xl font-bold text-purple-700">25</span>
                <span className="block text-xs text-gray-600">МИН</span>
              </div>
              <div className="bg-white rounded p-2">
                <span className="text-2xl font-bold text-purple-700">35</span>
                <span className="block text-xs text-gray-600">СЕК</span>
              </div>
            </div>
            <button className="bg-yellow-400 text-white font-semibold rounded px-6 py-2 mt-4 hover:bg-yellow-500 transition duration-300">
              Заполнить анкету
            </button>
          </div>
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-800">ОБО МНЕ</h1>
            <div className="mt-6 relative">
              <div className="inline-block bg-purple-100 rounded-full p-2">
                <img src="https://placehold.co/200x200" alt="Portrait of a woman with brown hair, wearing a white top, with a light purple circular background" className="rounded-full" />
              </div>
              <div className="mt-6 text-left">
                <p className="text-gray-700">
                  Привет! Меня зовут Дарья Левшина!
                </p>
                <p className="text-gray-700 mt-4">
                  Я живу в Польше с 2022 года и Таргетолог, работаю с предпринимателями, салонами, блогерами, онлайн-школами и другими, мой доход ОТ 2000$ месяц.
                </p>
                <p className="text-gray-700 mt-4">
                  Первый свой курс по таргету я покупала работая в найме (в расрочку) всегда мечтала работать удаленно на себя несколько часов в день, чтобы больше времени уделять себе, семье и путешествиям.
                </p>
                <p className="text-gray-700 mt-4">
                  Для себя я разрушила систему жизни от ЗП до ЗП и работы на пенсию.
                </p>
                <p className="text-gray-700 mt-4">
                  И воплотила свою мечту достаточно быстро с помощью Фриланса! Мой доход, зависит только от меня и я продолжаю работать в таргете, а также помогаю всем кто этого хочет.
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


        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">ВИДЕО ПРЕЗЕНТАЦИЯ</h1>
            <div className="text-purple-600 text-2xl mb-6">
              <i className="fas fa-heart"></i>
            </div>
            <p className="text-lg text-gray-700 mb-4">Соприкоснись с курсом ProTarget</p>
            <button className="bg-yellow-300 text-yellow-900 font-medium py-2 px-6 rounded-full mb-10">Программа курса</button>
            <div className="flex justify-center">
              <img src="https://placehold.co/100x100" alt="Placeholder image with a light purple background and a gallery icon in the center" className="border-2 border-purple-300 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-white p-10">
          <div className="text-center text-3xl font-medium mb-10">ПУТЬ НА КУРСЕ</div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className={`flex items-center mb-6 ${i === 5 ? 'mb-0' : ''}`}>
                  <div className={`bg-purple-300 p-6 rounded-lg shadow-md w-64 ${i % 2 === 0 ? 'mb-14' : 'mt-14'}`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-purple-600 text-2xl font-semibold">
                        <span className="rounded-full border-2 border-dotted border-purple-500 p-3">
                          {`0${i + 1}`}
                        </span>
                      </div>
                    </div>
                    <div className="text-purple-900 text-sm">
                      {getContent(i)}
                    </div>
                  </div>
                  {i < 5 && (
                    <div className="flex-auto border-t-2 border-gray-300 mx-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="bg-purple-100 min-h-screen py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-purple-800">для ТЕБЯ, ЕСЛИ ты</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://placehold.co/100x100" alt="Avatar placeholder image" className="mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold text-purple-800 mb-4">Новичок</h2>
                <p className="text-purple-800">Очень хочешь соприкоснуться с онлайном и освоить профессию таргетолог с 0, зарабатывать от 1000$ месяц.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://placehold.co/100x100" alt="Avatar placeholder image" className="mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold text-purple-800 mb-4">Таргетолог</h2>
                <p className="text-purple-800">У тебя есть база знаний, но ты хочешь закрыть пробелы в таргете, продажах, коммуникации с клиентами, создать личный бренд и повысить свою квалификацию чтобы зарабатывать больше.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://placehold.co/100x100" alt="Avatar placeholder image" className="mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold text-purple-800 mb-4">SMM специалист/Фрилансер</h2>
                <p className="text-purple-800">Хочешь дополнить свои знания по продажам услуг и таргету чтобы перескочить потолок в заработке, поднять чек и быть еще полезнее своим клиентам.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://placehold.co/100x100" alt="Avatar placeholder image" className="mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold text-purple-800 mb-4">Предприниматель</h2>
                <p className="text-purple-800">Хочешь научиться настраивать рекламу самостоятельно, чтобы иметь стабильный поток заявок и рост в доходе.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://placehold.co/100x100" alt="Avatar placeholder image" className="mx-auto mb-4 rounded-full" />
                <h2 className="text-xl font-bold text-purple-800 mb-4">Владелец бизнеса</h2>
                <p className="text-purple-800">Хочешь повысить квалификацию своих сотрудников в таргетированной рекламе, чтобы полностью сфокусироваться на развитии своего бизнеса.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="max-w-6xl mx-auto p-8">
          <h1 class="text-3xl font-bold text-center mb-10">ПРОГРАММА КУРСА</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-purple-700">01 Организационный</h2>
                <span class="text-sm font-semibold text-gray-500">4 урока</span>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2"><i class="fas fa-book-open text-purple-500"></i> СОДЕРЖАНИЕ</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Как построено обучение?</li>
                  <li>Постановка цели: как получить максимальный результат</li>
                  <li>Платформы и инструменты для таргета</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2"><i class="fas fa-file-alt text-purple-500"></i> ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Постановка целей на курс по технике смарт</li>
                </ul>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold text-purple-700">02 Основы Facebook. Рекламный кабинет</h2>
                <span class="text-sm font-semibold text-gray-500">6 уроков</span>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2"><i class="fas fa-book-open text-purple-500"></i> СОДЕРЖАНИЕ</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Facebook: регистрация, оформление личного профиля и бизнес страницы</li>
                  <li>Рекламный кабинет: настройка рекламного кабинета, платежи, Бизнес Менеджер</li>
                  <li>Привязки: инстаграм аккаунт, доступы для таргетолога</li>
                  <li>Business suit</li>
                  <li>Правила рекламной деятельности Meta</li>
                  <li>Фарм новых аккаунтов. Покупные аккаунты</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2"><i class="fas fa-file-alt text-purple-500"></i> ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Инструкция "Настройка и "прогрев" бизнес-страницы и привязки на Facebook"</li>
                  <li>Гайд "Как предоставить доступ от клиента таргетологу для работы в Facebook"</li>
                  <li>Гайд "Рекламные цели для разных ниш"</li>
                  <li>Список ниш, которые часто попадают под блокировку</li>
                  <li>Ссылки и способы разблокировки</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center mt-10">
            <span class="text-gray-600 text-sm">Листай, чтобы посмотреть все модули</span>
            <div class="flex justify-center items-center space-x-2 mt-2">
              <button class="text-purple-700"><i class="fas fa-chevron-left"></i></button>
              <button class="text-purple-700"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-br from-[#FFEDD5] to-[#FECACA] min-h-screen flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl font-bold mb-12">
            ЧЕРЕЗ 8 НЕДЕЛЬ ТЫ СТАНЕШЬ СПЕЦИАЛИСТОМ<br />
            КОТОРЫЙ БУДЕТ:
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <img src="https://placehold.co/100x100" alt="Mobile phone icon representing setting up quality ads on Instagram and Facebook for entrepreneurs and bloggers" className="mx-auto mb-4" />
              <p>Качественно настраивать рекламу в INST FB для предпринимателей и блогеров.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Notepad icon representing creating strategies for business promotion for each client" className="mx-auto mb-4" />
              <p>Создавать стратегии продвижения опираясь на цели бизнеса каждого клиента.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Graph icon representing not just analyzing indicators but looking at the return on investment in advertising" className="mx-auto mb-4" />
              <p>Не просто анализировать показатели, а смотреть на окупаемость вложений в рекламу.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Heart icon representing starting to receive applications through Instagram with the help of a personal brand" className="mx-auto mb-4" />
              <p>Начнешь делать из своей страницы инстаграм конвейер заявок с помощью личного бренда.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Smiling face icon representing approaching work comprehensively, being involved in advertising, marketing, and sales psychology" className="mx-auto mb-4" />
              <p>Подходить к работе в комплексе, задействовать: рекламу, маркетинг и психологию продаж.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Money icon representing competently selling services for $1000-3000+ per month and earning for client X" className="mx-auto mb-4" />
              <p>Грамотно продавать свои услуги на 1000-3000$+ месяц и зарабатывать своему клиенту X.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Bomb icon representing creating deep-analyzed advertising layouts for a targeted audience" className="mx-auto mb-4" />
              <p>Создавать рекламные макеты, глубоко проанализировав целевую аудиторию.</p>
            </div>
            <div>
              <img src="https://placehold.co/100x100" alt="Calendar icon representing building a system for stable earnings from month to month" className="mx-auto mb-4" />
              <p>Выстраивать систему стабильного заработка из месяца в месяц.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-8">
          <div className="text-center font-bold text-2xl mb-6">ТАРИФЫ</div>
          <div className="text-center text-sm mb-2">1-я цена по акции предзаписи.</div>
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
                "Стратегия продвижения для 20+ ниш"
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
                "Стратегия продвижения для 20+ ниш"
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
                "Стратегия продвижения для 20 ниш"
              ]}
              buttonText="Заполнить анкету"
              buttonSecondaryText="Рассрочка"
            />
          </div>
        </div>


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

        <div className="flex justify-center items-center flex-col bg-gradient-to-b from-white to-gray-100 h-screen">
          <h1 className="text-4xl font-semibold mb-10">СПИКЕРЫ — СОВСЕМ СКОРО</h1>
          <div className="flex space-x-4">
            <Speaker name="Дизайнер" image="designer-blurred.jpg" />
            <Speaker name="Бухгалтер" image="accountant-blurred.jpg" />
            <Speaker name="Психолог" image="psychologist-blurred.jpg" />
            <Speaker name="Таргетолог" image="targetologist-blurred.jpg" />
            <Speaker name="Айтишник" image="it-specialist-blurred.jpg" />
          </div>
        </div>

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


        <div className="bg-purple-200 p-10">
          <div className="text-center text-3xl font-medium mb-8">ВОПРОС-ОТВЕТ</div>
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
            <button className="bg-purple-400 text-white font-medium py-2 px-4 rounded-full">Заполнить анкету</button>
          </div>
        </div>

        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
          <div className="pt-10 pb-5 px-8">
            <div className="flex justify-between items-center">
              <div className="text-gray-700">
                <p className="text-sm">22dasha07@gmail.com</p>
                <h1 className="text-lg font-medium">ФОП ДАРЬЯ ЛЕВИНА</h1>
                <p className="text-sm">492485732</p>
              </div>
              <nav className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">Обо мне</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Для кого</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Программа</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Тарифы</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Спикеры</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Отзывы</a>
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

      </div>
    </div>
  );
}