import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

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
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Наші <span className="font-semibold">послуги</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6">
            Від ідеї до реалізації — повний спектр послуг у сфері квантових обчислень
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Повна звітність</h3>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              За наслідками роботи надається повний детальний звіт з описом виконаних робіт, 
              отриманих результатів та рекомендацій щодо подальшого розвитку проекту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}