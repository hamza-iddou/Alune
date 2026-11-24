import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Menu, X } from 'lucide-react';
import { useFavoritesStore } from '../../store/favoritesStore';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(location.pathname);
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);

  // Close mobile drawer when path changes during render
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/shop', label: t('nav.shop') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/faq', label: t('nav.faq') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#DEDCD5]/60 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Mobile trigger & Primary Nav Links on Desktop */}
        <div className="flex-1 flex items-center justify-start gap-8">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#14333A] hover:bg-[#EEECE7] rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#14333A] font-semibold'
                    : 'text-[#212121] hover:text-[#14333A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <div className="shrink-0 flex justify-center py-1">
          <Link to="/" className="inline-block transition-transform hover:scale-[1.02]" aria-label="ALUNE Home">
            <img
              src="/ALUNE-LOGO/website-header/ALUNE-header.svg"
              alt="ALUNE Eyewear"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right: Secondary Links & Actions */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-7 me-2">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#14333A] font-semibold'
                    : 'text-[#212121] hover:text-[#14333A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Wishlist Link */}
          <Link
            to="/favorites"
            className="relative p-2 text-[#14333A] hover:bg-[#EEECE7] rounded-full transition-colors"
            aria-label={t('nav.favorites')}
          >
            <Heart className="w-5 h-5" />
            {favoriteIds.length > 0 && (
              <span className="absolute top-1 end-1 w-4 h-4 rounded-full bg-[#14333A] text-[#F7F5F0] text-[10px] font-bold flex items-center justify-center">
                {favoriteIds.length}
              </span>
            )}
          </Link>

          {/* Language Selector */}
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DEDCD5] bg-[#F7F5F0] px-6 py-8 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium py-2 border-b border-[#DEDCD5]/40 transition-colors ${
                  location.pathname === link.to ? 'text-[#14333A] font-semibold' : 'text-[#212121]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/favorites"
              className="flex items-center justify-between text-base font-medium py-2 border-b border-[#DEDCD5]/40 text-[#212121]"
            >
              <span>{t('nav.favorites')}</span>
              <span className="w-5 h-5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-bold flex items-center justify-center">
                {favoriteIds.length}
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
