import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../../utils/constants';

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only confirmation until Laravel backend is linked
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-16">
      
      {/* Title */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
          Client Care
        </span>
        <h1 className="text-3xl sm:text-5xl font-medium text-[#14333A]">
          {t('contact.title')}
        </h1>
        <p className="text-sm sm:text-base text-[#757575] leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* WhatsApp Concierge Card (Primary Channel) */}
        <div className="lg:col-span-5 bg-white border border-[#DEDCD5] rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#14333A] flex items-center justify-center text-[#B2A77E]">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-medium text-[#14333A]">
              {t('contact.whatsappTitle')}
            </h2>
            <p className="text-sm text-[#757575] leading-relaxed">
              {t('contact.whatsappDesc')}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#14333A] text-[#F7F5F0] text-sm font-semibold hover:bg-[#1C424A] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#B2A77E]" />
              <span>{t('contact.openWhatsApp')}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#DEDCD5]/60 text-xs text-[#757575] space-y-1">
            <p className="font-medium text-[#14333A]">Available Hours</p>
            <p>Monday – Saturday: 09:00 – 19:00 (GMT+1)</p>
          </div>
        </div>

        {/* Written Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-[#DEDCD5] rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl font-medium text-[#14333A] mb-6">
            {t('contact.formTitle')}
          </h2>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-[#EEECE7]/40 rounded-xl border border-[#DEDCD5]">
              <CheckCircle2 className="w-10 h-10 text-[#14333A] mx-auto" />
              <p className="text-sm font-medium text-[#14333A]">
                {t('contact.sentSuccess')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0]/60 text-sm text-[#212121] focus:bg-white focus:outline-none focus:border-[#14333A] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0]/60 text-sm text-[#212121] focus:bg-white focus:outline-none focus:border-[#14333A] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0]/60 text-sm text-[#212121] focus:bg-white focus:outline-none focus:border-[#14333A] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
                  {t('contact.message')}
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0]/60 text-sm text-[#212121] focus:bg-white focus:outline-none focus:border-[#14333A] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t('contact.submit')}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
