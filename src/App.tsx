import { useRouter } from '@/hooks/useRouter';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Footer from '@/components/Footer';
import UmkmDetail from '@/components/UmkmDetail';

export default function App() {
  const route = useRouter();

  if (route.name === 'umkm') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main>
          <UmkmDetail id={route.id} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
      <Footer />
    </div>
  );
}
