import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Technology() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const technologies = [
    {
      title: t.technology.superconducting,
      description: t.technology.superconductingDesc,
      companies: 'IBM, Google, Rigetti',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="superGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <rect x="60" y="30" width="80" height="40" rx="5" fill="url(#superGrad)" opacity="0.3"/>
          <circle cx="100" cy="50" r="15" fill="#3b82f6" className="glow-blue"/>
          <path d="M 85 50 Q 85 35, 100 35 Q 115 35, 115 50" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <path d="M 85 50 Q 85 65, 100 65 Q 115 65, 115 50" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <circle cx="70" cy="50" r="3" fill="#2563eb"/>
          <circle cx="130" cy="50" r="3" fill="#2563eb"/>
          <line x1="70" y1="50" x2="85" y2="50" stroke="#2563eb" strokeWidth="2"/>
          <line x1="115" y1="50" x2="130" y2="50" stroke="#2563eb" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: t.technology.trappedIons,
      description: t.technology.trappedIonsDesc,
      companies: 'IonQ, Honeywell',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="50" r="8" fill="#3b82f6" opacity="0.8" className="glow-blue">
            <animate attributeName="cy" values="50;45;50" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="50" r="8" fill="#3b82f6" opacity="0.8" className="glow-blue">
            <animate attributeName="cy" values="50;55;50" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="130" cy="50" r="8" fill="#3b82f6" opacity="0.8" className="glow-blue">
            <animate attributeName="cy" values="50;45;50" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M 50 30 Q 100 20, 150 30" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 50 70 Q 100 80, 150 70" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.4"/>
          <line x1="50" y1="30" x2="50" y2="70" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
          <line x1="150" y1="30" x2="150" y2="70" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
        </svg>
      ),
    },
    {
      title: t.technology.photonic,
      description: t.technology.photonicDesc,
      companies: 'PsiQuantum, Xanadu',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="photonGrad">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <line x1="20" y1="50" x2="180" y2="50" stroke="#2563eb" strokeWidth="2" opacity="0.3"/>
          <circle cx="50" cy="50" r="6" fill="url(#photonGrad)" className="glow-blue">
            <animate attributeName="cx" values="50;150;50" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80" cy="50" r="6" fill="url(#photonGrad)" className="glow-blue">
            <animate attributeName="cx" values="80;180;80" dur="3s" repeatCount="indefinite"/>
          </circle>
          <path d="M 40 40 L 50 50 L 40 60" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <path d="M 70 40 L 80 50 L 70 60" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <rect x="90" y="40" width="30" height="20" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.5"/>
        </svg>
      ),
    },
    {
      title: t.technology.annealing,
      description: t.technology.annealingDesc,
      companies: 'D-Wave',
      visual: (
        <svg className="w-full h-32" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 80 Q 40 20, 60 50 T 100 40 T 140 60 T 180 30" 
                stroke="#3b82f6" strokeWidth="3" fill="none" className="glow-blue"/>
          <path d="M 20 80 L 180 80" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"/>
          <circle cx="20" cy="80" r="4" fill="#3b82f6"/>
          <circle cx="180" cy="30" r="6" fill="#3b82f6" className="glow-blue">
            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="100" y="95" fontSize="10" textAnchor="middle" fill="#2563eb" opacity="0.6">Energy</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="technology" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.technology.title} <span className="font-semibold gradient-text">{t.technology.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.technology.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover"
            >
              <div className="mb-6">
                {tech.visual}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{tech.title}</h3>
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                {tech.description}
              </p>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500 font-light">
                  <span className="font-semibold text-gray-700">{t.technology.companies}:</span> {tech.companies}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}