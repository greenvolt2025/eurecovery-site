import { Card } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: 'Консультації',
      description: 'Експертна оцінка можливостей застосування квантових технологій для вашого проекту',
      features: [
        'Аналіз технічної здійсненності',
        'Оцінка потенційних переваг',
        'Рекомендації щодо впровадження',
        'Вибір оптимальної платформи',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="70" height="40" rx="8" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.4" />
          <rect x="110" y="20" width="70" height="40" rx="8" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.4" />
          <path d="M 90 40 L 110 40" stroke="#00D4FF" strokeWidth="2" markerEnd="url(#arrowcyan)" className="glow-cyan" />
          <circle cx="55" cy="40" r="8" fill="#00D4FF" opacity="0.6" />
          <circle cx="145" cy="40" r="8" fill="#00D4FF" opacity="0.6" />
          <defs>
            <marker id="arrowcyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#00D4FF" />
            </marker>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Дослідження',
      description: 'Фундаментальні та прикладні дослідження в галузі квантових обчислень',
      features: [
        'Розробка квантових алгоритмів',
        'Моделювання квантових систем',
        'Оптимізація квантових схем',
        'Наукові публікації',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="40" r="25" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="40" r="15" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="40" r="5" fill="#00D4FF" className="glow-cyan" />
          <line x1="100" y1="15" x2="100" y2="5" stroke="#00D4FF" strokeWidth="2" />
          <line x1="125" y1="40" x2="135" y2="40" stroke="#00D4FF" strokeWidth="2" />
          <line x1="100" y1="65" x2="100" y2="75" stroke="#00D4FF" strokeWidth="2" />
          <line x1="75" y1="40" x2="65" y2="40" stroke="#00D4FF" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Реалізація проектів',
      description: 'Повний цикл розробки та впровадження квантових рішень',
      features: [
        'Проектування архітектури',
        'Розробка та тестування',
        'Інтеграція з існуючими системами',
        'Навчання персоналу',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="45" width="30" height="25" fill="#00D4FF" opacity="0.3" />
          <rect x="65" y="35" width="30" height="35" fill="#00D4FF" opacity="0.5" />
          <rect x="100" y="25" width="30" height="45" fill="#00D4FF" opacity="0.7" />
          <rect x="135" y="15" width="30" height="55" fill="#00D4FF" opacity="0.9" className="glow-cyan" />
        </svg>
      ),
    },
    {
      title: 'Супровід',
      description: 'Постійна підтримка та оптимізація квантових систем',
      features: [
        'Моніторинг продуктивності',
        'Оновлення алгоритмів',
        'Технічна підтримка 24/7',
        'Регулярна звітність',
      ],
      visual: (
        <svg className="w-full h-24 mb-4" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 10 L 130 25 L 130 50 Q 130 65, 100 70 Q 70 65, 70 50 L 70 25 Z" 
                fill="none" stroke="#00D4FF" strokeWidth="2" className="glow-cyan" />
          <path d="M 100 20 L 120 30 L 120 48 Q 120 58, 100 62 Q 80 58, 80 48 L 80 30 Z" 
                fill="#00D4FF" opacity="0.2" />
          <path d="M 90 40 L 97 47 L 110 34" stroke="#00D4FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-24 px-6 bg-[#0A0E27]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Наші <span className="font-semibold bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent">послуги</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto glow-cyan"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mt-6">
            Від ідеї до реалізації — повний спектр послуг у сфері квантових обчислень
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 border border-[#1a1d35] hover:border-[#00D4FF] transition-all duration-300 bg-[#1a1d35]/30 backdrop-blur-sm"
            >
              {service.visual}
              <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span className="text-gray-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="p-8 bg-[#1a1d35]/30 border border-[#1a1d35] rounded-2xl backdrop-blur-sm">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-white">Повна звітність</h3>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              За наслідками роботи надається повний детальний звіт з описом виконаних робіт, 
              отриманих результатів та рекомендацій щодо подальшого розвитку проекту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}