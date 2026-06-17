import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_MAIN   = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/dc8b2e08-d565-424b-8152-6e38b3a21fec.jpg';
const IMG_DETAIL = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/854ef96e-7101-4ace-beb1-6bd6abc735fb.jpg';
const IMG_LIGHT  = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/b3905b38-e787-4767-85ad-b3bf574a12a9.jpg';

const NEON = '#00e5ff';   // синий акцент
const NEON2 = '#7a8494';  // нейтральный серый (вместо зелёного)

const specs = [
  { label: 'Тип марша',      value: 'Прямой',    icon: 'MoveVertical' },
  { label: 'Ширина',         value: '1200 мм',   icon: 'MoveHorizontal' },
  { label: 'Ступеней',       value: '15 шт',     icon: 'Layers' },
  { label: 'Класс защиты',   value: 'IP65',      icon: 'ShieldCheck' },
];

const angles = [
  { title: 'Общий вид',           desc: 'Тёмный бетон, равномерное потолочное освещение',  img: IMG_MAIN },
  { title: 'Рабочее освещение',   desc: 'Потолочные светильники, нейтральный белый свет',   img: IMG_LIGHT },
  { title: 'Детали безопасности', desc: 'Антискользящие вставки и усиленные уголки',        img: IMG_DETAIL },
];

const materials = [
  {
    name: 'Покрытие ступени',
    role: 'Тёмно-серый бетон / сталь',
    props: ['Толщина 40 мм', 'Нагрузка 600 кг/м²', 'Негорючий класс А1', 'Антивандальное исполнение'],
    swatch: 'linear-gradient(135deg, #2a2d32 0%, #1c1e22 100%)',
    glowColor: NEON,
  },
  {
    name: 'Антискользящая вставка',
    role: 'Резиновый профиль flush',
    props: ['Класс R13 (макс. антискольжение)', 'Ширина вставки 50 мм', 'Заподлицо с проступью', 'Тёмно-серый цвет'],
    swatch: 'linear-gradient(135deg, #2a2d32 0%, #1c1e22 100%)',
    glowColor: NEON2,
  },
  {
    name: 'Трубчатый поручень',
    role: 'Нержавеющая труба AISI 316',
    props: ['Диаметр трубы 50 мм', 'Высота ограждения 1000 мм', 'Стойки с шагом 900 мм', 'Нагрузка 150 кгс/м'],
    swatch: 'linear-gradient(135deg, #3a3d42 0%, #25282c 100%)',
    glowColor: NEON,
  },
];

const lighting = [
  { title: 'Потолочные светильники', desc: 'Встроенные споты на верхнем перекрытии, равномерная засветка марша без теней и слепящих точек.', icon: 'Circle' },
  { title: 'Аварийное освещение (аккумулятор)', desc: 'При отключении питания автоматически включается аварийный контур на 3 часа. Соответствие ГОСТ Р 55842.', icon: 'Zap' },
  { title: 'Датчик движения', desc: 'Полная яркость при движении, режим дежурства 10% в тишине — экономия до 70% энергии.', icon: 'Radar' },
];

const details = [
  { title: 'Ступень',        value: 'Бетон 40 мм',       desc: 'Высокопрочный бетон B30 с сетчатым армированием, нагрузка 600 кг/м².', icon: 'Layers' },
  { title: 'Антискольжение', value: 'Вставка R13',        desc: 'Резиновый профиль 50 мм по всей ширине, со встроенной LED-подсветкой.', icon: 'Grip' },
  { title: 'Уголки',         value: 'Стальной уголок',    desc: 'Усиленные накладные уголки из стали 3 мм на каждом торце ступени.', icon: 'Triangle' },
  { title: 'Аварийный свет', value: 'Автопереключение',   desc: 'Аккумулятор 3 ч, автозапуск при пропадании основного питания.', icon: 'Zap' },
];

