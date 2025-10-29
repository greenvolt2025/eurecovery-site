import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.about.title} <span className="font-semibold gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{t.about.mission}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{t.about.vision}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{t.about.scope}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t.about.scopeText}
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm overflow-hidden card-hover">
            <div className="mb-6">
              <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.4 }} />
                  </linearGradient>
                </defs>
                <path d="M 20 80 Q 60 20, 100 50 T 180 30" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
                </path>
                <circle cx="180" cy="30" r="6" fill="#3b82f6" className="glow-blue">
                  <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="50" r="4" fill="#2563eb" opacity="0.6" />
                <circle cx="20" cy="80" r="4" fill="#3b82f6" opacity="0.4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{t.about.feature1Title}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{t.about.feature1Desc}</p>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm overflow-hidden card-hover">
            <div className="mb-6">
              <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                <circle cx="100" cy="50" r="12" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
                <circle cx="100" cy="50" r="6" fill="#3b82f6" className="glow-blue" />
                <circle cx="60" cy="30" r="5" fill="#2563eb" />
                <circle cx="140" cy="30" r="5" fill="#2563eb" />
                <circle cx="60" cy="70" r="5" fill="#2563eb" />
                <circle cx="140" cy="70" r="5" fill="#2563eb" />
                <line x1="100" y1="50" x2="60" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                <line x1="100" y1="50" x2="140" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                <line x1="100" y1="50" x2="60" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                <line x1="100" y1="50" x2="140" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{t.about.feature2Title}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{t.about.feature2Desc}</p>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm overflow-hidden card-hover">
            <div className="mb-6">
              <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.4 }} />
                  </linearGradient>
                </defs>
                <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20" 
                      stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="glow-blue" />
                <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20 L 170 90 L 20 90 Z" 
                      fill="url(#grad2)" opacity="0.2" />
                <circle cx="20" cy="80" r="4" fill="#3b82f6" />
                <circle cx="50" cy="60" r="4" fill="#3b82f6" />
                <circle cx="80" cy="65" r="4" fill="#3b82f6" />
                <circle cx="110" cy="40" r="4" fill="#3b82f6" />
                <circle cx="140" cy="45" r="4" fill="#3b82f6" />
                <circle cx="170" cy="20" r="5" fill="#3b82f6" className="glow-blue">
                  <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{t.about.feature3Title}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{t.about.feature3Desc}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}