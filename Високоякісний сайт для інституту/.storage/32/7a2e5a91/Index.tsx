import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" fill="#3b82f6" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.8" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" transform="rotate(-60 50 50)" />
              </svg>
              <span className="text-lg font-semibold text-gray-900">МІРВУ</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Головна</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Про нас</a>
              <a href="#partners" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Партнери</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Послуги</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Ціни</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Контакти</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-16">
        <Hero />
        <About />
        <Partners />
        <Services />
        <Pricing />
        <Contact />
      </div>
      
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