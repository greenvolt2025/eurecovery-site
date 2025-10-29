import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className={`max-w-4xl mx-auto w-full ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            {t.contact.title} <span className="font-semibold gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto glow-blue"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto mt-6">
            {t.contact.description}
          </p>
        </div>

        <Card className="p-8 md:p-12 border border-gray-200 bg-white backdrop-blur-sm card-hover">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl flex-shrink-0 border border-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.contact.email}</h3>
                <a
                  href="mailto:eurecoveryeu@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-light text-lg transition-colors"
                >
                  eurecoveryeu@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl flex-shrink-0 border border-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.contact.whatToWrite}</h3>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.write1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.write2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.write3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.write4}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl flex-shrink-0 border border-blue-200">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{t.contact.whatYouGet}</h3>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.get1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.get2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.get3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2 glow-blue"></div>
                    <span>{t.contact.get4}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl transition-all duration-300 glow-blue font-semibold shadow-lg hover:shadow-xl"
              >
                <a href="mailto:eurecoveryeu@gmail.com">
                  {t.contact.writeUs}
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light">
            {t.contact.instituteName}
          </p>
        </div>
      </div>
    </section>
  );
}