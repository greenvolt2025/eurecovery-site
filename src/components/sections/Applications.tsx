import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Applications() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="applications" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.applications.title} <span className="font-semibold gradient-text">{t.applications.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.applications.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="mb-6">
              <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="30" width="30" height="40" rx="3" fill="#3b82f6" opacity="0.3"/>
                <rect x="75" y="20" width="30" height="50" rx="3" fill="#3b82f6" opacity="0.5"/>
                <rect x="110" y="25" width="30" height="45" rx="3" fill="#3b82f6" opacity="0.7"/>
                <rect x="145" y="15" width="30" height="55" rx="3" fill="#3b82f6" opacity="0.9" className="glow-blue"/>
                <path d="M 30 75 L 50 65 L 85 50 L 120 40 L 155 25 L 180 20" stroke="#2563eb" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t.applications.enterprise}</h3>
            <p className="text-gray-600 font-light mb-4 leading-relaxed">
              {t.applications.enterpriseDesc}
            </p>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-semibold">{t.applications.speedup}</span>
              </div>
              <p className="text-sm text-gray-600 font-light mt-2">{t.applications.speedupDesc}</p>
            </div>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="mb-6">
              <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 20 L 120 35 L 120 55 Q 120 70, 100 75 Q 80 70, 80 55 L 80 35 Z" 
                      fill="none" stroke="#3b82f6" strokeWidth="2" className="glow-blue"/>
                <path d="M 100 30 L 115 40 L 115 53 Q 115 63, 100 67 Q 85 63, 85 53 L 85 40 Z" 
                      fill="#3b82f6" opacity="0.2"/>
                <circle cx="100" cy="50" r="15" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M 90 50 L 97 57 L 110 44" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{t.applications.government}</h3>
            <p className="text-gray-600 font-light mb-4 leading-relaxed">
              {t.applications.governmentDesc}
            </p>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold">{t.applications.securityTitle}</span>
              </div>
              <p className="text-sm text-gray-600 font-light mt-2">{t.applications.securityDesc}</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 border border-gray-200 bg-white backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t.applications.examples}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
              <p className="text-gray-700 font-light">{t.applications.example1}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
              <p className="text-gray-700 font-light">{t.applications.example2}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
              <p className="text-gray-700 font-light">{t.applications.example3}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
              <p className="text-gray-700 font-light">{t.applications.example4}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}