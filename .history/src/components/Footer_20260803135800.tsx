import { GraduationCap, Store, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-emerald-700/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <GraduationCap className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <Store className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-white">
                  KAWISAN-DIGITAL
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  Portal UMKM Kelurahan Kawisanyar
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Etalase digital resmi BBK 8 2026 Universitas Airlangga yang menghubungkan UMKM
              unggulan Kawisanyar langsung kepada pembeli.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigasi</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { l: 'Beranda', h: '#beranda' },
                { l: 'Katalog UMKM', h: '#katalog' },
                { l: 'Tentang Program', h: '#tentang' },
                { l: 'Expo KKN 2026', h: '#katalog' },
              ].map((x) => (
                <li key={x.h}>
                  <a href={x.h} className="text-slate-400 transition-colors hover:text-amber-400">
                    {x.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Lokasi Program</h4>
            <div className="mt-4 flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <span className="leading-relaxed">
                Kelurahan Kawisanyar, Kecamatan Kebomas, Kabupaten Gresik, Jawa Timur
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Kawisanyar+Kebomas+Gresik"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-emerald-600 hover:bg-emerald-900/30 hover:text-emerald-300"
            >
              Lihat di Peta
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <p className="text-center text-sm text-slate-400">
            Diinisiasi oleh Tim BB Universitas Airlangga — Kelurahan Kawisanyar, Kecamatan
            Kebomas, Kabupaten Gresik.
          </p>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
            © 2026 KAWISAN-DIGITAL. All Rights Reserved.
            <span className="text-emerald-500">·</span>
            Dibuat dengan
            <Heart className="h-3 w-3 fill-amber-500 text-amber-500" />
            untuk Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
