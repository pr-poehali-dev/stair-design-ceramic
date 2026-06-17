import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_MAIN   = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/206ee536-3b51-4f3f-a70c-40be006b73b2.jpg';
const IMG_DETAIL = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/14468f31-2f8e-45e4-a0c6-903901fdb32f.jpg';
const IMG_LIGHT  = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/5a72c3bd-d0de-4692-9f80-875fc015836a.jpg';

// Цветовая палитра лофта
const BRASS  = '#c49a3c';   // латунь / медь
const BRASS2 = '#e8c06a';   // латунь светлая
const WARM   = '#2b2420';   // тёплый тёмный фон
const WARM2  = '#1e1a17';   // глубже

const specs = [
  { label: 'Тип марша',    value: 'Прямой',   icon: 'MoveVertical' },
  { label: 'Ширина',       value: '1200 мм',  icon: 'MoveHorizontal' },
  { label: 'Ступеней',     value: '15 шт',    icon: 'Layers' },
  { label: 'Стиль',        value: 'Лофт',     icon: 'Flame' },
];

const angles = [
  { title: 'Общий вид',        desc: 'Тёплая плитка под дерево, латунные перила, Edison-лампы',    img: IMG_MAIN },
  { title: 'Атмосфера света',  desc: 'Настенные бра и подвесные лампы — янтарный тёплый свет',     img: IMG_LIGHT },
  { title: 'Деталь отделки',   desc: 'Антискользящая канавка, медная вставка в стойке перил',      img: IMG_DETAIL },
];

const materials = [
  {
    name: 'Керамика под дерево',
    role: 'Проступь',
    props: ['Антискользящая канавка R11', 'Тёплый древесно-бежевый тон', 'Толщина 30 мм', 'Керамогранит PEI IV'],
    swatch: 'linear-gradient(135deg, #c8a97a 0%, #b8956a 55%, #a07d55 100%)',
    accent: BRASS,
  },
  {
    name: 'Сталь с латунной отделкой',
    role: 'Перила и поручень',
    props: ['Трубчатый поручень Ø50 мм', 'Латунное покрытие PVD', 'Высота 900 мм', 'Деревянная накладка опц.'],
    swatch: 'linear-gradient(135deg, #c49a3c 0%, #a07c28 60%, #7a5e1c 100%)',
    accent: BRASS,
  },
  {
    name: 'Тёплый серый',
    role: 'Стены и бетон',
    props: ['Фактурная штукатурка', 'Обнажённый бетон', 'Кирпичные вставки', 'Матовое покрытие'],
    swatch: 'linear-gradient(135deg, #6b6258 0%, #4e453d 100%)',
    accent: BRASS2,
  },
];

const lighting = [
  {
    title: 'Настенные бра в стиле индустриал',
    desc: 'Металлические светильники с открытой лампой Эдисона на кронштейнах. Устанавливаются вдоль марша с шагом 3 ступени.',
    icon: 'Lamp',
  },
  {
    title: 'Подвесные лампы над маршем',
    desc: 'Подвесы на разной высоте над верхней площадкой — создают глубину и тёплую янтарную атмосферу.',
    icon: 'Lightbulb',
  },
  {
    title: 'Тёплое рассеянное свечение',
    desc: 'Лампы 2200–2700K с открытой нитью. Без бликов на плитке — матовая поверхность поглощает свет.',
    icon: 'Sun',
  },
];

const details = [
  { title: 'Ступень',     value: 'Керамогранит 30 мм', desc: 'Плитка под тёплое дерево, антискользящая рифлёная канавка вдоль переднего края.', icon: 'Layers' },
  { title: 'Перила',      value: 'Латунная отделка',   desc: 'Стальная труба с PVD-покрытием под латунь/медь, опционально — деревянная накладка.', icon: 'GripHorizontal' },
  { title: 'Крепления',   value: 'Скрытый монтаж',     desc: 'Фланцевые стойки заподлицо со ступенью, шаг 1000 мм, латунные колпачки.', icon: 'Wrench' },
  { title: 'Безопасность', value: 'Нормы эвакуации',  desc: 'Ширина 1200 мм, непрерывный поручень, антискользящее покрытие R11.', icon: 'ShieldCheck' },
];

