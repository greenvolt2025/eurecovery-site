import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Зв'яжіться <span className="font-semibold">з нами</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6">
            Готові розпочати ваш квантовий проект? Напишіть нам, і ми відповімо протягом 24 годин
          </p>
        </div>

        <Card className="p-8 md:p-12 border-0 shadow-xl bg-white">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:eurecoveryeu@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-light text-lg transition-colors"
                >
                  eurecoveryeu@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 rounded-xl">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Що написати?</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Опис вашого проекту або ідеї</li>
                  <li>• Очікувані результати</li>
                  <li>• Терміни реалізації</li>
                  <li>• Бюджет (орієнтовний)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-50 rounded-xl">
                <FileText className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Що ви отримаєте?</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Швидку відповідь від експертів</li>
                  <li>• Попередню оцінку проекту</li>
                  <li>• Рекомендації щодо реалізації</li>
                  <li>• Комерційну пропозицію</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="mailto:eurecoveryeu@gmail.com">
                  Написати нам
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-light">
            Приватна наукова установа<br />
            "Міжнародний інститут розвитку та відновлення України"
          </p>
        </div>
      </div>
    </section>
  );
}