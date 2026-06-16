import Image from "next/image";
import Gallery from "./Gallery";
import MobileNav from "./MobileNav";

const masters = [
  {
    name: "Дмитрий Широков",
    role: "Мастер восстановления",
    image: "/images/team/dmitry.jpg",
    text: "Более 20 лет практики. Работал в Баня Ленд, Спа Дзен и Бритиш Баня. Специализация — глубокое восстановление, авторские техники парения и массажные практики.",
  },
  {
    name: "Александр Михель",
    role: "Архитектор ритуала",
    image: "/images/team/alexander.jpg",
    text: "Более 15 лет практики. Работал в Баня Ленд, Спа Дзен и Бритиш Баня. Специализация — авторские банные ритуалы, индивидуальные программы восстановления и сопровождение гостей премиального уровня.",
  },
  {
    name: "Алексей Аверьянов",
    role: "Проводник состояния",
    image: "/images/team/alexey.jpg",
    text: "Многолетний опыт банной практики. Авторские техники парения и индивидуальный подход к каждому гостю. Специализация — глубокое восстановление, расслабление и работа с состоянием человека.",
  },
];

const ritualItems = [
  {
    title: "Травы и ароматы",
    image: "/images/ritual/herbs.jpg",
  },
  {
    title: "Парение и телесная работа",
    image: "/images/ritual/steam.jpg",
  },
  {
    title: "Контраст и восстановление",
    image: "/images/ritual/plunge.jpg",
  },
  {
    title: "Чайная церемония",
    image: "/images/ritual/tea.jpg",
  },
  {
    title: "Подготовка пространства",
    image: "/images/ritual/preparation.jpg",
  },
  {
    title: "Звуковые практики",
    image: "/images/ritual/sound.jpg",
  },
];

