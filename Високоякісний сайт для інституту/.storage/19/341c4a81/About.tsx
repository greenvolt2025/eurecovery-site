import { Card } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      title: 'Інновації',
      description: 'Впровадження передових квантових технологій для вирішення складних наукових та практичних завдань',
    },
    {
      title: 'Експертиза',
      description: 'Команда провідних фахівців у галузі квантової фізики та обчислювальних систем',
    },
    {
      title: 'Результати',
      description: 'Повний цикл супроводу проектів від концепції до практичної реалізації з детальною звітністю',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Про <span className="font-semibold">інститут</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
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

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}