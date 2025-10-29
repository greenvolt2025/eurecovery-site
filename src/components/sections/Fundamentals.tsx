import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Fundamentals() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const concepts = [
    {
      title: t.fundamentals.qubits,
      description: t.fundamentals.qubitsDesc,
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="qubitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <circle cx="70" cy="50" r="25" fill="url(#qubitGrad)" opacity="0.3"/>
          <circle cx="130" cy="50" r="25" fill="url(#qubitGrad)" opacity="0.3"/>
          <circle cx="100" cy="50" r="35" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="glow-blue"/>
          <circle cx="70" cy="50" r="8" fill="#3b82f6" className="glow-blue">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="130" cy="50" r="8" fill="#2563eb" className="glow-blue">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="70" y="85" fontSize="12" textAnchor="middle" fill="#3b82f6">|0⟩</text>
          <text x="130" y="85" fontSize="12" textAnchor="middle" fill="#2563eb">|1⟩</text>
        </svg>
      ),
    },
    {
      title: t.fundamentals.gates,
      description: t.fundamentals.gatesDesc,
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="30" width="40" height="40" rx="5" fill="none" stroke="#3b82f6" strokeWidth="2" className="glow-blue"/>
          <rect x="110" y="30" width="40" height="40" rx="5" fill="none" stroke="#2563eb" strokeWidth="2" className="glow-blue"/>
          <line x1="30" y1="50" x2="60" y2="50" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="100" y1="50" x2="110" y2="50" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="150" y1="50" x2="170" y2="50" stroke="#2563eb" strokeWidth="2"/>
          <circle cx="30" cy="50" r="4" fill="#3b82f6"/>
          <circle cx="170" cy="50" r="4" fill="#2563eb"/>
          <text x="80" y="55" fontSize="14" textAnchor="middle" fill="#3b82f6" fontWeight="bold">H</text>
          <text x="130" y="55" fontSize="14" textAnchor="middle" fill="#2563eb" fontWeight="bold">X</text>
        </svg>
      ),
    },
    {
      title: t.fundamentals.advantage,
      description: t.fundamentals.advantageDesc,
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 80 L 40 70 L 60 75 L 80 60 L 100 65 L 120 45 L 140 50 L 160 25 L 180 20" 
                stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5"/>
          <path d="M 20 80 L 40 65 L 60 60 L 80 40 L 100 35 L 120 15 L 140 12 L 160 8 L 180 5" 
                stroke="#3b82f6" strokeWidth="3" fill="none" className="glow-blue"/>
          <circle cx="180" cy="5" r="5" fill="#3b82f6" className="glow-blue">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="20" y="95" fontSize="10" fill="#cbd5e1">Classical</text>
          <text x="140" y="95" fontSize="10" fill="#3b82f6" fontWeight="bold">Quantum</text>
        </svg>
      ),
    },
    {
      title: t.fundamentals.complexity,
      description: t.fundamentals.complexityDesc,
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="35" ry="25" fill="#3b82f6" opacity="0.2"/>
          <ellipse cx="100" cy="50" rx="45" ry="35" fill="#2563eb" opacity="0.2"/>
          <ellipse cx="140" cy="50" rx="35" ry="25" fill="#1d4ed8" opacity="0.2"/>
          <text x="60" y="52" fontSize="16" textAnchor="middle" fill="#3b82f6" fontWeight="bold">P</text>
          <text x="100" y="52" fontSize="16" textAnchor="middle" fill="#2563eb" fontWeight="bold">NP</text>
          <text x="140" y="52" fontSize="16" textAnchor="middle" fill="#1d4ed8" fontWeight="bold">BQP</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="fundamentals" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.fundamentals.title} <span className="font-semibold gradient-text">{t.fundamentals.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.fundamentals.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover"
            >
              <div className="mb-6">
                {concept.visual}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{concept.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {concept.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}