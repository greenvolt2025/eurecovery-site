import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Fundamentals from '@/components/sections/Fundamentals';
import Technology from '@/components/sections/Technology';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import Applications from '@/components/sections/Applications';
import Humanitarian from '@/components/sections/Humanitarian';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Stats from '@/components/sections/Stats';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollProgress from '@/components/ScrollProgress';
import { Menu, X } from 'lucide-react';

export default function Index() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="8" fill="#3b82f6" className="glow-blue" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.8" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.6" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="35" ry="15" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.6" transform="rotate(-60 50 50)" />
              </svg>
              <span className="text-lg font-semibold text-gray-900">МІРВУ</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#hero" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.about}</a>
              <a href="#technology" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.technology}</a>
              <a href="#partners" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.partners}</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.services}</a>
              <a href="#applications" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.applications}</a>
              <a href="#humanitarian" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.humanitarian}</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.pricing}</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contact}</a>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.home}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.about}</a>
              <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.technology}</a>
              <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.partners}</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.services}</a>
              <a href="#applications" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.applications}</a>
              <a href="#humanitarian" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.humanitarian}</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.pricing}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contact}</a>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <div className="pt-16">
        <Hero />
        <About />
        <Stats />
        <Fundamentals />
        <Technology />
        <Partners />
        <Services />
        <Applications />
        <Humanitarian />
        <Pricing />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 text-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="font-light">
            © 2025 {t.contact.instituteName}
          </p>
          <p className="text-gray-600 text-sm font-light">
            {t.hero.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}