import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white px-6">
      {/* Quantum visualization background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-40 animation-delay-1500"></div>
        
        {/* Quantum waves */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Logo className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Приватна наукова установа
          <br />
          <span className="font-semibold text-blue-600">
            "Міжнародний інститут розвитку та відновлення України"
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Квантові обчислення від ідеї до реалізації
        </p>

        <p className="text-lg md:text-xl text-gray-500 font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
          Квантове майбутнє для України
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-800">
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Дізнатися більше
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="!bg-transparent !hover:bg-transparent border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Зв'язатися з нами
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}