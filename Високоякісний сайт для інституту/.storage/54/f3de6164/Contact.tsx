import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 bg-[#0A0E27]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
            Зв'яжіться <span className="font-semibold bg-gradient-to-r from-[#00D4FF] to-[#4DFFFF] bg-clip-text text-transparent">з нами</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#00D4FF] mx-auto glow-cyan"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mt-6">
            Готові розпочати ваш квантовий проект? Напишіть нам, і ми відповімо протягом 24 годин
          </p>
        </div>

        <Card className="p-8 md:p-12 border border-[#1a1d35] bg-[#1a1d35]/30 backdrop-blur-sm">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D4FF]/10 rounded-xl flex-shrink-0 border border-[#00D4FF]/30">
                <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <a
                  href="mailto:eurecoveryeu@gmail.com"
                  className="text-[#00D4FF] hover:text-[#4DFFFF] font-light text-lg transition-colors"
                >
                  eurecoveryeu@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D4FF]/10 rounded-xl flex-shrink-0 border border-[#00D4FF]/30">
                <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Що написати?</h3>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Опис вашого проекту або ідеї</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Очікувані результати</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Терміни реалізації</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Бюджет (орієнтовний)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00D4FF]/10 rounded-xl flex-shrink-0 border border-[#00D4FF]/30">
                <svg className="w-6 h-6 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Що ви отримаєте?</h3>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Швидку відповідь від експертів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Попередню оцінку проекту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Рекомендації щодо реалізації</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full flex-shrink-0 mt-2 glow-cyan"></div>
                    <span>Комерційну пропозицію</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="w-full bg-[#00D4FF] hover:bg-[#4DFFFF] text-[#0A0E27] py-6 text-lg rounded-xl transition-all duration-300 glow-cyan font-semibold"
              >
                <a href="mailto:eurecoveryeu@gmail.com">
                  Написати нам
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-light">
            Приватна наукова установа<br />
            "Міжнародний інститут розвитку та відновлення України"
          </p>
        </div>
      </div>
    </section>
  );
}