const Index = () => {
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <div className="min-h-screen font-sans" style={{ background: WARM2, color: '#e0d5c5' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500&display=swap');
        .grain::before {
          content:'';
          position:absolute;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events:none;
          z-index:1;
        }
        .brass-line { border-color: ${BRASS}44; }
        @keyframes fade-up-in {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up  { animation: fade-up-in .75s cubic-bezier(.16,1,.3,1) forwards; }
        .fade-up2 { animation: fade-up-in .75s .2s cubic-bezier(.16,1,.3,1) both; }
        .warm-hover:hover { background: rgba(196,154,60,.07) !important; }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
              style={{ background: 'rgba(30,26,23,.88)', borderBottom: `1px solid ${BRASS}33` }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-500 tracking-[0.28em] text-sm uppercase" style={{ color: BRASS }}>
            Лестница · Проект 04
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest" style={{ color: '#8a7d6e' }}>
            {[['Виды','#views'],['Материалы','#materials'],['Свет','#light'],['Детали','#details']].map(([l, h]) => (
              <a key={l} href={h} style={{}}
                 onMouseEnter={e => (e.currentTarget.style.color = BRASS2)}
                 onMouseLeave={e => (e.currentTarget.style.color = '#8a7d6e')}
                 className="transition-colors">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden grain">
        <img src={IMG_MAIN} alt="Лестница лофт" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${WARM2} 28%, rgba(30,26,23,.55) 65%, rgba(30,26,23,.15))` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] mb-6" style={{ color: BRASS }}>
              <span className="w-8 h-px" style={{ background: BRASS }} /> Лофт · Тёплые материалы · 2026
            </span>
            <h1 className="font-display font-300 text-5xl md:text-8xl leading-[0.92] uppercase max-w-4xl">
              Лофт·<span style={{ color: BRASS }}>лестница</span><br />с характером
            </h1>
            <p className="mt-6 max-w-md text-lg font-300" style={{ color: '#a09080' }}>
              Керамика под тёплое дерево, латунные перила и Edison-лампы — промышленный дух с уютной атмосферой.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 fade-up2"
               style={{ border: `1px solid ${BRASS}33`, gap: '1px', background: `${BRASS}22` }}>
            {specs.map((s) => (
              <div key={s.label} className="px-5 py-6" style={{ background: WARM2 }}>
                <Icon name={s.icon} size={20} className="mb-3" style={{ color: BRASS }} />
                <div className="font-display text-2xl font-500" style={{ color: '#e8dcc8' }}>{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: '#6a5f52' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="01" title="Общий вид" sub="Со всех ракурсов" brass={BRASS} />
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden group"
               style={{ border: `1px solid ${BRASS}33` }}>
            <img src={angles[activeAngle].img} alt={angles[activeAngle].title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
            <div className="absolute bottom-0 inset-x-0 p-6"
                 style={{ background: `linear-gradient(to top, ${WARM2}, transparent)` }}>
              <div className="font-display text-2xl uppercase" style={{ color: BRASS2 }}>{angles[activeAngle].title}</div>
              <div className="text-sm mt-1" style={{ color: '#8a7d6e' }}>{angles[activeAngle].desc}</div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {angles.map((a, i) => (
              <button key={a.title} onClick={() => setActiveAngle(i)}
                      className="text-left p-4 flex items-center gap-4 transition-all duration-300 warm-hover"
                      style={{ border: `1px solid ${activeAngle === i ? BRASS : `${BRASS}22`}`,
                               background: activeAngle === i ? `${BRASS}0f` : 'transparent' }}>
                <div className="w-16 h-16 shrink-0 overflow-hidden" style={{ border: `1px solid ${BRASS}33` }}>
                  <img src={a.img} alt="" className="w-full h-full object-cover opacity-85" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-wide text-sm"
                       style={{ color: activeAngle === i ? BRASS2 : '#c0b09a' }}>{a.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#6a5f52' }}>{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 md:py-32" style={{ background: '#231f1b' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="02" title="Материалы" sub="Тёплая палитра и отделка" brass={BRASS} />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {materials.map((m) => (
              <div key={m.name} className="overflow-hidden transition-all duration-300"
                   style={{ border: `1px solid ${BRASS}22`, background: WARM2 }}
                   onMouseEnter={e => (e.currentTarget.style.borderColor = `${m.accent}88`)}
                   onMouseLeave={e => (e.currentTarget.style.borderColor = `${BRASS}22`)}>
                <div className="h-36 w-full" style={{ background: m.swatch }} />
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: m.accent }}>{m.role}</div>
                  <h3 className="font-display text-xl uppercase mb-4" style={{ color: '#e8dcc8' }}>{m.name}</h3>
                  <ul className="space-y-2.5">
                    {m.props.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm" style={{ color: '#8a7d6e' }}>
                        <Icon name="Check" size={14} style={{ color: m.accent }} className="shrink-0" />
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
        <SectionTitle num="03" title="Освещение" sub="Индустриальные бра и подвесы" brass={BRASS} />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden"
               style={{ border: `1px solid ${BRASS}33` }}>
            <img src={IMG_LIGHT} alt="Освещение" className="w-full h-full object-cover opacity-90" />
            <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-3 py-1"
                 style={{ border: `1px solid ${BRASS}55`, color: BRASS, background: `${WARM2}cc` }}>
              2200K — тёплый свет
            </div>
          </div>
          <div className="space-y-2">
            {lighting.map((l, i) => (
              <div key={l.title} className="p-5 transition-all duration-300 warm-hover"
                   style={{ borderLeft: `3px solid ${BRASS}33` }}
                   onMouseEnter={e => (e.currentTarget.style.borderLeftColor = BRASS)}
                   onMouseLeave={e => (e.currentTarget.style.borderLeftColor = `${BRASS}33`)}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-300" style={{ color: `${BRASS}44` }}>{`0${i + 1}`}</span>
                  <div className="flex items-center gap-2 font-display text-lg uppercase" style={{ color: '#e0d0b8' }}>
                    <Icon name={l.icon} size={17} style={{ color: BRASS }} />
                    {l.title}
                  </div>
                </div>
                <p className="text-sm pl-10" style={{ color: '#7a6e60' }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 md:py-32" style={{ background: '#231f1b' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="04" title="Детали конструкции" sub="Ступени · перила · крепления" brass={BRASS} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12"
               style={{ gap: '1px', background: `${BRASS}22` }}>
            {details.map((d) => (
              <div key={d.title} className="p-7 transition-colors warm-hover" style={{ background: WARM2 }}>
                <Icon name={d.icon} size={28} className="mb-6" style={{ color: BRASS }} />
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#5a4e42' }}>{d.title}</div>
                <div className="font-display text-lg uppercase mb-3" style={{ color: '#e0d0b8' }}>{d.value}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#7a6e60' }}>{d.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 relative overflow-hidden"
               style={{ border: `1px solid ${BRASS}55`, background: `${BRASS}08` }}>
            <div className="absolute inset-0 opacity-5"
                 style={{ background: `repeating-linear-gradient(45deg, ${BRASS} 0px, ${BRASS} 1px, transparent 1px, transparent 12px)` }} />
            <div className="flex items-center gap-5 relative">
              <div className="p-3 rounded-full" style={{ border: `1px solid ${BRASS}66` }}>
                <Icon name="Flame" size={36} style={{ color: BRASS }} />
              </div>
              <div>
                <div className="font-display text-2xl uppercase" style={{ color: '#e8dcc8' }}>Лофт с характером</div>
                <p className="text-sm mt-1 max-w-lg" style={{ color: '#7a6e60' }}>
                  Керамогранит R11, латунные перила PVD, бра в стиле индустриал — тёплая атмосфера и полное соответствие нормам безопасности.
                </p>
              </div>
            </div>
            <button className="relative shrink-0 px-8 py-4 font-display uppercase tracking-widest text-sm transition-all"
                    style={{ background: BRASS, color: WARM2 }}
                    onMouseEnter={e => (e.currentTarget.style.background = BRASS2)}
                    onMouseLeave={e => (e.currentTarget.style.background = BRASS)}>
              Запросить смету
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs uppercase tracking-widest"
              style={{ borderTop: `1px solid ${BRASS}22`, color: '#4a3f34' }}>
        <span style={{ color: BRASS }}>◆</span> Дизайн-проект лестницы · Лофт · 1200 мм · 15 ступеней
      </footer>
    </div>
  );
};

const SectionTitle = ({ num, title, sub, brass }: { num: string; title: string; sub: string; brass: string }) => (
  <div className="flex items-end justify-between pb-6" style={{ borderBottom: `1px solid ${brass}28` }}>
    <div>
      <span className="text-xs uppercase tracking-[0.3em]" style={{ color: brass }}>{sub}</span>
      <h2 className="font-display font-300 text-4xl md:text-6xl uppercase mt-2" style={{ color: '#e0d0b8' }}>{title}</h2>
    </div>
    <span className="font-display text-5xl md:text-7xl font-500" style={{ color: `${brass}18` }}>{num}</span>
  </div>
);

export default Index;
