import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Pricing() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHumanitarian = () => {
    document.getElementById('humanitarian')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.pricing.title} <span className="font-semibold gradient-text">{t.pricing.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{t.pricing.consultation}</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light text-gray-900">
                  2000 <span className="text-2xl text-gray-600">€</span>
                </p>
                <p className="text-gray-600 font-light">{t.pricing.perSession}</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Аналіз вашого проекту</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Експертні рекомендації</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Оцінка можливостей</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Письмовий звіт</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full !bg-transparent !hover:bg-blue-50 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 py-6 rounded-xl transition-all duration-300 font-semibold"
              >
                {t.pricing.orderConsultation}
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-blue-600 transition-all duration-300 bg-white backdrop-blur-sm relative glow-blue-strong card-hover">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
              {t.pricing.popular}
            </div>
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{t.pricing.project}</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light text-gray-900">
                  {t.pricing.fromPrice} 50000 <span className="text-2xl text-gray-600">€</span>
                </p>
                <p className="text-gray-600 font-light">{t.pricing.complexity}</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Повний цикл розробки</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Доступ до квантових платформ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Тестування та оптимізація</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Детальна документація</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Навчання команди</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                  <span className="text-gray-700 font-light">Постпроектна підтримка</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl transition-all duration-300 glow-blue font-semibold shadow-lg hover:shadow-xl"
              >
                {t.pricing.discussProject}
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-green-500 transition-all duration-300 bg-gradient-to-br from-green-50 to-white backdrop-blur-sm card-hover">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t.pricing.humanitarian}</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light text-green-600">
                  {t.pricing.humanitarianPrice}
                </p>
                <p className="text-gray-600 font-light">{t.pricing.humanitarianDesc}</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 font-light">Проекти розвитку України</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 font-light">Суспільно корисні ініціативи</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 font-light">Відновлення інфраструктури</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 font-light">Освітні програми</span>
                </li>
              </ul>
              <Button
                onClick={scrollToHumanitarian}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                {t.pricing.applyHumanitarian}
              </Button>
            </div>
          </Card>
        </div>

        <p className="text-center text-gray-600 font-light max-w-2xl mx-auto">
          {t.pricing.individualApproach}
        </p>
      </div>
    </section>
  );
}