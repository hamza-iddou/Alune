import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../../utils/constants';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#14333A] text-[#F7F5F0] pt-20 pb-12 border-t border-[#1C424A]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Top Section: Brand Statement & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#1C424A]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block" aria-label="ALUNE Home">
              <img
                src="/ALUNE-LOGO/website-footer/ALUNE-footer-light-background.svg"
                alt="ALUNE Eyewear"
                className="h-8 w-auto brightness-200"
              />
            </Link>
            <p className="text-sm text-[#F7F5F0]/70 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#B2A77E]/40 text-xs font-semibold tracking-wider text-[#F7F5F0] hover:bg-[#B2A77E]/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#B2A77E]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F5F0]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">{t('nav.shop')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-white transition-colors">{t('nav.favorites')}</Link>
              </li>
            </ul>
          </div>

          {/* Client Care Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              {t('footer.clientCare')}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F5F0]/80">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">{t('nav.faq')}</Link>
              </li>
              <li className="pt-2">
                <Link to="/admin/login" className="text-xs text-[#F7F5F0]/40 hover:text-[#B2A77E] transition-colors">
                  {t('nav.admin')}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Monogram Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5F0]/50">
          <p>{t('footer.legal')}</p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-[#F7F5F0] transition-colors">
              {t('footer.terms')}
            </Link>
            <img
              src="/ALUNE-LOGO/monogram/ALUNE-monogram-white.svg"
              alt=""
              className="w-5 h-5 opacity-40"
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
