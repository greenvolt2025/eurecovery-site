import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Privacy() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="privacy" ref={ref} className="py-16 px-6 bg-gray-50 border-t border-gray-200">
      <div className={`max-w-4xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 mb-8">
          {t.privacy.title}
        </h2>
        <Card className="p-6 md:p-8 border border-gray-200 bg-white">
          <div className="space-y-4 text-sm md:text-base text-gray-700 font-light leading-relaxed">
            <p>{t.privacy.p1}</p>
            <p>{t.privacy.p2}</p>
            <p>{t.privacy.p3}</p>
            <p>{t.privacy.p4}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
