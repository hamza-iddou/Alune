import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductGrid from '../../components/products/ProductGrid';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const HERO_SLIDES = [
  {
    image: '/Sections-IMG/S-1.jpeg',
    alt: 'ALUNE Mediterranean Campaign',
  },
  {
    image: '/Sections-IMG/S-2.jpg',
    alt: 'ALUNE Craftsmanship and Details',
  },
  {
    image: '/Sections-IMG/S-3.jpeg',
    alt: 'ALUNE Lifestyle and Design',
  },
];

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar');

  const [currentSlide, setCurrentSlide] = useState(0);

  const [productsRef, productsVisible] = useScrollReveal();
  const [craftRef, craftVisible] = useScrollReveal();
  const [philosophyRef, philosophyVisible] = useScrollReveal();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-24">
      
      {/* 1. HERO SECTION WITH CAROUSEL */}
      <section className="pt-4 sm:pt-8 lg:pt-12 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#14333A] min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col justify-end p-6 sm:p-12 lg:p-20 border border-[#DEDCD5]/80 group">
          
          {/* Slides */}
          <div className="absolute inset-0 z-0">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.88]"
                />
              </div>
            ))}
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14333A]/95 via-[#14333A]/50 to-transparent z-10" />
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={isRtl ? nextSlide : prevSlide}
            aria-label="Previous slide"
            className="absolute start-4 sm:start-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={isRtl ? prevSlide : nextSlide}
            aria-label="Next slide"
            className="absolute end-4 sm:end-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>

          {/* Hero Content */}
          <div className="relative z-20 max-w-2xl text-[#F7F5F0] space-y-4 sm:space-y-5 animate-hero-entrance">
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

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 end-6 sm:end-12 z-20 flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-[#B2A77E]' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 2. CURATED PRODUCT SHOWCASE */}
      <section
        ref={productsRef}
        className={`px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full space-y-8 sm:space-y-12 reveal-init ${
          productsVisible ? 'reveal-visible' : ''
        }`}
      >
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
      <section
        ref={craftRef}
        className={`px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full reveal-init ${
          craftVisible ? 'reveal-visible' : ''
        }`}
      >
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
      <section
        ref={philosophyRef}
        className={`px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full reveal-init ${
          philosophyVisible ? 'reveal-visible' : ''
        }`}
      >
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
