import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_MAIN = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/3fc4d121-cc17-4dcc-8089-450bae05dd30.jpg';
const IMG_DETAIL = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/2af5436f-6a71-43d0-9277-e13c09a135a6.jpg';
const IMG_LIGHT = 'https://cdn.poehali.dev/projects/23d5f082-a324-40fb-a4b3-9560c6355c91/files/9cd7e949-2fb3-4b00-94e5-4473846dd157.jpg';

const specs = [
  { label: 'Тип марша', value: 'Прямой', icon: 'MoveVertical' },
  { label: 'Ширина', value: '1200 мм', icon: 'MoveHorizontal' },
  { label: 'Ступеней', value: '15 шт', icon: 'Layers' },
  { label: 'Толщина проступи', value: '30 мм', icon: 'Ruler' },
];

const angles = [
  { title: 'Фронтальный вид', desc: 'Чистая геометрия, естественный свет из окон', img: IMG_MAIN },
  { title: 'Дневное освещение', desc: 'Свет из окон и потолочные светильники', img: IMG_LIGHT },
  { title: 'Деталь ступени', desc: 'Светлое дерево, противоскользящие канавки', img: IMG_DETAIL },
];

const materials = [
  {
    name: 'Светлое дерево / композит',
    role: 'Проступь',
    props: ['Толщина 30 мм', 'Противоскользящая поверхность R10', 'Матовое масло-воск', 'Тёплый натуральный тон'],
    swatch: 'linear-gradient(135deg, #e8dcc6 0%, #dcc9a6 60%, #cdb78c 100%)',
  },
  {
    name: 'Слоновая кость',
    role: 'Стены и подступёнок',
    props: ['Матовая фактура', 'Светоотражающая база', 'Минималистичный фон', 'Лёгкое визуальное расширение'],
    swatch: 'linear-gradient(135deg, #fbf8f1 0%, #f1ece1 100%)',
  },
  {
    name: 'Светло-серый',
    role: 'Пол и опоры',
    props: ['Нейтральный тон', 'Скрытый монтаж', 'Тонкий стальной поручень', 'Спокойный контраст'],
    swatch: 'linear-gradient(135deg, #e4e5e6 0%, #c9cbcd 100%)',
  },
];

const lighting = [
  { title: 'Естественный свет из окон', desc: 'Большое остекление вдоль марша наполняет лестницу мягким дневным светом, подчёркивая текстуру дерева.', icon: 'Sun' },
  { title: 'Светильники верхнего перекрытия', desc: 'Встроенные потолочные споты дают равномерную засветку марша в тёмное время суток.', icon: 'Lightbulb' },
  { title: 'Безбликовая равномерность', desc: 'Матовые поверхности исключают блики, свет рассеивается мягко и комфортно для глаз.', icon: 'Sparkles' },
];

const details = [
  { title: 'Ступень', value: 'Светлое дерево 30 мм', desc: 'Деревянный или композитный массив, противоскользящая поверхность на каждой ступени.', icon: 'Layers' },
  { title: 'Поверхность', value: 'Anti-slip R10', desc: 'Тонкие канавки на проступи, безопасность без потери минимализма.', icon: 'Grip' },
  { title: 'Перила', value: 'Тонкий поручень', desc: 'Лаконичное ограждение, высота 900 мм, непрерывное по всему маршу.', icon: 'Minus' },
  { title: 'Пожарная безопасность', value: 'Соответствие нормам', desc: 'Огнестойкая обработка, ширина 1200 мм по нормам эвакуации.', icon: 'ShieldCheck' },
];

