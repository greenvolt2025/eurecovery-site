import { Card } from '@/components/ui/card';

export default function Partners() {
  const partners = [
    {
      name: 'IBM Quantum',
      description: 'Лідер у розробці квантових комп\'ютерів та хмарних квантових сервісів',
      logo: '🔷',
      specialization: 'Квантові процесори та IBM Quantum Network',
    },
    {
      name: 'Google Quantum AI',
      description: 'Дослідження квантового верховенства та розробка квантових алгоритмів',
      logo: '🔶',
      specialization: 'Sycamore процесор та квантові симулятори',
    },
    {
      name: 'Microsoft Azure Quantum',
      description: 'Хмарна платформа для квантових обчислень та гібридних рішень',
      logo: '🔹',
      specialization: 'Квантова хмара та Q# мова програмування',
    },
    {
      name: 'IonQ',
      description: 'Іонні пастки та високоточні квантові обчислення',
      logo: '⚛️',
      specialization: 'Trapped-ion квантові системи',
    },
    {
      name: 'Rigetti Computing',
      description: 'Суперпровідні квантові процесори та квантові сервіси',
      logo: '🔸',
      specialization: 'Квантові чіпи та Forest SDK',
    },
    {
      name: 'D-Wave Systems',
      description: 'Квантовий відпал та оптимізаційні задачі',
      logo: '💠',
      specialization: 'Quantum annealing технології',
    },
  ];

  return (
    <section id="partners" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Наші <span className="font-semibold">партнери</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6">
            Ми співпрацюємо з провідними світовими компаніями, що володіють квантовими комп'ютерами 
            та спеціалізуються на квантових обчисленнях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 font-light mb-3 leading-relaxed">
                {partner.description}
              </p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">
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