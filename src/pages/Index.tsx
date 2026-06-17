import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_MAIN = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/8844ca8f-c3e2-4562-aed9-10f3eeb7f9fa.jpg';
const IMG_DETAIL = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/1d978ac5-61fb-490b-af7d-5a9c68e8f331.jpg';
const IMG_LIGHT = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/224c516e-0894-480e-beca-e607f1ad4ea2.jpg';

const specs = [
  { label: 'Тип марша', value: 'Прямой', icon: 'MoveVertical' },
  { label: 'Ширина', value: '1200 мм', icon: 'MoveHorizontal' },
  { label: 'Ступеней', value: '15 шт', icon: 'Layers' },
  { label: 'Толщина проступи', value: '30 мм', icon: 'Ruler' },
];

const angles = [
  { title: 'Фронтальный вид', desc: 'Общая геометрия марша, ритм ступеней', img: IMG_MAIN },
  { title: 'Ночное освещение', desc: 'Подсветка ступеней, отражения стали', img: IMG_LIGHT },
  { title: 'Деталь конструкции', desc: 'Кромка проступи 30 мм и крепёж перил', img: IMG_DETAIL },
];

const materials = [
  {
    name: 'Керамогранит «Светлый дуб»',
    role: 'Проступь и подступёнок',
    props: ['Класс износа PEI IV', 'Группа R10 (антискольжение)', 'Толщина 30 мм', 'Негорючий НГ'],
    swatch: 'linear-gradient(135deg, #d8c2a0 0%, #c4a878 55%, #b89968 100%)',
  },
  {
    name: 'Нержавеющая сталь AISI 304',
    role: 'Перила и ограждение',
    props: ['Диаметр поручня 50 мм', 'Высота ограждения 900 мм', 'Шлифовка Satin', 'Коррозионно-стойкая'],
    swatch: 'linear-gradient(135deg, #e8eaec 0%, #b7bcc2 50%, #8a9097 100%)',
  },
];

const lighting = [
  { title: 'Линейная подсветка ступеней', desc: 'LED-лента 2700K в торце проступи. Мягкий тёплый контур, эвакуационная видимость.', icon: 'Lightbulb' },
  { title: 'Боковая стеновая засветка', desc: 'Встроенные точки в стене с шагом 3 ступени. Подчёркивает ритм марша.', icon: 'PanelLeft' },
  { title: 'Верхний акцентный свет', desc: 'Трековые споты на потолке, направленные на текстуру дерева.', icon: 'Sun' },
];

const details = [
  { title: 'Ступень', value: 'Проступь 30 мм', desc: 'Керамогранит на клеевом слое, противоскользящая кромка по СП.', icon: 'Layers' },
  { title: 'Перила', value: 'Поручень Ø50 мм', desc: 'Нержавейка AISI 304, высота 900 мм, непрерывный по всему маршу.', icon: 'GripHorizontal' },
  { title: 'Крепления', value: 'Скрытый монтаж', desc: 'Анкерные стойки с шагом 1000 мм, нагрузка на поручень 100 кгс/м.', icon: 'Wrench' },
  { title: 'Пожарная безопасность', value: 'Класс КМ0', desc: 'Негорючие материалы, ширина 1200 мм по нормам эвакуации.', icon: 'ShieldCheck' },
];

