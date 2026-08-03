import { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowDown, BadgeCheck, Truck, MessageCircle } from 'lucide-react';

type Stat = {
  target: string;
  label: string;
  icon: typeof BadgeCheck;
  isPercent?: boolean;
  isText?: boolean;
};

const stats: Stat[] = [
  { target: '4', label: 'UMKM Unggulan Terverifikasi', icon: BadgeCheck },
  { target: '100', label: 'Produk Asli Warga Desa', icon: Truck, isPercent: true },
  { target: 'Direct', label: 'Transaksi Langsung via WhatsApp', icon: MessageCircle, isText: true },
];

function AnimatedNumber({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (stat.isText) return;
          const target = parseInt(stat.target);
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  if (stat.isText) {
    return <span ref={ref} className="text-3xl font-extrabold text-amber-400 sm:text-4xl">Direct</span>;
  }
  return (
    <span ref={ref} className="text-3xl font-extrabold text-amber-400 sm:text-4xl">
      {value}{stat.isPercent && '%'}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 pb-20 pt-32 sm:pt-36"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-amber-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              Inovasi Niaga Digital Kelurahan Kawisanyar
            </span>
          </div>

          <h1
            className="animate-fade-up font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            Eksplorasi Potensi Lokal & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Niaga Digital
            </span>{' '}
            Kelurahan Kawisanyar
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/80 sm:text-lg"
            style={{ animationDelay: '0.2s' }}
          >
            Wadah integrasi UMKM unggulan Kelurahan Kawisanyar—menghubungkan tradisi herbal
            nusantara, kuliner autentik lokal, kerajinan aluminium dapur, hingga industri
            manufaktur kayu presisi secara langsung kepada pembeli.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#katalog"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-amber-500/25 transition-transform hover:scale-105 hover:bg-amber-400"
            >
              Lihat Katalog UMKM
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Tentang Program
            </a>
          </div>
        </div>

        {/* Stats counter */}
        <div
          className="animate-fade-up mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ animationDelay: '0.4s' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-7 text-center backdrop-blur-sm"
            >
              <stat.icon className="h-7 w-7 text-amber-400" strokeWidth={1.8} />
              <AnimatedNumber stat={stat} />
              <span className="text-xs font-medium leading-snug text-emerald-50/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="mt-14 flex justify-center">
        <a
          href="#katalog"
          className="flex flex-col items-center gap-1.5 text-emerald-200/50 transition-colors hover:text-amber-300"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Gulir ke katalog</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
