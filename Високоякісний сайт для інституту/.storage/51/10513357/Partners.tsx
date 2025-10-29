import { Card } from '@/components/ui/card';

export default function Partners() {
  const partners = [
    {
      name: 'IBM Quantum',
      description: 'Лідер у розробці квантових комп\'ютерів та хмарних квантових сервісів',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      specialization: 'Квантові процесори та IBM Quantum Network',
    },
    {
      name: 'Google Quantum AI',
      description: 'Дослідження квантового верховенства та розробка квантових алгоритмів',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      specialization: 'Sycamore процесор та квантові симулятори',
    },
    {
      name: 'Microsoft Azure Quantum',
      description: 'Хмарна платформа для квантових обчислень та гібридних рішень',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      specialization: 'Квантова хмара та Q# мова програмування',
    },
    {
      name: 'IonQ',
      description: 'Іонні пастки та високоточні квантові обчислення',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/IonQ_logo.svg',
      specialization: 'Trapped-ion квантові системи',
    },
    {
      name: 'Rigetti Computing',
      description: 'Суперпровідні квантові процесори та квантові сервіси',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Rigetti_Computing_logo.svg',
      specialization: 'Квантові чіпи та Forest SDK',
    },
    {
      name: 'D-Wave Systems',
      description: 'Квантовий відпал та оптимізаційні задачі',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/D-Wave_Systems_logo.svg',
      specialization: 'Quantum annealing технології',
    },
  ];

  return (
    <section id="partners" className="min-h-screen flex items-center py-24 px-6 bg-[#0A0E27]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Наші <span className="font-semibold bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent">партнери</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto glow-cyan"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mt-6">
            Ми співпрацюємо з провідними світовими компаніями, що володіють квантовими комп'ютерами 
            та спеціалізуються на квантових обчисленнях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-8 border border-[#1a1d35] hover:border-[#00D4FF] transition-all duration-300 bg-[#1a1d35]/30 backdrop-blur-sm group cursor-pointer"
            >
              <div className="h-16 mb-6 flex items-center justify-center bg-white rounded-lg p-3">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#00D4FF] transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-400 font-light mb-3 leading-relaxed">
                {partner.description}
              </p>
              <div className="pt-3 border-t border-[#1a1d35]">
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