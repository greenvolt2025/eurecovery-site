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
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Наші <span className="font-semibold">послуги</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6">
            Від ідеї до реалізації — повний спектр послуг у сфері квантових обчислень
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white border border-gray-200 rounded-2xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Повна звітність</h3>
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