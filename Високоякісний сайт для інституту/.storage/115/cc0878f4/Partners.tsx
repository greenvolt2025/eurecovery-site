import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Partners() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const partners = [
    {
      name: 'IBM Quantum',
      description: t.partners.ibmDesc,
      specialization: t.partners.ibmSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <text x="500" y="200" fontSize="120" fontWeight="bold" textAnchor="middle" fill="#0f62fe">IBM</text>
          <text x="500" y="280" fontSize="60" textAnchor="middle" fill="#0f62fe">Quantum</text>
        </svg>
      ),
    },
    {
      name: 'Google Quantum AI',
      description: t.partners.googleDesc,
      specialization: t.partners.googleSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <text x="500" y="180" fontSize="100" fontWeight="bold" textAnchor="middle" fill="#4285f4">Google</text>
          <text x="500" y="260" fontSize="50" textAnchor="middle" fill="#34a853">Quantum AI</text>
        </svg>
      ),
    },
    {
      name: 'Microsoft Azure Quantum',
      description: t.partners.microsoftDesc,
      specialization: t.partners.microsoftSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <rect x="350" y="120" width="80" height="80" fill="#f25022"/>
          <rect x="450" y="120" width="80" height="80" fill="#7fba00"/>
          <rect x="350" y="220" width="80" height="80" fill="#00a4ef"/>
          <rect x="450" y="220" width="80" height="80" fill="#ffb900"/>
          <text x="600" y="220" fontSize="60" fontWeight="600" fill="#5e5e5e">Azure Quantum</text>
        </svg>
      ),
    },
    {
      name: 'IonQ',
      description: t.partners.ionqDesc,
      specialization: t.partners.ionqSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <circle cx="400" cy="200" r="60" fill="#0066cc" opacity="0.8"/>
          <circle cx="450" cy="200" r="60" fill="#0066cc" opacity="0.6"/>
          <circle cx="500" cy="200" r="60" fill="#0066cc" opacity="0.4"/>
          <text x="600" y="220" fontSize="100" fontWeight="bold" fill="#0066cc">IonQ</text>
        </svg>
      ),
    },
    {
      name: 'Rigetti Computing',
      description: t.partners.rigettiDesc,
      specialization: t.partners.rigettiSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <path d="M 350 200 L 400 150 L 450 200 L 400 250 Z" fill="#00d4ff" opacity="0.8"/>
          <path d="M 450 200 L 500 150 L 550 200 L 500 250 Z" fill="#00d4ff" opacity="0.6"/>
          <text x="600" y="220" fontSize="70" fontWeight="600" fill="#1a1a1a">Rigetti</text>
        </svg>
      ),
    },
    {
      name: 'D-Wave Systems',
      description: t.partners.dwaveDesc,
      specialization: t.partners.dwaveSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <path d="M 350 200 Q 400 150, 450 200 T 550 200" stroke="#00a3e0" strokeWidth="8" fill="none"/>
          <path d="M 350 220 Q 400 170, 450 220 T 550 220" stroke="#00a3e0" strokeWidth="8" fill="none" opacity="0.6"/>
          <text x="600" y="220" fontSize="70" fontWeight="bold" fill="#00a3e0">D-Wave</text>
        </svg>
      ),
    },
    {
      name: 'PsiQuantum',
      description: t.partners.psiquantumDesc,
      specialization: t.partners.psiquantumSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <circle cx="380" cy="200" r="40" fill="none" stroke="#6366f1" strokeWidth="4"/>
          <circle cx="420" cy="200" r="40" fill="none" stroke="#6366f1" strokeWidth="4"/>
          <circle cx="460" cy="200" r="40" fill="none" stroke="#6366f1" strokeWidth="4"/>
          <line x1="380" y1="200" x2="460" y2="200" stroke="#6366f1" strokeWidth="3"/>
          <text x="550" y="220" fontSize="70" fontWeight="600" fill="#6366f1">PsiQuantum</text>
        </svg>
      ),
    },
    {
      name: 'Xanadu',
      description: t.partners.xanaduDesc,
      specialization: t.partners.xanaduSpec,
      logo: (
        <svg viewBox="0 0 1000 400" className="w-full h-full">
          <rect x="0" y="0" width="1000" height="400" fill="white"/>
          <polygon points="400,150 450,200 400,250 350,200" fill="#ff6b6b" opacity="0.8"/>
          <polygon points="450,200 500,250 450,300 400,250" fill="#ff6b6b" opacity="0.6"/>
          <text x="550" y="220" fontSize="80" fontWeight="bold" fill="#ff6b6b">Xanadu</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="partners" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.partners.title} <span className="font-semibold gradient-text">{t.partners.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.partners.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm cursor-pointer card-hover group"
            >
              <div className="h-24 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-4 group-hover:bg-blue-50 transition-colors duration-300">
                {partner.logo}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 font-light mb-3 leading-relaxed">
                {partner.description}
              </p>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-light">
                  {partner.specialization}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}