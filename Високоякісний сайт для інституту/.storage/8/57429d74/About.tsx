import { Card } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      title: 'Інновації',
      description: 'Впровадження передових квантових технологій для вирішення складних наукових та практичних завдань',
      icon: '🚀',
    },
    {
      title: 'Експертиза',
      description: 'Команда провідних фахівців у галузі квантової фізики та обчислювальних систем',
      icon: '🎓',
    },
    {
      title: 'Результати',
      description: 'Повний цикл супроводу проектів від концепції до практичної реалізації з детальною звітністю',
      icon: '📊',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Про <span className="font-semibold">інститут</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 mb-16 text-center font-light leading-relaxed">
          <p className="text-xl mb-6">
            Міжнародний інститут розвитку та відновлення України — це приватна наукова установа, 
            що спеціалізується на квантових обчисленнях та їх практичному застосуванні.
          </p>
          <p className="text-lg">
            Ми працюємо над створенням квантового майбутнього для України, поєднуючи фундаментальні 
            наукові дослідження з практичними рішеннями для бізнесу та державного сектору. Наша місія — 
            зробити квантові технології доступними та застосовними для вирішення реальних завдань.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}