import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === (i18n.language?.substring(0, 2) || 'fr')) || LANGUAGES[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#14333A] hover:bg-[#EEECE7] transition-colors border border-[#DEDCD5]/70"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 opacity-80" />
        <span>{currentLang.short}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute end-0 mt-2 w-36 rounded-xl bg-white border border-[#DEDCD5] shadow-lg py-1.5 z-50">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-start transition-colors ${
                  lang.code === currentLang.code
                    ? 'text-[#14333A] bg-[#EEECE7]/70 font-semibold'
                    : 'text-[#212121] hover:bg-[#F7F5F0]'
                }`}
              >
                <span>{lang.label}</span>
                {lang.code === currentLang.code && (
                  <Check className="w-3.5 h-3.5 text-[#14333A]" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