const Index = () => {
  const [activeAngle, setActiveAngle] = useState(0);

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#2b2a27] font-sans selection:bg-[#cdb78c] selection:text-[#2b2a27]">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-600 tracking-[0.25em] text-sm uppercase">Лестница · Проект 02</div>
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#8c887f]">
            <a href="#views" className="hover:text-[#b08d57] transition-colors">Виды</a>
            <a href="#materials" className="hover:text-[#b08d57] transition-colors">Материалы</a>
            <a href="#light" className="hover:text-[#b08d57] transition-colors">Свет</a>
            <a href="#details" className="hover:text-[#b08d57] transition-colors">Детали</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={IMG_MAIN} alt="Лестничный марш" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f3] via-[#faf8f3]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#b08d57] mb-6">
              <span className="w-8 h-px bg-[#b08d57]" /> Минимализм · 2026
            </span>
            <h1 className="font-display font-300 text-5xl md:text-8xl leading-[0.95] uppercase max-w-4xl">
              Прямой<br /><span className="text-[#b08d57]">лестничный</span> марш
            </h1>
            <p className="mt-6 max-w-md text-[#5d5a52] text-lg font-300">
              Светлое дерево, слоновая кость и естественный свет. Минимализм с акцентом на функциональность и безопасность.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            {specs.map((s) => (
              <div key={s.label} className="bg-[#faf8f3]/90 backdrop-blur px-5 py-6">
                <Icon name={s.icon} size={20} className="text-[#b08d57] mb-3" />
                <div className="font-display text-2xl font-500">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-[#8c887f] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIEWS */}
      <section id="views" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <SectionTitle num="01" title="Общий вид" sub="Со всех ракурсов" />
        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden border border-black/10 group">
            <img src={angles[activeAngle].img} alt={angles[activeAngle].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/55 to-transparent p-6 text-white">
              <div className="font-display text-2xl uppercase">{angles[activeAngle].title}</div>
              <div className="text-white/85 text-sm">{angles[activeAngle].desc}</div>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            {angles.map((a, i) => (
              <button
                key={a.title}
                onClick={() => setActiveAngle(i)}
                className={`text-left p-5 border transition-all duration-300 flex items-center gap-4 ${activeAngle === i ? 'border-[#b08d57] bg-[#b08d57]/10' : 'border-black/10 hover:border-black/30'}`}
              >
                <div className="w-16 h-16 shrink-0 overflow-hidden">
                  <img src={a.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className={`font-display uppercase tracking-wide ${activeAngle === i ? 'text-[#b08d57]' : ''}`}>{a.title}</div>
                  <div className="text-xs text-[#8c887f] mt-1">{a.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 md:py-32 bg-[#f1ece1]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="02" title="Материалы" sub="Светлая нейтральная палитра" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {materials.map((m) => (
              <div key={m.name} className="border border-black/10 bg-[#faf8f3] overflow-hidden">
                <div className="h-36 w-full border-b border-black/5" style={{ background: m.swatch }} />
                <div className="p-7">
                  <div className="text-[11px] uppercase tracking-widest text-[#b08d57]">{m.role}</div>
                  <h3 className="font-display text-xl uppercase mt-1 mb-5">{m.name}</h3>
                  <ul className="space-y-3">
                    {m.props.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-[#5d5a52]">
                        <Icon name="Check" size={16} className="text-[#b08d57] shrink-0" />
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
        <SectionTitle num="03" title="Освещение" sub="Естественный свет и светильники" />
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-black/10">
            <img src={IMG_LIGHT} alt="Освещение лестницы" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            {lighting.map((l, i) => (
              <div key={l.title} className="flex gap-5 p-5 border-l border-black/10 hover:border-[#b08d57] transition-colors">
                <div className="font-display text-3xl text-black/15 font-500 w-10">{`0${i + 1}`}</div>
                <div>
                  <div className="flex items-center gap-2 font-display text-xl uppercase">
                    <Icon name={l.icon} size={18} className="text-[#b08d57]" /> {l.title}
                  </div>
                  <p className="text-sm text-[#5d5a52] mt-2">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 md:py-32 bg-[#f1ece1]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle num="04" title="Детали конструкции" sub="Ступени · поверхность · перила" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 mt-12">
            {details.map((d) => (
              <div key={d.title} className="bg-[#faf8f3] p-7 hover:bg-white transition-colors">
                <Icon name={d.icon} size={28} className="text-[#b08d57] mb-6" />
                <div className="text-[11px] uppercase tracking-widest text-[#8c887f]">{d.title}</div>
                <div className="font-display text-lg uppercase mt-1 mb-3">{d.value}</div>
                <p className="text-sm text-[#5d5a52]">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#b08d57]/40 bg-[#b08d57]/8 p-8">
            <div className="flex items-center gap-4">
              <Icon name="ShieldCheck" size={40} className="text-[#b08d57]" />
              <div>
                <div className="font-display text-2xl uppercase">Безопасность и функциональность</div>
                <p className="text-sm text-[#5d5a52] max-w-lg">Противоскользящая поверхность на каждой ступени, ширина 1200 мм и огнестойкая обработка соответствуют нормам эвакуации.</p>
              </div>
            </div>
            <button className="shrink-0 px-8 py-4 bg-[#b08d57] text-white font-display uppercase tracking-widest text-sm hover:bg-[#9a7846] transition-colors">
              Запросить смету
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10 text-center text-xs uppercase tracking-widest text-[#8c887f]">
        Дизайн-проект лестничного марша · Минимализм · 1200 мм · 15 ступеней
      </footer>
    </div>
  );
};

const SectionTitle = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-end justify-between border-b border-black/10 pb-6">
    <div>
      <span className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">{sub}</span>
      <h2 className="font-display font-300 text-4xl md:text-6xl uppercase mt-2">{title}</h2>
    </div>
    <span className="font-display text-5xl md:text-7xl text-black/10 font-500">{num}</span>
  </div>
);

export default Index;
