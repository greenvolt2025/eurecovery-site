import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Stats() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const stats = [
    {
      number: 15,
      suffix: '+',
      label: t.stats.years,
      description: t.stats.yearsDesc,
    },
    {
      number: 50,
      suffix: '+',
      label: t.stats.publications,
      description: t.stats.publicationsDesc,
    },
    {
      number: 25,
      suffix: '+',
      label: t.stats.team,
      description: t.stats.teamDesc,
    },
    {
      number: 100,
      suffix: '+',
      label: t.stats.projects,
      description: t.stats.projectsDesc,
    },
  ];

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 border-y border-gray-200">
      <div className={`max-w-6xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 card-hover"
            >
              <h3 className="text-5xl font-light gradient-text">
                {counters[index]}{stat.suffix}
              </h3>
              <p className="text-xl font-semibold text-gray-900">{stat.label}</p>
              <p className="text-sm text-gray-600 font-light">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}