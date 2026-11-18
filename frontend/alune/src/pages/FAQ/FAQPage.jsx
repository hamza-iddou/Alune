import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  return (
    <div className="py-12 sm:py-20 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto space-y-16">
      
      {/* Title */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
          Guidance & Care
        </span>
        <h1 className="text-3xl sm:text-5xl font-medium text-[#14333A]">
          {t('faq.title')}
        </h1>
        <p className="text-sm sm:text-base text-[#757575] max-w-xl">
          {t('faq.subtitle')}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-[#DEDCD5] rounded-2xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-start"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-medium text-[#14333A] pe-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#14333A] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-[#757575] leading-relaxed border-t border-[#DEDCD5]/40 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
