import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6"
    >
      {/* Quantum visualization background with parallax */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none parallax"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Quantum grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated quantum particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-pulse glow-blue"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-600 rounded-full animate-pulse glow-blue animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse glow-blue animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-600 rounded-full animate-pulse glow-blue animation-delay-1500"></div>
        
        {/* Quantum waves */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      </div>

      <div className={`max-w-5xl mx-auto text-center space-y-8 relative z-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="flex justify-center mb-8">
          <div className="glow-blue-strong rounded-full p-2">
            <Logo className="w-20 h-20 md:w-24 md:h-24" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
          {t.hero.subtitle}
          <br />
          <span className="font-semibold gradient-text">
            {t.hero.title}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
          {t.hero.tagline}
        </p>

        <p className="text-lg md:text-xl text-gray-600 font-light">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 glow-blue font-semibold shadow-lg hover:shadow-xl"
          >
            {t.hero.learnMore}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="!bg-transparent !hover:bg-blue-50 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            {t.hero.contactUs}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center glow-blue">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}