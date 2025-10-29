import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Partners />
      <Services />
      <Pricing />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="font-light">
            © 2025 Міжнародний інститут розвитку та відновлення України
          </p>
          <p className="text-gray-400 text-sm font-light">
            Квантове майбутнє для України
          </p>
        </div>
      </footer>
    </div>
  );
}