import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductGrid from '../../components/products/ProductGrid';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar');

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-4 sm:pt-8 lg:pt-12 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EEECE7] min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col justify-end p-6 sm:p-12 lg:p-20 border border-[#DEDCD5]/80">
          
          {/* Background image using S-1 */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Sections-IMG/S-1.jpeg"
              alt="ALUNE Luxury Eyewear Campaign"
              className="w-full h-full object-cover object-center filter brightness-[0.90]"
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14333A]/95 via-[#14333A]/50 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl text-[#F7F5F0] space-y-4 sm:space-y-5">
            <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-[#B2A77E]">
              {t('hero.subtitle')}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] tracking-tight text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-[#F7F5F0]/85 font-normal leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#F7F5F0] text-[#14333A] text-xs sm:text-sm font-semibold tracking-wide hover:bg-white transition-all shadow-lg hover:scale-[1.01]"
              >
                <span>{t('hero.cta')}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full border border-[#F7F5F0]/40 text-[#F7F5F0] text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <span>{t('hero.secondary')}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CURATED PRODUCT SHOWCASE */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full space-y-8 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DEDCD5]">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              ALUNE Editions
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#14333A]">
              {t('sections.collectionTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-[#757575] max-w-lg">
              {t('sections.collectionSubtitle')}
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14333A] hover:text-[#1C424A] transition-colors group shrink-0"
          >
            <span>{t('sections.viewAll')}</span>
            <span className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              {isRtl ? '←' : '→'}
            </span>
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>

      {/* 3. EDITORIAL SECTION S-2: CRAFTSMANSHIP & DETAILS */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-white border border-[#DEDCD5] rounded-2xl overflow-hidden p-6 sm:p-10 lg:p-14">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              Savoir-Faire
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium text-[#14333A] leading-tight text-balance">
              {t('sections.editorial2Title')}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#757575] leading-relaxed">
              {t('sections.editorial2Subtitle')}
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
              >
                <span>{t('sections.discoverMaison')}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-xl overflow-hidden bg-[#EEECE7] order-1 lg:order-2 w-full">
            <img
              src="/Sections-IMG/S-2.jpg"
              alt="ALUNE Craftsmanship Detail"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 4. EDITORIAL SECTION S-3: MEDITERRANEAN AMBIANCE */}
      <section className="px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#14333A] text-[#F7F5F0] min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center p-6 sm:p-12 lg:p-16">
          <div className="absolute inset-0 z-0">
            <img
              src="/Sections-IMG/S-3.jpeg"
              alt="ALUNE Lifestyle"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14333A] via-[#14333A]/85 to-transparent rtl:bg-gradient-to-l" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4 sm:space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              The Philosophy
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium leading-tight text-balance">
              {t('sections.editorial3Title')}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#F7F5F0]/80 leading-relaxed">
              {t('sections.editorial3Subtitle')}
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B2A77E] text-[#14333A] text-xs font-semibold hover:bg-white transition-colors"
              >
                <span>{t('sections.inquireConcierge')}</span>
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
