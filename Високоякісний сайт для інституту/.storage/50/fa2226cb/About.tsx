import { Card } from '@/components/ui/card';

export default function About() {
  const features = [
    {
      title: 'Наука на першому місці',
      description: 'Фундаментальні дослідження та інновації у квантовій фізиці, що ведуть до практичних рішень для реального світу',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4DFFFF', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path d="M 20 80 Q 60 20, 100 50 T 180 30" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
          </path>
          <circle cx="180" cy="30" r="6" fill="#00D4FF" className="glow-cyan">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="50" r="4" fill="#4DFFFF" opacity="0.6" />
          <circle cx="20" cy="80" r="4" fill="#00D4FF" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: 'Орієнтація на бізнес',
      description: 'Перетворення квантових досліджень у комерційні рішення, що приносять реальну цінність підприємствам',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="20" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="50" r="12" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="50" r="6" fill="#00D4FF" className="glow-cyan" />
          
          <circle cx="60" cy="30" r="5" fill="#4DFFFF" />
          <circle cx="140" cy="30" r="5" fill="#4DFFFF" />
          <circle cx="60" cy="70" r="5" fill="#4DFFFF" />
          <circle cx="140" cy="70" r="5" fill="#4DFFFF" />
          
          <line x1="100" y1="50" x2="60" y2="30" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="140" y2="30" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="60" y2="70" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
          <line x1="100" y1="50" x2="140" y2="70" stroke="#00D4FF" strokeWidth="1" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: 'Доведені результати',
      description: 'Повний цикл супроводу проектів від концепції до впровадження з вимірюваними результатами',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#4DFFFF', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20" 
                stroke="#00D4FF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="glow-cyan" />
          <path d="M 20 80 L 50 60 L 80 65 L 110 40 L 140 45 L 170 20 L 170 90 L 20 90 Z" 
                fill="url(#grad2)" opacity="0.2" />
          
          <circle cx="20" cy="80" r="4" fill="#00D4FF" />
          <circle cx="50" cy="60" r="4" fill="#00D4FF" />
          <circle cx="80" cy="65" r="4" fill="#00D4FF" />
          <circle cx="110" cy="40" r="4" fill="#00D4FF" />
          <circle cx="140" cy="45" r="4" fill="#00D4FF" />
          <circle cx="170" cy="20" r="5" fill="#00D4FF" className="glow-cyan">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 bg-[#0A0E27]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Про <span className="font-semibold bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent">інститут</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto glow-cyan"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto text-gray-300 mb-16 text-center font-light leading-relaxed">
          <p className="text-xl mb-6">
            Міжнародний інститут розвитку та відновлення України — це приватна наукова установа, 
            що спеціалізується на квантових обчисленнях та їх практичному застосуванні.
          </p>
          <p className="text-lg text-gray-400">
            Ми поєднуємо фундаментальні наукові дослідження з орієнтацією на бізнес, створюючи 
            квантові рішення, що вирішують реальні завдання для підприємств та державного сектору. 
            Наша місія — зробити Україну лідером у квантових технологіях.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border border-[#1a1d35] hover:border-[#00D4FF] transition-all duration-300 bg-[#1a1d35]/30 backdrop-blur-sm overflow-hidden group"
            >
              <div className="mb-6">
                {feature.visual}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}