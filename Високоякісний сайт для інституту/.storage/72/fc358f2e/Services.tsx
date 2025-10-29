import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Services() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      title: t.services.consultation,
      description: t.services.consultationDesc,
      features: [
        'Аналіз технічної здійсненності',
        'Оцінка потенційних переваг',
        'Рекомендації щодо впровадження',
        'Вибір оптимальної платформи',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="70" height="40" rx="8" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
          <rect x="110" y="20" width="70" height="40" rx="8" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.4" />
          <path d="M 90 40 L 110 40" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)" className="glow-blue" />
          <circle cx="55" cy="40" r="8" fill="#3b82f6" opacity="0.6" />
          <circle cx="145" cy="40" r="8" fill="#3b82f6" opacity="0.6" />
          <defs>
            <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      title: t.services.research,
      description: t.services.researchDesc,
      features: [
        'Розробка квантових алгоритмів',
        'Моделювання квантових систем',
        'Оптимізація квантових схем',
        'Наукові публікації',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="40" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="40" r="15" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="40" r="5" fill="#3b82f6" className="glow-blue" />
          <line x1="100" y1="15" x2="100" y2="5" stroke="#3b82f6" strokeWidth="2" />
          <line x1="125" y1="40" x2="135" y2="40" stroke="#3b82f6" strokeWidth="2" />
          <line x1="100" y1="65" x2="100" y2="75" stroke="#3b82f6" strokeWidth="2" />
          <line x1="75" y1="40" x2="65" y2="40" stroke="#3b82f6" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t.services.implementation,
      description: t.services.implementationDesc,
      features: [
        'Проектування архітектури',
        'Розробка та тестування',
        'Інтеграція з існуючими системами',
        'Навчання персоналу',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="45" width="30" height="25" fill="#3b82f6" opacity="0.3" />
          <rect x="65" y="35" width="30" height="35" fill="#3b82f6" opacity="0.5" />
          <rect x="100" y="25" width="30" height="45" fill="#3b82f6" opacity="0.7" />
          <rect x="135" y="15" width="30" height="55" fill="#3b82f6" opacity="0.9" className="glow-blue" />
        </svg>
      ),
    },
    {
      title: t.services.support,
      description: t.services.supportDesc,
      features: [
        'Моніторинг продуктивності',
        'Оновлення алгоритмів',
        'Технічна підтримка 24/7',
        'Регулярна звітність',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 10 L 130 25 L 130 50 Q 130 65, 100 70 Q 70 65, 70 50 L 70 25 Z" 
                fill="none" stroke="#3b82f6" strokeWidth="2" className="glow-blue" />
          <path d="M 100 20 L 120 30 L 120 48 Q 120 58, 100 62 Q 80 58, 80 48 L 80 30 Z" 
                fill="#3b82f6" opacity="0.2" />
          <path d="M 90 40 L 97 47 L 110 34" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.services.title} <span className="font-semibold gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover"
            >
              {service.visual}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span className="text-gray-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="p-8 bg-white border border-gray-200 rounded-2xl backdrop-blur-sm">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">{t.services.reportTitle}</h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              {t.services.reportDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}