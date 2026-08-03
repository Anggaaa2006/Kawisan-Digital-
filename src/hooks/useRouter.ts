import { useEffect, useState } from 'react';

export type Route = { name: 'home' } | { name: 'umkm'; id: string };

function parseHash(): Route {
  const hash = window.location.hash;
  const match = hash.match(/^#\/umkm\/(.+)$/);
  if (match) return { name: 'umkm', id: decodeURIComponent(match[1]) };
  return { name: 'home' };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

export function umkmUrl(id: string): string {
  return `#/umkm/${id}`;
}
