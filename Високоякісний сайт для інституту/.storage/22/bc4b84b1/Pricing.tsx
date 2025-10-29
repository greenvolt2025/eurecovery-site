import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Прозорі <span className="font-semibold">ціни</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 border border-gray-200 hover:border-blue-600 transition-all duration-300 bg-white">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Консультація</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light text-gray-900">
                  100 <span className="text-2xl text-gray-500">€</span>
                </p>
                <p className="text-gray-500 font-light">за сесію</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Аналіз вашого проекту</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Експертні рекомендації</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Оцінка можливостей</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Письмовий звіт</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl transition-all duration-300"
              >
                Замовити консультацію
              </Button>
            </div>
          </Card>

          <Card className="p-8 border-2 border-blue-600 transition-all duration-300 bg-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
              Популярно
            </div>
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Реалізація проекту</h3>
              <div className="space-y-2">
                <p className="text-5xl font-light text-gray-900">
                  від 5000 <span className="text-2xl text-gray-500">€</span>
                </p>
                <p className="text-gray-500 font-light">залежно від складності</p>
              </div>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Повний цикл розробки</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Доступ до квантових платформ</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Тестування та оптимізація</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Детальна документація</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Навчання команди</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-600 font-light">Постпроектна підтримка</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl transition-all duration-300"
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