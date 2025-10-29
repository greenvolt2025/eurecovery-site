import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Humanitarian() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="humanitarian" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-5xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.humanitarian.title} <span className="font-semibold gradient-text">{t.humanitarian.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.humanitarian.description}
          </p>
        </div>

        <Card className="p-8 md:p-12 border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm mb-8 glow-blue-strong">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold text-gray-900">{t.humanitarian.free}</h3>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              {t.humanitarian.freeDesc}
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t.humanitarian.howToApply}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0 font-semibold">
                  1
                </div>
                <p className="text-gray-700 font-light pt-1">{t.humanitarian.step1}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0 font-semibold">
                  2
                </div>
                <p className="text-gray-700 font-light pt-1">{t.humanitarian.step2}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0 font-semibold">
                  3
                </div>
                <p className="text-gray-700 font-light pt-1">{t.humanitarian.step3}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full flex-shrink-0 font-semibold">
                  4
                </div>
                <p className="text-gray-700 font-light pt-1">{t.humanitarian.step4}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t.humanitarian.ethics}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-light leading-relaxed">
                  {t.humanitarian.ethicsDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-light">{t.humanitarian.noWeapons}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-light">{t.humanitarian.noIllegal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 font-light">{t.humanitarian.noImmoral}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 glow-blue font-semibold shadow-lg hover:shadow-xl"
          >
            {t.pricing.applyHumanitarian}
          </Button>
        </div>
      </div>
    </section>
  );
}