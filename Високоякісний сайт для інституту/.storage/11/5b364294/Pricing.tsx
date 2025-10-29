import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Прозорі <span className="font-semibold">ціни</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="text-center space-y-6">
              <div className="inline-block p-4 bg-blue-50 rounded-2xl">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold">Консультація</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light">
                  100 <span className="text-2xl text-gray-500">€</span>
                </p>
                <p className="text-gray-500 font-light">за сесію</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-600 font-light">Аналіз вашого проекту</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-600 font-light">Експертні рекомендації</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-600 font-light">Оцінка можливостей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-gray-600 font-light">Письмовий звіт</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-full transition-all duration-300"
              >
                Замовити консультацію
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Популярно
            </div>
            <div className="text-center space-y-6 relative z-10">
              <div className="inline-block p-4 bg-white/20 rounded-2xl">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold">Реалізація проекту</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light">
                  від 5000 <span className="text-2xl opacity-90">€</span>
                </p>
                <p className="opacity-90 font-light">залежно від складності</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Повний цикл розробки</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Доступ до квантових платформ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Тестування та оптимізація</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Детальна документація</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Навчання команди</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span className="font-light">Постпроектна підтримка</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-6 rounded-full transition-all duration-300 font-semibold"
              >
                Обговорити проект
              </Button>
            </div>
          </Card>
        </div>

        <p className="text-center text-gray-500 font-light mt-12 max-w-2xl mx-auto">
          Індивідуальний підхід до кожного проекту. Фінальна вартість визначається після детального аналізу ваших потреб
        </p>
      </div>
    </section>
  );
}