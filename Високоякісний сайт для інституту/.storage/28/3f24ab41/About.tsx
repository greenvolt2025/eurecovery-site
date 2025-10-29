import { Card } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      title: 'Інновації',
      description: 'Впровадження передових квантових технологій для вирішення складних наукових та практичних завдань',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          {/* Innovation rocket trajectory */}
          <path d="M 20 80 Q 60 20, 100 50 T 180 30" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
          </path>
          <circle cx="180" cy="30" r="6" fill="#3b82f6">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="50" r="4" fill="#60a5fa" opacity="0.6" />
          <circle cx="20" cy="80" r="4" fill="#93c5fd" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: 'Експертиза',
      description: 'Команда провідних фахівців у галузі квантової фізики та обчислювальних систем',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          {/* Network of expertise */}
          <circle cx="100" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="50" r="12" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="50" r="6" fill="#3b82f6" />
          
          <circle cx="60" cy="30" r="5" fill="#60a5fa" />
          <circle cx="140" cy="30" r="5" fill="#60a5fa" />
          <circle cx="60" cy="70" r="5" fill="#60a5fa" />
          <circle cx="140" cy="70" r="5" fill="#60a5fa" />
          
          <line x1="100" y1="50" x2="60" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="140" y2="30" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="60" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="140" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: 'Результати',
      description: 'Повний цикл супроводу проектів від концепції до практичної реалізації з детальною звітністю',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          {/* Growth chart */}
          <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20" 
                stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20 L 170 90 L 20 90 Z" 
                fill="url(#grad1)" opacity="0.2" />
          
          <circle cx="20" cy="80" r="4" fill="#3b82f6" />
          <circle cx="50" cy="60" r="4" fill="#3b82f6" />
          <circle cx="80" cy="65" r="4" fill="#3b82f6" />
          <circle cx="110" cy="40" r="4" fill="#3b82f6" />
          <circle cx="140" cy="45" r="4" fill="#3b82f6" />
          <circle cx="170" cy="20" r="5" fill="#3b82f6">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
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
              className="p-8 border border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white overflow-hidden"
            >
              <div className="mb-6">
                {feature.visual}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}