import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, Store } from 'lucide-react';

const links = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Katalog UMKM', href: '#katalog' },
  { label: 'Tentang Program', href: '#tentang' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        {/* Branding & partnership */}
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-md shadow-emerald-800/20">
              <GraduationCap className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/20">
              <Store className="h-5 w-5" strokeWidth={2} />
            </span>
          </div>
          <div className="hidden h-9 w-px bg-slate-200 sm:block" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-extrabold tracking-tight text-emerald-800">
              KAWISAN-DIGITAL
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              Portal UMKM Kelurahan Kawisanyar
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-800"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#katalog"
            className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-800/25 transition-all hover:bg-emerald-900 hover:shadow-lg hover:shadow-emerald-800/30"
          >
            Expo KKN 2026
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-emerald-800 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-400 md:hidden ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 px-5 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#katalog"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-emerald-800 px-4 py-3 text-center text-sm font-bold text-white"
          >
            Expo BBK 8  2026
          </a>
        </div>
      </div>
    </header>
  );
}
