import { useTranslation } from 'react-i18next';
import { Eye, Award, MessageCircle } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="py-12 sm:py-20 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-24">
      
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
          Maison & Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-medium text-[#14333A] leading-tight">
          {t('about.title')}
        </h1>
        <p className="text-base sm:text-lg text-[#757575] leading-relaxed">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Main Campaign Visual */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#EEECE7] border border-[#DEDCD5]">
        <img
          src="/Sections-IMG/S-1.jpeg"
          alt="ALUNE Mediterranean Vision"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Pillars of the House */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-[#DEDCD5]">
        
        <div className="space-y-4 p-8 bg-white rounded-2xl border border-[#DEDCD5]">
          <div className="w-10 h-10 rounded-full bg-[#EEECE7] flex items-center justify-center text-[#14333A]">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-medium text-[#14333A]">
            {t('about.pillar1Title')}
          </h3>
          <p className="text-sm text-[#757575] leading-relaxed">
            {t('about.pillar1Text')}
          </p>
        </div>

        <div className="space-y-4 p-8 bg-white rounded-2xl border border-[#DEDCD5]">
          <div className="w-10 h-10 rounded-full bg-[#EEECE7] flex items-center justify-center text-[#14333A]">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-medium text-[#14333A]">
            {t('about.pillar2Title')}
          </h3>
          <p className="text-sm text-[#757575] leading-relaxed">
            {t('about.pillar2Text')}
          </p>
        </div>

        <div className="space-y-4 p-8 bg-white rounded-2xl border border-[#DEDCD5]">
          <div className="w-10 h-10 rounded-full bg-[#EEECE7] flex items-center justify-center text-[#14333A]">
            <MessageCircle className="w-5 h-5 text-[#B2A77E]" />
          </div>
          <h3 className="text-lg font-medium text-[#14333A]">
            {t('about.pillar3Title')}
          </h3>
          <p className="text-sm text-[#757575] leading-relaxed">
            {t('about.pillar3Text')}
          </p>
        </div>

      </div>

      {/* Craftsmanship Focus with S-2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#14333A] text-[#F7F5F0] rounded-2xl p-8 sm:p-14 overflow-hidden">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
            Sculptural Precision
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium leading-snug">
            Proportions designed to frame the gaze with unyielding poise.
          </h2>
          <p className="text-sm text-[#F7F5F0]/80 leading-relaxed">
            Every ALUNE silhouette is studied under Mediterranean light to achieve equilibrium between frame mass, temple angle, and ocular comfort.
          </p>
        </div>
        <div className="lg:col-span-6 aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
          <img
            src="/Sections-IMG/S-2.jpg"
            alt="Optical Balance"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}
