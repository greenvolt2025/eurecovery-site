import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ResearchDirections() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const directions = [
    {
      title: t.research.direction1Title,
      desc: t.research.direction1Desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth={2} fill="none" />
        </svg>
      ),
    },
    {
      title: t.research.direction3Title,
      desc: t.research.direction3Desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: t.research.direction4Title,
      desc: t.research.direction4Desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.research.title} <span className="font-semibold gradient-text">{t.research.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.research.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {directions.map((d, i) => (
            <Card
              key={i}
              className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl mb-6 border border-blue-200">
                {d.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{d.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{d.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
