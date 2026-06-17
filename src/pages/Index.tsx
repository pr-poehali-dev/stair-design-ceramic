import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_MAIN   = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/1ec421bc-6c1d-4491-88f3-e8b6f59ae027.jpg';
const IMG_DETAIL = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/90b4d010-dc48-4a05-bf71-ceab0d46ba99.jpg';
const IMG_LIGHT  = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/42b91800-9d1e-44b1-9f12-9d7826a7c137.jpg';

const MARK  = '#f5c400';   // жёлтая маркировка
const MARK2 = '#e07b00';   // оранжевый акцент
const BASE  = '#f4f5f6';   // светлый нейтральный фон
const DARK  = '#1a1c1f';   // текст и тёмные блоки
const MID   = '#5a6070';   // средний серый

const specs = [
  { label: 'Ширина марша',    value: '1400 мм',  icon: 'MoveHorizontal' },
  { label: 'Пропускная способность', value: '120 чел/мин', icon: 'Users' },
  { label: 'Ступеней',        value: '15 шт',    icon: 'Layers' },
  { label: 'Покрытие',        value: 'Алюминий', icon: 'Cpu' },
];

const angles = [
  { title: 'Общий вид',         desc: 'Широкий марш, стеклянные перила, маркировка зон',       img: IMG_MAIN },
  { title: 'Поток сотрудников', desc: 'Направленный свет, датчики движения, чистые зоны',       img: IMG_LIGHT },
  { title: 'Деталь ступени',    desc: 'Алюминиевая проступь, жёлтая полоса перехода, LED-нос',  img: IMG_DETAIL },
];

const materials = [
  {
    name: 'Алюминиевый профиль',
    role: 'Проступь',
    props: ['Анодированный алюминий', 'Рифлёная поверхность anti-slip', 'Встроенный LED-нос 24V', 'Нагрузка 800 кг/м²'],
    swatch: 'linear-gradient(135deg, #d8dadc 0%, #b8bcbf 55%, #9a9ea2 100%)',
    accent: MARK,
  },
  {
    name: 'Безрамное стекло',
    role: 'Ограждение',
    props: ['Закалённое стекло 12 мм', 'Стальные точечные держатели', 'Высота 1050 мм', 'Нагрузка 100 кгс/м'],
    swatch: 'linear-gradient(135deg, rgba(180,210,240,.35) 0%, rgba(140,180,220,.6) 100%)',
    accent: '#4fa8e0',
  },
  {
    name: 'Жёлтая маркировка',
    role: 'Зоны перехода',
    props: ['Полоса 50 мм по переднему краю', 'Светоотражающая плёнка', 'ГОСТ Р 12.4.026', 'Видимость при любом свете'],
    swatch: `linear-gradient(135deg, ${MARK} 0%, ${MARK2} 100%)`,
    accent: MARK,
  },
];

const lighting = [
  {
    title: 'Направленный LED-нос ступени',
    desc: 'Встроенный профиль 24V на переднем торце каждой проступи — подсвечивает зону шага, не слепит идущих.',
    icon: 'Flashlight',
  },
  {
    title: 'Датчик движения и чистоты',
    desc: 'Полная яркость при обнаружении движения, дежурный режим 15% — автоматически. ИК-датчики на каждом пролёте.',
    icon: 'Radar',
  },
  {
    title: 'Потолочный направленный свет',
    desc: 'Трековые споты 4000K над маршем усиливают контрастность маркировки и исключают тени в зоне ног.',
    icon: 'Lightbulb',
  },
];

const pros = [
  'Высокая пропускная способность — до 120 чел/мин',
  'Снижение очередей в час-пик',
  'Автоматическое управление светом',
  'Соответствие нормам безопасности офисных зданий',
];

const cons = [
  'Ширина 1400 мм — требует больше площади на плане',
  'Безрамное стекло увеличивает смету',
  'Регулярное обслуживание LED-профилей',
];

const details = [
  { title: 'Ступень',      value: 'Алюминий 40 мм',    desc: 'Анодированный профиль, встроенный LED-нос, рифлёная поверхность R12.',    icon: 'Layers' },
  { title: 'Ограждение',   value: 'Стекло 12 мм',      desc: 'Закалённое безрамное стекло с точечными держателями, высота 1050 мм.',     icon: 'Square' },
  { title: 'Маркировка',   value: 'Жёлтая полоса',     desc: '50 мм световозвращающая полоса по переднему краю, ГОСТ Р 12.4.026.',      icon: 'AlertTriangle' },
  { title: 'Датчики',      value: 'ИК + движение',     desc: 'Автовключение при обнаружении людей, дежурный режим 15% в пустом марше.', icon: 'Radar' },
];

