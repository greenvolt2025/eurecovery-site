export default function Stats() {
  const stats = [
    {
      number: '15+',
      label: 'Років досвіду',
      description: 'У квантових дослідженнях',
    },
    {
      number: '50+',
      label: 'Наукових публікацій',
      description: 'У провідних журналах',
    },
    {
      number: '25+',
      label: 'PhD та магістрів',
      description: 'У нашій команді',
    },
    {
      number: '100+',
      label: 'Успішних проектів',
      description: 'Реалізовано для клієнтів',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0E27] border-y border-[#1a1d35]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-xl bg-[#1a1d35]/30 border border-[#1a1d35] hover:border-[#00D4FF] transition-all duration-300 group"
            >
              <h3 className="text-5xl font-light bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent group-hover:glow-cyan-strong transition-all">
                {stat.number}
              </h3>
              <p className="text-xl font-semibold text-white">{stat.label}</p>
              <p className="text-sm text-gray-400 font-light">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}