const Index = () => {
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0e0f12', color: '#d0d4dc' }}>
      <style>{`
        :root {
          --neon: ${NEON};
          --neon2: ${NEON2};
        }
        .neon-border { border-color: var(--neon) !important; }
        .neon-text   { color: var(--neon) !important; }
        .neon-glow   { box-shadow: 0 0 18px 2px var(--neon), 0 0 4px 1px var(--neon); }
        .neon2-glow  { box-shadow: 0 0 14px 2px var(--neon2); }
        .scan-line::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.03) 4px);
          pointer-events: none;
        }
        @keyframes pulse-neon {
          0%,100% { opacity:1; } 50% { opacity:.55; }
        }
        .pulse-neon { animation: pulse-neon 2.4s ease-in-out infinite; }
        @keyframes fade-up-in {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fade-up-in .7s cubic-bezier(.16,1,.3,1) forwards; }
        .fade-up-d { animation: fade-up-in .7s .25s cubic-bezier(.16,1,.3,1) both; }
      `}</style>

      {/* NAV */}
      <header style={{ background: 'rgba(14,15,18,.85)', borderBottom: '1px solid rgba(0,229,255,.12)' }}
              className="fixed top-0 inset-x-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-500 tracking-[0.3em] text-sm uppercase neon-text">
            <span className="pulse-neon inline-block w-2 h-2 rounded-full mr-2" style={{ background: NEON, verticalAlign: 'middle' }} />
            Лестница · Проект 03
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest" style={{ color: '#6a7280' }}>
            {['Виды','Материалы','Свет','Детали'].map((l, i) => (
              <a key={l} href={['#views','#materials','#light','#details'][i]}
                 className="hover:neon-text transition-colors"
                 style={{}}
                 onMouseEnter={e => (e.currentTarget.style.color = NEON)}
                 onMouseLeave={e => (e.currentTarget.style.color = '#6a7280')}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden scan-line">
        <img src={IMG_MAIN} alt="Лестница" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0e0f12 30%, rgba(14,15,18,.5) 70%, rgba(14,15,18,.2))' }} />

        {/* угловые маркеры */}
        {[['top-4 left-4','border-t border-l'],['top-4 right-4','border-t border-r'],
          ['bottom-24 left-4','border-b border-l'],['bottom-24 right-4','border-b border-r']].map(([pos, br]) => (
          <div key={pos} className={`absolute ${pos} w-6 h-6 ${br} neon-border opacity-60`} />
        ))}

        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] mb-6" style={{ color: NEON }}>
              <span className="w-8 h-px" style={{ background: NEON }} />
              Industrial Safety · 2026
            </span>
            <h1 className="font-display font-300 text-5xl md:text-8xl leading-[0.9] uppercase max-w-4xl">
              Технологичный<br /><span style={{ color: NEON }}>лестничный</span> марш
            </h1>
            <p className="mt-6 max-w-md text-lg font-300" style={{ color: '#8891a0' }}>
              Тёмно-серый бетон, трубчатые поручни из нержавейки, орбитальная LED-подсветка и автоматический аварийный контур.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 fade-up-d"
               style={{ border: `1px solid rgba(0,229,255,.2)`, gap: 1, background: `rgba(0,229,255,.1)` }}>
            {specs.map((s) => (
              <div key={s.label} className="px-5 py-6 group" style={{ background: '#0e0f12' }}>
                <Icon name={s.icon} size={20} className="mb-3" style={{ color: NEON }} />
                <div className="font-display text-2xl font-500" style={{ color: '#e8ecf2' }}>{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: '#5a6270' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="01" title="Общий вид" sub="Со всех ракурсов" />
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden group scan-line"
               style={{ border: `1px solid rgba(0,229,255,.2)` }}>
            <img src={angles[activeAngle].img} alt={angles[activeAngle].title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85" />
            <div className="absolute bottom-0 inset-x-0 p-6"
                 style={{ background: 'linear-gradient(to top, rgba(14,15,18,.95), transparent)' }}>
              <div className="font-display text-2xl uppercase" style={{ color: NEON }}>{angles[activeAngle].title}</div>
              <div className="text-sm mt-1" style={{ color: '#8891a0' }}>{angles[activeAngle].desc}</div>
            </div>
            <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest pulse-neon" style={{ color: NEON }}>● LIVE</div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-3">
            {angles.map((a, i) => (
              <button key={a.title} onClick={() => setActiveAngle(i)}
                      className="text-left p-4 flex items-center gap-4 transition-all duration-300"
                      style={{ border: `1px solid ${activeAngle === i ? NEON : 'rgba(255,255,255,.08)'}`,
                               background: activeAngle === i ? 'rgba(0,229,255,.06)' : 'transparent' }}>
                <div className="w-16 h-16 shrink-0 overflow-hidden" style={{ border: `1px solid rgba(0,229,255,.2)` }}>
                  <img src={a.img} alt="" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <div className="font-display uppercase tracking-wide text-sm"
                       style={{ color: activeAngle === i ? NEON : '#c0c8d4' }}>{a.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#5a6270' }}>{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 md:py-32" style={{ background: '#11131a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="02" title="Материалы" sub="Технические характеристики" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {materials.map((m) => (
              <div key={m.name} className="overflow-hidden group transition-all duration-300"
                   style={{ border: `1px solid rgba(255,255,255,.08)`, background: '#0e0f12' }}
                   onMouseEnter={e => (e.currentTarget.style.borderColor = m.glowColor)}
                   onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)')}>
                <div className="h-32 w-full relative" style={{ background: m.swatch }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-1 rounded-full" style={{ background: m.glowColor, boxShadow: `0 0 20px 4px ${m.glowColor}` }} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: m.glowColor }}>{m.role}</div>
                  <h3 className="font-display text-xl uppercase mb-4" style={{ color: '#e0e4ec' }}>{m.name}</h3>
                  <ul className="space-y-2.5">
                    {m.props.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm" style={{ color: '#7a8494' }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.glowColor }} />
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
        <SectionTitle num="03" title="Освещение" sub="Орбитальный контур + аварийный режим" />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden scan-line"
               style={{ border: `1px solid rgba(0,229,255,.2)` }}>
            <img src={IMG_LIGHT} alt="Освещение" className="w-full h-full object-cover opacity-80" />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest" style={{ color: NEON }}>
              <span className="pulse-neon inline-block w-1.5 h-1.5 rounded-full mr-1 bg-current" />
              Lighting: UNIFORM
            </div>
          </div>
          <div className="space-y-4">
            {lighting.map((l, i) => (
              <div key={l.title} className="p-5 transition-all duration-300 group"
                   style={{ borderLeft: `3px solid rgba(0,229,255,.25)` }}
                   onMouseEnter={e => (e.currentTarget.style.borderLeftColor = NEON)}
                   onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'rgba(0,229,255,.25)')}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-2xl font-500" style={{ color: 'rgba(0,229,255,.2)' }}>{`0${i+1}`}</span>
                  <div className="flex items-center gap-2 font-display text-xl uppercase" style={{ color: '#d4d8e4' }}>
                    <Icon name={l.icon} size={18} style={{ color: NEON }} /> {l.title}
                  </div>
                </div>
                <p className="text-sm pl-10" style={{ color: '#6a7484' }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 md:py-32" style={{ background: '#11131a' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="04" title="Детали конструкции" sub="Безопасность на каждом уровне" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12" style={{ gap: 1, background: 'rgba(0,229,255,.1)' }}>
            {details.map((d) => (
              <div key={d.title} className="p-7 group transition-colors"
                   style={{ background: '#0e0f12' }}
                   onMouseEnter={e => (e.currentTarget.style.background = '#131620')}
                   onMouseLeave={e => (e.currentTarget.style.background = '#0e0f12')}>
                <Icon name={d.icon} size={28} className="mb-6" style={{ color: NEON }} />
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#4a5260' }}>{d.title}</div>
                <div className="font-display text-lg uppercase mb-3" style={{ color: '#d4d8e4' }}>{d.value}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#6a7484' }}>{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Safety banner */}
          <div className="mt-16 relative overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-6"
               style={{ border: `1px solid ${NEON}`, background: 'rgba(0,229,255,.04)' }}>
            <div className="absolute inset-0 scan-line pointer-events-none" />
            <div className="absolute top-2 right-4 text-[10px] uppercase tracking-widest pulse-neon" style={{ color: NEON }}>
              System: OK ●
            </div>
            <div className="flex items-center gap-5 relative">
              <div className="neon-glow rounded-full p-3" style={{ border: `1px solid ${NEON}` }}>
                <Icon name="ShieldCheck" size={36} style={{ color: NEON }} />
              </div>
              <div>
                <div className="font-display text-2xl uppercase" style={{ color: '#e4e8f0' }}>Комплексная безопасность</div>
                <p className="text-sm mt-1 max-w-lg" style={{ color: '#6a7484' }}>
                  Anti-slip R13, усиленные уголки, орбитальная подсветка и автоматический аварийный контур на 3 часа — полное соответствие нормам эвакуации.
                </p>
              </div>
            </div>
            <button className="shrink-0 px-8 py-4 font-display uppercase tracking-widest text-sm transition-all"
                    style={{ border: `1px solid ${NEON}`, color: NEON, background: 'transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.background = NEON; e.currentTarget.style.color = '#0e0f12'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NEON; }}>
              Запросить смету
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs uppercase tracking-widest"
              style={{ borderTop: '1px solid rgba(0,229,255,.1)', color: '#3a4252' }}>
        <span style={{ color: NEON }}>■</span> Дизайн-проект лестничного марша · Industrial Safety · 1200 мм · 15 ступеней
      </footer>
    </div>
  );
};

const SectionTitle = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-end justify-between pb-6" style={{ borderBottom: '1px solid rgba(0,229,255,.15)' }}>
    <div>
      <span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#00e5ff' }}>{sub}</span>
      <h2 className="font-display font-300 text-4xl md:text-6xl uppercase mt-2" style={{ color: '#d4d8e4' }}>{title}</h2>
    </div>
    <span className="font-display text-5xl md:text-7xl font-500" style={{ color: 'rgba(0,229,255,.1)' }}>{num}</span>
  </div>
);

export default Index;