const Index = () => {
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <div className="min-h-screen bg-[#15161a] text-[#e9e6df] font-sans selection:bg-[#c4a878] selection:text-[#15161a]">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#15161a]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-600 tracking-[0.25em] text-sm uppercase">Лестница · Проект 01</div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#9a958b]">
            <a href="#views" className="hover:text-[#c4a878] transition-colors">Виды</a>
            <a href="#materials" className="hover:text-[#c4a878] transition-colors">Материалы</a>
            <a href="#light" className="hover:text-[#c4a878] transition-colors">Свет</a>
            <a href="#details" className="hover:text-[#c4a878] transition-colors">Детали</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={IMG_MAIN} alt="Лестничный марш" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161a] via-[#15161a]/40 to-[#15161a]/70" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c4a878] mb-6">
              <span className="w-8 h-px bg-[#c4a878]" /> Дизайн-проект · 2026
            </span>
            <h1 className="font-display font-300 text-5xl md:text-8xl leading-[0.95] uppercase max-w-4xl">
              Прямой<br /><span className="text-[#c4a878]">лестничный</span> марш
            </h1>
            <p className="mt-6 max-w-md text-[#b6b1a8] text-lg font-300">
              Керамогранит под светлое дерево, ограждение из нержавеющей стали, полное соответствие требованиям пожарной безопасности.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            {specs.map((s) => (
              <div key={s.label} className="bg-[#15161a]/80 backdrop-blur px-5 py-6">
                <Icon name={s.icon} size={20} className="text-[#c4a878] mb-3" />
                <div className="font-display text-2xl font-500">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-[#9a958b] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="01" title="Общий вид" sub="Со всех ракурсов" />
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden border border-white/10 group">
            <img src={angles[activeAngle].img} alt={angles[activeAngle].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#15161a] to-transparent p-6">
              <div className="font-display text-2xl uppercase">{angles[activeAngle].title}</div>
              <div className="text-[#b6b1a8] text-sm">{angles[activeAngle].desc}</div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            {angles.map((a, i) => (
              <button
                key={a.title}
                onClick={() => setActiveAngle(i)}
                className={`text-left p-5 border transition-all duration-300 flex items-center gap-4 ${activeAngle === i ? 'border-[#c4a878] bg-white/5' : 'border-white/10 hover:border-white/30'}`}
              >
                <div className="w-16 h-16 shrink-0 overflow-hidden">
                  <img src={a.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className={`font-display uppercase tracking-wide ${activeAngle === i ? 'text-[#c4a878]' : ''}`}>{a.title}</div>
                  <div className="text-xs text-[#9a958b] mt-1">{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 md:py-32 bg-[#1b1c21]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="02" title="Материалы" sub="Образцы и характеристики" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {materials.map((m) => (
              <div key={m.name} className="border border-white/10 bg-[#15161a] overflow-hidden">
                <div className="h-40 w-full" style={{ background: m.swatch }} />
                <div className="p-7">
                  <div className="text-[11px] uppercase tracking-widest text-[#c4a878]">{m.role}</div>
                  <h3 className="font-display text-2xl uppercase mt-1 mb-5">{m.name}</h3>
                  <ul className="space-y-3">
                    {m.props.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-[#b6b1a8]">
                        <Icon name="Check" size={16} className="text-[#c4a878] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTING */}
      <section id="light" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="03" title="Освещение" sub="Сценарии подсветки марша" />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <img src={IMG_LIGHT} alt="Освещение лестницы" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            {lighting.map((l, i) => (
              <div key={l.title} className="flex gap-5 p-5 border-l border-white/10 hover:border-[#c4a878] transition-colors">
                <div className="font-display text-3xl text-white/15 font-500 w-10">{`0${i + 1}`}</div>
                <div>
                  <div className="flex items-center gap-2 font-display text-xl uppercase">
                    <Icon name={l.icon} size={18} className="text-[#c4a878]" /> {l.title}
                  </div>
                  <p className="text-sm text-[#b6b1a8] mt-2">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 md:py-32 bg-[#1b1c21]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="04" title="Детали конструкции" sub="Ступени · перила · крепления" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-12">
            {details.map((d) => (
              <div key={d.title} className="bg-[#15161a] p-7 group hover:bg-[#1f2026] transition-colors">
                <Icon name={d.icon} size={28} className="text-[#c4a878] mb-6" />
                <div className="text-[11px] uppercase tracking-widest text-[#9a958b]">{d.title}</div>
                <div className="font-display text-xl uppercase mt-1 mb-3">{d.value}</div>
                <p className="text-sm text-[#b6b1a8]">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#c4a878]/30 bg-[#c4a878]/5 p-8">
            <div className="flex items-center gap-4">
              <Icon name="ShieldCheck" size={40} className="text-[#c4a878]" />
              <div>
                <div className="font-display text-2xl uppercase">Пожарная безопасность</div>
                <p className="text-sm text-[#b6b1a8] max-w-lg">Негорючие материалы класса КМ0, ширина марша 1200 мм и непрерывный поручень соответствуют нормам эвакуации.</p>
              </div>
            </div>
            <button className="shrink-0 px-8 py-4 bg-[#c4a878] text-[#15161a] font-display uppercase tracking-widest text-sm hover:bg-[#d8c2a0] transition-colors">
              Запросить смету
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs uppercase tracking-widest text-[#9a958b]">
        Дизайн-проект лестничного марша · Прямой · 1200 мм · 15 ступеней
      </footer>
    </div>
  );
};

const SectionTitle = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-end justify-between border-b border-white/10 pb-6">
    <div>
      <span className="text-xs uppercase tracking-[0.3em] text-[#c4a878]">{sub}</span>
      <h2 className="font-display font-300 text-4xl md:text-6xl uppercase mt-2">{title}</h2>
    </div>
    <span className="font-display text-5xl md:text-7xl text-white/10 font-500">{num}</span>
  </div>
);

export default Index;
