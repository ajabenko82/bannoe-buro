import Image from "next/image";

const ritualSteps = [
  {
    number: "01",
    title: "Состояние",
    text: "Начинаем с вопроса и тишины.",
  },
  {
    number: "02",
    title: "Сценарий",
    text: "Подбираем пар, воду, травы и ритм.",
  },
  {
    number: "03",
    title: "Ритуал",
    text: "Ведём день мягко и внимательно.",
  },
  {
    number: "04",
    title: "Возвращение",
    text: "Оставляем пространство для покоя.",
  },
];

const masters = [
  {
    name: "Дмитрий Широков",
    role: "Мастер восстановления",
    image: "/images/team/dmitry.jpg",
    text: "Ведёт гостя к состоянию покоя, внутренней тишины и восстановления сил.",
  },
  {
    name: "Александр Михель",
    role: "Архитектор ритуала",
    image: "/images/team/alexander.jpg",
    text: "Создаёт цельное банное действие, где пар, аромат и тепло складываются в персональный обряд.",
  },
  {
    name: "Алексей Аверьянов",
    role: "Проводник состояния",
    image: "/images/team/alexey.jpg",
    text: "Работает с температурой, ритмом и состоянием человека во время пара.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e7] text-[#201b15]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero/master-with-venik.jpg"
          alt="Банный мастер с веником в парном пространстве"
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,10,.88)_0%,rgba(18,14,10,.66)_42%,rgba(18,14,10,.34)_76%,rgba(18,14,10,.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_48%,rgba(246,240,231,.10),rgba(18,14,10,0)_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,#f6f0e7,rgba(246,240,231,0))]" />

        <header className="relative z-10 mx-auto flex w-full max-w-[1520px] items-center justify-between px-6 py-8 text-[#faf4ea] sm:px-10 lg:px-20 lg:py-12">
          <a href="#top" className="text-xs uppercase">
            Банное Бюро
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase text-[#eadfce]/80 lg:flex">
            <a href="#philosophy" className="transition hover:text-white">
              Философия
            </a>
            <a href="#ritual" className="transition hover:text-white">
              Ритуал
            </a>
            <a href="#team" className="transition hover:text-white">
              Команда
            </a>
            <a href="#contacts" className="transition hover:text-white">
              Контакты
            </a>
          </nav>
        </header>

        <div
          id="top"
          className="relative z-10 mx-auto flex min-h-[calc(100svh-112px)] w-full max-w-[1520px] items-start px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-28 lg:px-20 lg:pt-36 lg:pb-36"
        >
          <div className="reveal max-w-5xl text-[#fbf6ee]">
            <p className="mb-9 text-xs uppercase text-[#d8c7ae]">
              Авторские банные ритуалы
            </p>
            <h1 className="font-display text-[clamp(2.6rem,6.8vw,6.8rem)] font-normal leading-[0.9]">
              Банное Бюро
            </h1>
            <p className="mt-12 max-w-4xl font-display text-[clamp(3.2rem,7vw,8rem)] font-normal leading-[0.92] text-[#f6ecde]">
              С чем вы пришли сегодня?
            </p>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#eadfce] sm:text-xl sm:leading-9">
              Мы подбираем ритуал и команду мастеров под состояние человека.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#ritual"
                className="inline-flex h-14 items-center justify-center border border-[#fbf6ee]/75 bg-[#fbf6ee] px-8 text-xs uppercase text-[#201b15] transition duration-500 hover:border-[#d8c7ae] hover:bg-[#d8c7ae]"
              >
                Подобрать ритуал
              </a>
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
        id="philosophy"
        className="section-space px-6 sm:px-10 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="reveal relative min-h-[420px] overflow-hidden border border-[#d3c4ae] sm:min-h-[560px]">
            <Image
              src="/images/philosophy/restoration.jpg"
              alt="Восстановление и отдых после банного ритуала"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal max-w-3xl lg:pl-12">
            <p className="eyebrow">Философия Банного Бюро</p>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,3.8vw,4.3rem)] font-normal leading-[1.06]">
              Не меню процедур. Точная настройка состояния.
            </h2>
            <p className="mt-12 max-w-2xl text-xl leading-9 text-[#5b5044]">
              Гость не выбирает мастера. Бюро собирает ритуал, темп и команду
              под то, с чем человек пришёл сегодня.
            </p>
          </div>
        </div>
      </section>

      <section id="included" className="section-space px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Что входит в ритуал</p>
            <h2 className="reveal max-w-3xl font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
              Только необходимое. Всё собрано в цельный день.
            </h2>
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

      <section className="px-6 pb-32 sm:px-10 lg:px-20 lg:pb-52">
        <div className="reveal mx-auto max-w-[1320px] border-y border-[#d3c4ae] py-24 sm:py-32 lg:py-40">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow">Состояние</p>
            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(2.25rem,3.7vw,4.2rem)] font-normal leading-[1.07]">
                Мы работаем не с телом. Мы работаем с состоянием.
              </h2>
              <div className="mt-12 grid gap-3 sm:grid-cols-4">
                {["Жар", "Тишина", "Разговор", "Покой"].map((item) => (
                  <div
                    key={item}
                    className="border-t border-[#cfc0aa] pt-5 font-display text-3xl leading-tight"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-12 max-w-3xl text-xl leading-9 text-[#5b5044]">
                Мы собираем ритуал вокруг человека, а не человека вокруг
                процедуры.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ritual"
        className="bg-[#211c16] px-6 py-32 text-[#f7efe4] sm:px-10 lg:px-20 lg:py-52"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal text-[#bba78b]">
              Как проходит ритуал
            </p>
            <h2 className="reveal max-w-3xl font-display text-[clamp(2.25rem,3.8vw,4.4rem)] font-normal leading-[1.06]">
              Мягкий путь от первого вопроса к тишине после пара.
            </h2>
          </div>
          <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {ritualSteps.map((step) => (
              <article
                key={step.number}
                className="reveal border-t border-[#f7efe4]/18 pt-7"
              >
                <p className="text-sm text-[#bba78b]">{step.number}</p>
                <h3 className="mt-8 font-display text-4xl font-normal leading-tight">
                  {step.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-[#d7c8b5]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-space px-6 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow reveal">Команда мастеров</p>
            <h2 className="reveal max-w-3xl font-display text-[clamp(2.35rem,4vw,4.6rem)] font-normal leading-[1.04]">
              Три мастера. Один спокойный ритм.
            </h2>
          </div>
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {masters.map((master) => (
              <article
                key={master.name}
                className="reveal overflow-hidden border border-[#d3c4ae] bg-[#fbf6ee]/72 transition duration-500 hover:bg-[#fbf6ee]"
              >
                {master.image ? (
                  <div className="relative h-[420px] overflow-hidden border-b border-[#d3c4ae]">
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="flex h-[420px] items-end border-b border-[#d3c4ae] bg-[#e2d5c3] p-8">
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

      <section className="bg-[#211c16] px-6 py-28 text-[#f7efe4] sm:px-10 lg:px-20 lg:py-44">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal relative min-h-[420px] overflow-hidden border border-[#3a3026] sm:min-h-[560px]">
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
              <div className="relative min-h-[360px] lg:min-h-[620px]">
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
                  Начать разговор
                </h2>
                <p className="mt-16 max-w-2xl text-2xl leading-10 text-[#3f352b]">
                  Расскажите, с чем вы пришли сегодня.
                  <br />
                  Мы предложим формат ритуала и состав команды.
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
    </main>
  );
}
