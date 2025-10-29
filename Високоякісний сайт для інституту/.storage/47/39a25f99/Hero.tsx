import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0E27] px-6">
      {/* Quantum visualization background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Quantum grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D4FF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated quantum particles with glow */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#00D4FF] rounded-full animate-pulse glow-cyan"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#4DFFFF] rounded-full animate-pulse glow-cyan animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-[#00D4FF] rounded-full animate-pulse glow-cyan animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#4DFFFF] rounded-full animate-pulse glow-cyan animation-delay-1500"></div>
        
        {/* Quantum waves with cyan glow */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4DFFFF] to-transparent opacity-30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-30"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="glow-cyan-strong rounded-full p-2">
            <Logo className="w-20 h-20 md:w-24 md:h-24" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Приватна наукова установа
          <br />
          <span className="font-semibold bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent">
            "Міжнародний інститут розвитку та відновлення України"
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Піонери нової ери обчислень
        </p>

        <p className="text-lg md:text-xl text-gray-400 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
          Квантове майбутнє для України — робимо неможливе можливим
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-800">
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-[#00D4FF] hover:bg-[#4DFFFF] text-[#0A0E27] px-8 py-6 text-lg rounded-xl transition-all duration-300 glow-cyan font-semibold"
          >
            Дізнатися більше
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="!bg-transparent !hover:bg-transparent border-2 border-[#00D4FF] hover:border-[#4DFFFF] text-[#00D4FF] hover:text-[#4DFFFF] px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Зв'язатися з нами
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00D4FF] rounded-full flex justify-center glow-cyan">
          <div className="w-1 h-3 bg-[#00D4FF] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}