const testimonials = [
  {
    name: "Вероника",
    text: "Я и моя семья в полном восторге. Ребята — профессионалы своего дела. Подход нашли к каждому, и все остались довольны, особенно я. Я не очень люблю высокие температуры в парной, но мастера грамотно и внимательно подошли к этому вопросу. В результате — никакого дискомфорта, только удовольствие и полное расслабление. Всем советую. А команде хочется пожелать удачи, успехов и процветания.",
  },
  {
    name: "Наталья",
    text: "Душевное и атмосферное место отдыха для многих поколений коренных москвичей. Чудом сохранившийся уголок старой Москвы, где можно встретить высокий уровень банной культуры, заботу о гостях и настоящее внимание к деталям.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f0e7] text-[#201b15]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero/master-with-venik.jpg"
          alt="Банный мастер с веником в парном пространстве"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,.88)_0%,rgba(18,14,10,.66)_42%,rgba(18,14,10,.34)_76%,rgba(18,14,10,.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_48%,rgba(246,240,231,.10),rgba(18,14,10,0)_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,#f6f0e7,rgba(246,240,231,0))]" />

        <header className="relative z-10 mx-auto flex w-full max-w-[1520px] items-center justify-between px-5 py-5 text-[#faf4ea] sm:px-10 sm:py-8 lg:px-20 lg:py-12">
          <a href="#top" className="text-xs uppercase">
            Банное Бюро
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase text-[#fbf6ee]/90 lg:flex">
            <a href="#how-we-work" className="transition hover:text-white">
              Как мы работаем
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Галерея
            </a>
            <a href="#team" className="transition hover:text-white">
              Команда
            </a>
            <a href="#contacts" className="transition hover:text-white">
              Контакты
            </a>
          </nav>
          <MobileNav />
        </header>

        <div
          id="top"
          className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1520px] items-start px-5 pt-14 pb-20 sm:min-h-[calc(100svh-112px)] sm:px-10 sm:pt-28 sm:pb-28 lg:px-20 lg:pt-36 lg:pb-36"
        >
          <div className="hero-content reveal max-w-5xl text-[#fbf6ee]">
            <h1 className="mt-10 max-w-2xl font-display text-[clamp(1.7rem,4vw,3.5rem)] font-normal leading-[1.05] text-[#f6ecde] sm:mt-12">
              Банный кейтеринг №1
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#eadfce] sm:text-xl sm:leading-9">
              Эксклюзивное банное искусство с выездом прямо к вам.
              <br />
              <br />
              Персональные банные ритуалы, авторские техники парения, массаж и
              восстановление.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacts"
                className="inline-flex h-14 items-center justify-center border border-[#fbf6ee]/55 px-8 text-xs uppercase text-[#fbf6ee] transition duration-500 hover:bg-[#fbf6ee] hover:text-[#201b15]"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-we-work"
        className="section-space px-6 sm:px-10 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="reveal relative min-h-[320px] overflow-hidden border border-[#d3c4ae] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src="/images/philosophy/restoration.jpg"
              alt="Восстановление и отдых после банного ритуала"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal max-w-3xl lg:pl-12">
            <p className="eyebrow">Как мы работаем</p>
            <div className="mt-10 max-w-2xl space-y-12 text-[#5b5044]">
              <div>
                <h2 className="font-display text-3xl font-normal leading-tight text-[#201b15]">
                  Формат
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8">
                  <p>
                    Вам не нужно никуда ехать. Команда мастеров приезжает к вам
                    и полностью организует банное пространство.
                  </p>
                  <p>
                    При желании мы можем пригласить вас в баню наших партнёров
                    или подобрать подходящую площадку под ваш запрос.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-normal leading-tight text-[#201b15]">
                  Для кого
                </h2>
                <div className="mt-6 space-y-6 text-lg leading-8">
                  <p>
                    <span className="block text-[#201b15]">
                      Семья и близкие
                    </span>
                    Тёплый день отдыха, семейный праздник или возможность
                    провести время вместе без суеты.
                  </p>
                  <p>
                    <span className="block text-[#201b15]">Друзья</span>
                    Встречи, которые хочется запомнить. Настоящая баня,
                    общение, парение и атмосфера отдыха.
                  </p>
                  <p>
                    <span className="block text-[#201b15]">
                      Деловые партнёры
                    </span>
                    Неформальное пространство для общения, укрепления отношений
                    и проведения встреч в комфортной обстановке.
                  </p>
                  <p>
                    <span className="block text-[#201b15]">
                      Корпоративные команды
                    </span>
                    Восстановление после интенсивной работы, тимбилдинг и
                    мероприятия для сотрудников.
                  </p>
                  <p>
                    <span className="block text-[#201b15]">
                      Частные ретриты
                    </span>
                    Перезагрузка, восстановление ресурсов, работа со стрессом и
                    возвращение внутреннего баланса.
                  </p>
                  <p>
                    <span className="block text-[#201b15]">Особые события</span>
                    Дни рождения, юбилеи, семейные торжества и другие важные
                    моменты, которые хочется провести по-настоящему красиво.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-normal leading-tight text-[#201b15]">
                  Индивидуальный подход
                </h2>
                <p className="mt-6 text-lg leading-8">
                  Каждая программа создаётся индивидуально. Мы подбираем команду
                  мастеров, продолжительность, сценарий парения, массажные и
                  SPA-практики исходя из ваших задач, пожеланий и формата
                  встречи.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-normal leading-tight text-[#201b15]">
                  Результат
                </h2>
                <p className="mt-6 text-lg leading-8">
                  Наша цель — создать атмосферу тепла, внимания, комфорта и
                  глубокого восстановления.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="included" className="section-space px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Что входит в наши программы</p>
            <div className="reveal max-w-3xl">
              <h2 className="font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
                Что входит в наши программы
              </h2>
              <div className="mt-12 space-y-6 text-xl leading-9 text-[#5b5044]">
                <p>
                  Банный Кейтеринг №1 — это премиальный сервис выездного банного
                  обслуживания.
                </p>
                <p>
                  Мы создаём не просто банный сеанс, а полноценный опыт
                  восстановления, отдыха и общения. Каждая программа собирается
                  индивидуально и может включать различные элементы в
                  зависимости от формата встречи, количества гостей и
                  ваших пожеланий.
                </p>
                <p>
                  В программу могут входить авторское парение, массажные
                  практики, SPA-процедуры, ароматерапия, чайные церемонии и
                  другие банные ритуалы.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ritualItems.map((item, index) => (
              <article
                key={item.title}
                className="reveal group border border-[#d3c4ae] bg-[#fbf6ee]/55 transition duration-500 hover:bg-[#fbf6ee]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,17,12,.46),rgba(21,17,12,0)_58%)]" />
                </div>
                <div className="flex min-h-44 flex-col justify-between p-7">
                  <p className="text-sm text-[#8b7a66]">0{index + 1}</p>
                  <h3 className="mt-10 font-display text-3xl font-normal leading-tight">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section id="team" className="section-space px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Команда мастеров</p>
            <h2 className="reveal max-w-3xl font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
              Уникальный опыт.
              <br />
              Ощущение гостя.
              <br />
              Работа на результат.
            </h2>
          </div>
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {masters.map((master) => (
              <article
                key={master.name}
                className="reveal overflow-hidden border border-[#d3c4ae] bg-[#fbf6ee]/72 transition duration-500 hover:bg-[#fbf6ee]"
              >
                {master.image ? (
                  <div className="relative h-[360px] overflow-hidden border-b border-[#d3c4ae] sm:h-[420px]">
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="flex h-[360px] items-end border-b border-[#d3c4ae] bg-[#e2d5c3] p-8 sm:h-[420px]">
                    <p className="max-w-xs text-base leading-7 text-[#5b5044]">
                      Фото будет добавлено позже
                    </p>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-5xl font-normal leading-tight">
                    {master.name}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-[#5b5044]">
                    {master.role}
                  </p>
                  <p className="mt-10 border-t border-[#d3c4ae] pt-7 text-base leading-7 text-[#5b5044]">
                    {master.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="section-space px-6 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Отзывы гостей</p>
            <div className="reveal max-w-3xl">
              <h2 className="font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
                Отзывы гостей
              </h2>
              <p className="mt-12 max-w-2xl text-xl leading-9 text-[#5b5044]">
                Несколько слов от людей, которые доверили нам свои встречи,
                праздники и банные ритуалы.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="reveal border border-[#d3c4ae] bg-[#fbf6ee]/72 p-8 transition duration-500 hover:bg-[#fbf6ee] sm:p-10"
              >
                <h3 className="font-display text-4xl font-normal leading-tight">
                  {testimonial.name}
                </h3>
                <p className="mt-10 text-base leading-8 text-[#5b5044]">
                  {testimonial.text}
                </p>
              </article>
            ))}
          </div>

          <div className="reveal mt-14">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center border border-[#8f7f68] px-8 text-xs uppercase text-[#201b15] transition duration-500 hover:bg-[#201b15] hover:text-[#fbf6ee]"
            >
              Оставить отзыв
            </a>
          </div>
        </div>
      </section>

      <section
        id="privacy"
        className="bg-[#211c16] px-6 py-28 text-[#f7efe4] sm:px-10 lg:px-20 lg:py-44"
      >
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal relative min-h-[320px] overflow-hidden border border-[#3a3026] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src="/images/privacy/terrace-samovar.jpg"
              alt="Терраса и самовар в приватном пространстве Банного Бюро"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,17,12,.30),rgba(21,17,12,0))]" />
          </div>
          <div className="reveal max-w-3xl lg:pl-12">
            <p className="eyebrow text-[#bba78b]">Конфиденциальность</p>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,3.8vw,4.3rem)] font-normal leading-[1.06]">
              Конфиденциальность
            </h2>
            <div className="mt-12 space-y-6 text-xl leading-9 text-[#d7c8b5]">
              <p>Мы бережно относимся к приватности гостей.</p>
              <p>
                Всё, что происходит внутри ритуала, остаётся внутри
                пространства Банного Бюро.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="section-space bg-[#e4d7c4] px-6 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="reveal overflow-hidden border border-[#c8b8a0] bg-[#f6f0e7]/55">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[620px]">
                <Image
                  src="/images/contact/firepit.jpg"
                  alt="Огонь и спокойное место для завершения банного дня"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,17,12,.38),rgba(21,17,12,0)_58%)]" />
              </div>
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="eyebrow">Контакты</p>
                <h2 className="mt-10 max-w-xl font-display text-[clamp(2.4rem,4.2vw,4.8rem)] font-normal leading-[1.04]">
                  Связаться с нами
                </h2>
                <p className="mt-16 max-w-2xl text-2xl leading-10 text-[#3f352b]">
                  Свяжитесь с нами и расскажите о вашем запросе.
                  <br />
                  <br />
                  Мы обсудим формат встречи, количество гостей, особенности
                  пространства и желаемый сценарий.
                  <br />
                  <br />
                  После этого подготовим предложение и соберём команду мастеров
                  под вашу задачу.
                </p>
                <div className="mt-20 grid gap-4 sm:grid-cols-2">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span>Telegram</span>
                    <span className="text-sm uppercase">написать</span>
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span>WhatsApp</span>
                    <span className="text-sm uppercase">написать</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#e4d7c4] px-6 pt-24 pb-12 text-center text-xs leading-6 text-[#8f8376] sm:px-10 lg:px-20">
        <p>© 2026 Банное Бюро</p>
        <p className="mt-4">
          Банный кейтеринг №1 в России.
          <br />
          Все права защищены.
        </p>
      </footer>
    </main>
  );
}
