import { umkmList, type Umkm } from '@/data/umkm';
import { umkmUrl } from '@/hooks/useRouter';
import { useReveal } from '@/hooks/useReveal';
import {
  Leaf,
  Cookie,
  CookingPot,
  Factory,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Tag,
  User,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Cookie,
  CookingPot,
  Factory,
};

function UmkmCard({ umkm, index }: { umkm: Umkm; index: number }) {
  const Icon = iconMap[umkm.icon] ?? Leaf;
  const waLink = `https://wa.me/${umkm.wa_number}?text=${encodeURIComponent(
    `Halo ${umkm.pemilik}, saya tertarik dengan produk ${umkm.nama} dari KAWISAN-DIGITAL. Mohon informasi lebih lanjut.`,
  )}`;

  return (
    <article
      className={`reveal reveal-delay-${(index % 4) + 1} group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white card-lift`}
    >
      {/* Image header — clickable */}
      <a href={umkmUrl(umkm.id)} className="relative block h-52 overflow-hidden">
        <img
          src={umkm.image}
          alt={umkm.nama}
          className="img-zoom h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-sm ${umkm.badge_color}`}
        >
          {umkm.kategori}
        </span>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-emerald-800 shadow-md backdrop-blur-sm">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-sans text-xl font-extrabold leading-tight text-white drop-shadow-sm">
            {umkm.nama}
          </h3>
          <p className="mt-1 text-sm font-medium italic text-amber-200">{umkm.tagline}</p>
        </div>
      </a>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <User className="h-3.5 w-3.5 text-emerald-700" />
          {umkm.pemilik}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">{umkm.deskripsi}</p>

        {/* Specs */}
        <ul className="mt-4 space-y-2.5">
          {umkm.spesifikasi_produk.map((spec) => (
            <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" strokeWidth={2.2} />
              <span className="leading-snug">{spec}</span>
            </li>
          ))}
        </ul>

        {/* Price & address */}
        <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
          <div className="flex items-start gap-2.5">
            <Tag className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" strokeWidth={2} />
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Rentang Harga
              </span>
              <span className="text-sm font-bold text-slate-800">{umkm.rentang_harga}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" strokeWidth={2} />
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Alamat
              </span>
              <span className="text-sm leading-snug text-slate-600">{umkm.alamat_lengkap}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-900 hover:shadow-lg hover:shadow-emerald-800/25"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            Pesan via WhatsApp
          </a>
          <a
            href={umkm.maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800"
          >
            <MapPin className="h-4 w-4" strokeWidth={2.2} />
            Petunjuk Maps
          </a>
        </div>

        {/* Detail page link */}
        <a
          href={umkmUrl(umkm.id)}
          className="mt-4 flex items-center justify-center gap-1.5 text-sm font-bold text-emerald-700 transition-colors hover:text-emerald-900"
        >
          Lihat Halaman Lengkap
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function Catalog() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="katalog" ref={ref} className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
            Katalog UMKM
          </span>
          <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Empat UMKM Unggulan <span className="emerald-text">Kawisanyar</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Setiap pelaku usaha diverifikasi langsung oleh tim KKN. Hubungi mereka via
            WhatsApp atau kunjungi lokasi melalui peta yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {umkmList.map((umkm, i) => (
            <UmkmCard key={umkm.id} umkm={umkm} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
