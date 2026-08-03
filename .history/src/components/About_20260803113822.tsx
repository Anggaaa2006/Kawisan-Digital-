import { useReveal } from '@/hooks/useReveal';
import { Target, Smartphone, Handshake, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Identifikasi Potensi',
    text: 'Memetakan dan memverifikasi UMKM unggulan warga Kawisanyar secara langsung di lapangan.',
  },
  {
    icon: Smartphone,
    title: 'Digitalisasi Niaga',
    text: 'Membangun etalase digital agar produk lokal dapat dilihat dan dipesan dari mana saja.',
  },
  {
    icon: Handshake,
    title: 'Hubungan Langsung',
    text: 'Menghubungkan pembeli langsung ke pelaku usaha via WhatsApp—tanpa perantara.',
  },
  {
    icon: TrendingUp,
    title: 'Dampak Berkelanjutan',
    text: 'Mendorong pertumbuhan ekonomi desa dan melestarikan komoditas khas Kawisanyar.',
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="tentang" ref={ref} className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
              Tentang Program
            </span>
            <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Dari Lapangan ke <span className="emerald-text">Layar</span>, <br className="hidden sm:block" />
              dari Warga ke Dunia
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              KAWISAN-DIGITAL adalah inovasi niaga digital yang diinisiasi oleh Tim KKN
              Universitas Airlangga untuk Kelurahan Kawisanyar, Kecamatan Kebomas, Kabupaten
              Gresik. Program ini hadir sebagai wujud nyata pengabdian mahasiswa dalam
              memberdayakan ekonomi mikro masyarakat.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Kami memetakan UMKM potensial, memverifikasi kualitas dan legalitasnya, lalu
              membangun etalase digital yang menghubungkan pelaku usaha langsung dengan
              pembeli—tanpa perantara, tanpa biaya tersembunyi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                Universitas Airlangga
              </span>
              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                KKN 2026
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                Kel. Kawisanyar
              </span>
            </div>
          </div>

          <div className="reveal reveal-delay-2 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 card-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-md shadow-emerald-800/20 transition-transform group-hover:scale-110">
                  <p.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
