import { useState } from 'react';
import { getUmkmById, umkmList } from '@/data/umkm';
import { umkmUrl } from '@/hooks/useRouter';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  MapPin,
  Tag,
  User,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Leaf: ShieldCheck,
  Cookie: ShieldCheck,
  CookingPot: ShieldCheck,
  Factory: ShieldCheck,
};

export default function UmkmDetail({ id }: { id: string }) {
  const umkm = getUmkmById(id);
  const [activeImg, setActiveImg] = useState(0);

  if (!umkm) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 pt-24 text-center">
        <p className="text-2xl font-bold text-slate-800">UMKM tidak ditemukan</p>
        <a href="#beranda" className="rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white">
          Kembali ke Beranda
        </a>
      </div>
    );
  }

  const waLink = `https://wa.me/${umkm.wa_number}?text=${encodeURIComponent(
    `Halo ${umkm.pemilik}, saya tertarik dengan produk ${umkm.nama} dari KAWISAN-DIGITAL. Mohon informasi lebih lanjut.`,
  )}`;

  const relatedList = umkmList
    .filter((x) => x.id !== umkm.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6">
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <a href="#beranda" className="font-medium hover:text-emerald-700">Beranda</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <a href="#katalog" className="font-medium hover:text-emerald-700">Katalog UMKM</a>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-slate-700">{umkm.nama}</span>
        </nav>
      </div>

      {/* Hero header */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-72 sm:h-80 md:h-96">
            <img src={umkm.image} alt={umkm.nama} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-bold ${umkm.badge_color}`}>
                  {umkm.kategori}
                </span>
                <h1 className="mt-3 font-sans text-3xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
                  {umkm.nama}
                </h1>
                <p className="mt-2 text-base font-medium italic text-amber-200">{umkm.tagline}</p>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2.5 backdrop-blur-md">
                <User className="h-4 w-4 text-amber-300" />
                <span className="text-sm font-semibold text-white">{umkm.pemilik}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6">
        <a
          href="#katalog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Katalog
        </a>
      </div>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-slate-900">Tentang Usaha</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{umkm.deskripsi}</p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-slate-900">Galeri</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {umkm.galeri.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setActiveImg(i)}
                    className={`group relative aspect-square overflow-hidden rounded-2xl border-2 transition-all ${
                      activeImg === i ? 'border-emerald-600 ring-2 ring-emerald-200' : 'border-transparent hover:border-emerald-300'
                    }`}
                  >
                    <img src={src} alt={`${umkm.nama} ${i + 1}`} className="img-zoom h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {/* Spesifikasi Produk */}
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-slate-900">Spesifikasi Produk</h2>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
                <ul className="space-y-4">
                  {umkm.spesifikasi_produk.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" strokeWidth={2.2} />
                      <span className="text-sm leading-relaxed text-slate-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Produk */}
            <div>
              <h2 className="font-sans text-2xl font-extrabold text-slate-900">Daftar Produk & Harga</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {umkm.menu_produk.map((item) => (
                  <div
                    key={item.nama}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-slate-900">{item.nama}</h3>
                      <span className="flex-shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                        {item.harga}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — sidebar sticky */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Price card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Rentang Harga</span>
                <p className="mt-2 text-2xl font-extrabold text-emerald-800">{umkm.rentang_harga}</p>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Alamat</span>
                      <span className="text-sm leading-snug text-slate-600">{umkm.alamat_lengkap}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <User className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Pemilik</span>
                      <span className="text-sm font-semibold text-slate-700">{umkm.pemilik}</span>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {umkm.keunggulan.slice(0, 2).map((k) => (
                          <span key={k} className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                            {k.length > 24 ? k.slice(0, 24) + '…' : k}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-900 hover:shadow-lg hover:shadow-emerald-800/25"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                    Pesan via WhatsApp
                  </a>
                  <a
                    href={umkm.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    <MapPin className="h-4 w-4" strokeWidth={2.2} />
                    Petunjuk Maps
                  </a>
                </div>
              </div>

              {/* Keunggulan card */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
                <h3 className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                  Keunggulan
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {umkm.keunggulan.map((k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-emerald-800">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" strokeWidth={2.2} />
                      <span className="leading-snug">{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related UMKM */}
      {relatedList.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-sans text-2xl font-extrabold text-slate-900">UMKM Lainnya</h2>
              <a href="#katalog" className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900">
                Lihat Semua <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {relatedList.map((rel) => (
                <a
                  key={rel.id}
                  href={umkmUrl(rel.id)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={rel.image} alt={rel.nama} className="img-zoom h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold ${rel.badge_color}`}>
                      {rel.kategori}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 leading-tight">{rel.nama}</h3>
                    <p className="mt-1 text-xs italic text-amber-600">{rel.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">
                      Lihat Detail <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <p className="mt-2 text-xs text-slate-500">{rel.rentang_harga}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
