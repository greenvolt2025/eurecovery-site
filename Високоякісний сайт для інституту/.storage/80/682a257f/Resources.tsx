import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Resources() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const resources = [
    {
      category: 'SDK та Frameworks',
      items: [
        { name: 'Qiskit', description: 'IBM\'s open-source quantum computing framework', link: '#' },
        { name: 'Cirq', description: 'Google\'s quantum computing framework', link: '#' },
        { name: 'PennyLane', description: 'Xanadu\'s quantum machine learning library', link: '#' },
        { name: 'Forest SDK', description: 'Rigetti\'s quantum computing toolkit', link: '#' },
      ],
    },
    {
      category: 'Документація',
      items: [
        { name: 'Quantum Algorithms', description: 'Бібліотека квантових алгоритмів', link: '#' },
        { name: 'Best Practices', description: 'Найкращі практики розробки', link: '#' },
        { name: 'API Reference', description: 'Повна документація API', link: '#' },
        { name: 'Tutorials', description: 'Покрокові навчальні матеріали', link: '#' },
      ],
    },
    {
      category: 'Дослідження',
      items: [
        { name: 'Research Papers', description: 'Наукові публікації команди', link: '#' },
        { name: 'Case Studies', description: 'Реальні кейси застосування', link: '#' },
        { name: 'Whitepapers', description: 'Технічні документи', link: '#' },
        { name: 'Blog', description: 'Останні новини та інсайти', link: '#' },
      ],
    },
    {
      category: 'Community',
      items: [
        { name: 'Slack Channel', description: 'Приєднуйтесь до спільноти', link: '#' },
        { name: 'GitHub', description: 'Open-source проекти', link: '#' },
        { name: 'Events', description: 'Вебінари та конференції', link: '#' },
        { name: 'Support', description: 'Технічна підтримка', link: '#' },
      ],
    },
  ];

  return (
    <section id="resources" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className={`max-w-6xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Ресурси для <span className="font-semibold gradient-text">розробників</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            Все необхідне для початку роботи з квантовими обчисленнями
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 bg-white backdrop-blur-sm card-hover"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">{resource.category}</h3>
              <ul className="space-y-4">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="group">
                    <a href={item.link} className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue group-hover:scale-125 transition-transform"></div>
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</p>
                        <p className="text-sm text-gray-600 font-light">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 glow-blue font-semibold shadow-lg hover:shadow-xl"
          >
            Переглянути всі ресурси
          </Button>
        </div>
      </div>
    </section>
  );
}