const Index = () => {
  const [activeAngle, setActiveAngle] = useState(0);
  const [tab, setTab] = useState<'pros' | 'cons'>('pros');

  return (
    <div className="min-h-screen font-sans" style={{ background: BASE, color: DARK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500&display=swap');
        @keyframes fade-up-in {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up  { animation: fade-up-in .65s cubic-bezier(.16,1,.3,1) forwards; }
        .fade-up2 { animation: fade-up-in .65s .2s cubic-bezier(.16,1,.3,1) both; }
        .mark-line { position:relative; }
        .mark-line::before {
          content:'';
          position:absolute;
          left:0; top:50%;
          transform:translateY(-50%);
          width:3px; height:70%;
          background:${MARK};
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
              style={{ background: 'rgba(244,245,246,.92)', borderBottom: '1px solid #e0e2e5' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4" style={{ background: MARK }} />
            <span className="font-display font-500 tracking-[0.25em] text-sm uppercase">Лестница · Проект 05</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest" style={{ color: MID }}>
            {[['Виды','#views'],['Материалы','#materials'],['Свет','#light'],['Детали','#details']].map(([l, h]) => (
              <a key={l} href={h}
                 className="transition-colors"
                 onMouseEnter={e => (e.currentTarget.style.color = MARK2)}
                 onMouseLeave={e => (e.currentTarget.style.color = MID)}>{l}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={IMG_MAIN} alt="Лестница" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK} 22%, rgba(26,28,31,.55) 60%, rgba(26,28,31,.1))` }} />

        {/* маркировка-диагональ в углу */}
        <div className="absolute top-24 right-8 flex flex-col gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-0.5" style={{ width: `${32 + i * 8}px`, background: MARK, opacity: 1 - i * 0.13 }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] mb-6" style={{ color: MARK }}>
              <span className="w-8 h-px" style={{ background: MARK }} /> High-Traffic · Ergonomic · 2026
            </span>
            <h1 className="font-display font-300 text-white text-5xl md:text-8xl leading-[0.92] uppercase max-w-4xl">
              Эффективный<br /><span style={{ color: MARK }}>поток</span> людей
            </h1>
            <p className="mt-6 max-w-md text-lg font-300" style={{ color: '#a0a8b4' }}>
              Алюминий, безрамное стекло и умная подсветка — марш для интенсивного офисного движения без очередей и задержек.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 fade-up2"
               style={{ border: `1px solid ${MARK}55`, gap: '1px', background: `${MARK}33` }}>
            {specs.map((s) => (
              <div key={s.label} className="px-5 py-6" style={{ background: DARK }}>
                <Icon name={s.icon} size={20} className="mb-3" style={{ color: MARK }} />
                <div className="font-display text-2xl font-500 text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: '#4a5060' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="01" title="Общий вид" sub="Со всех ракурсов" accent={MARK} dark={DARK} mid={MID} />
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden group border border-black/10">
            <img src={angles[activeAngle].img} alt={angles[activeAngle].title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-white"
                 style={{ background: 'linear-gradient(to top, rgba(26,28,31,.9), transparent)' }}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 shrink-0" style={{ background: MARK }} />
                <span className="font-display text-2xl uppercase">{angles[activeAngle].title}</span>
              </div>
              <div className="text-sm mt-1" style={{ color: '#8a96a4' }}>{angles[activeAngle].desc}</div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {angles.map((a, i) => (
              <button key={a.title} onClick={() => setActiveAngle(i)}
                      className="text-left p-4 flex items-center gap-4 transition-all duration-300"
                      style={{ border: `1px solid ${activeAngle === i ? MARK : '#e0e2e5'}`,
                               background: activeAngle === i ? `${MARK}10` : 'white' }}>
                <div className="w-16 h-16 shrink-0 overflow-hidden border border-black/10">
                  <img src={a.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-wide text-sm"
                       style={{ color: activeAngle === i ? MARK2 : DARK }}>{a.title}</div>
                  <div className="text-xs mt-1" style={{ color: MID }}>{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 md:py-32" style={{ background: '#eceef0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="02" title="Материалы" sub="Алюминий · стекло · маркировка" accent={MARK} dark={DARK} mid={MID} />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {materials.map((m) => (
              <div key={m.name} className="overflow-hidden bg-white transition-all duration-300"
                   style={{ border: '1px solid #d8dade' }}
                   onMouseEnter={e => (e.currentTarget.style.borderColor = m.accent)}
                   onMouseLeave={e => (e.currentTarget.style.borderColor = '#d8dade')}>
                <div className="h-32 w-full" style={{ background: m.swatch }} />
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: m.accent }}>{m.role}</div>
                  <h3 className="font-display text-xl uppercase mb-4" style={{ color: DARK }}>{m.name}</h3>
                  <ul className="space-y-2.5">
                    {m.props.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm" style={{ color: MID }}>
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
        <SectionTitle num="03" title="Освещение" sub="Направленный свет + датчики" accent={MARK} dark={DARK} mid={MID} />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-black/10">
            <img src={IMG_LIGHT} alt="Освещение" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 font-display"
                 style={{ background: MARK, color: DARK }}>
              AUTO · SENSOR ON
            </div>
          </div>
          <div className="space-y-2">
            {lighting.map((l, i) => (
              <div key={l.title} className="p-5 mark-line transition-all duration-300 bg-white border border-transparent"
                   style={{ paddingLeft: '20px' }}
                   onMouseEnter={e => (e.currentTarget.style.borderColor = `${MARK}55`)}
                   onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
                <div className="flex items-center gap-3 mb-2 pl-4">
                  <span className="font-display text-2xl font-300" style={{ color: '#d8dadc' }}>{`0${i + 1}`}</span>
                  <div className="flex items-center gap-2 font-display text-lg uppercase" style={{ color: DARK }}>
                    <Icon name={l.icon} size={17} style={{ color: MARK }} />
                    {l.title}
                  </div>
                </div>
                <p className="text-sm pl-16" style={{ color: MID }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 md:py-32" style={{ background: '#eceef0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="04" title="Детали конструкции" sub="Ступени · ограждение · датчики" accent={MARK} dark={DARK} mid={MID} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12" style={{ gap: '1px', background: '#d0d2d6' }}>
            {details.map((d) => (
              <div key={d.title} className="p-7 bg-white transition-colors hover:bg-[#fafbfc]">
                <Icon name={d.icon} size={28} className="mb-6" style={{ color: MARK }} />
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#9aa0aa' }}>{d.title}</div>
                <div className="font-display text-lg uppercase mb-3" style={{ color: DARK }}>{d.value}</div>
                <p className="text-sm leading-relaxed" style={{ color: MID }}>{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros / Cons */}
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            <div className="bg-white">
              <div className="flex">
                {(['pros','cons'] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                          className="flex-1 py-4 font-display text-sm uppercase tracking-widest transition-all"
                          style={{ background: tab === t ? MARK : 'transparent',
                                   color: tab === t ? DARK : MID,
                                   borderBottom: tab === t ? 'none' : '1px solid #e0e2e5' }}>
                    {t === 'pros' ? '✓ Преимущества' : '✕ Ограничения'}
                  </button>
                ))}
              </div>
              <ul className="p-6 space-y-3">
                {(tab === 'pros' ? pros : cons).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: MID }}>
                    <span className="mt-1 w-2 h-2 shrink-0 rounded-full" style={{ background: tab === 'pros' ? MARK : '#e07b00' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden">
              <img src={IMG_DETAIL} alt="Деталь" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'rgba(26,28,31,.45)' }} />
              <div className="absolute bottom-6 left-6 right-6">
                <button className="w-full py-4 font-display uppercase tracking-widest text-sm transition-all"
                        style={{ background: MARK, color: DARK }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  Запросить смету
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs uppercase tracking-widest border-t border-black/8" style={{ color: '#9aa0aa' }}>
        <span style={{ color: MARK }}>■</span> Дизайн-проект · High-Traffic Ergonomic · 1400 мм · 15 ступеней
      </footer>
    </div>
  );
};

const SectionTitle = ({ num, title, sub, accent, dark, mid }: {
  num: string; title: string; sub: string; accent: string; dark: string; mid: string;
}) => (
  <div className="flex items-end justify-between pb-6 border-b border-black/10">
    <div>
      <span className="text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>{sub}</span>
      <h2 className="font-display font-300 text-4xl md:text-6xl uppercase mt-2" style={{ color: dark }}>{title}</h2>
    </div>
    <span className="font-display text-5xl md:text-7xl font-500" style={{ color: '#e0e2e5' }}>{num}</span>
  </div>
);

export default Index;
