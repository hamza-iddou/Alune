import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, MessageCircle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { getProductBySlug, PRODUCTS } from '../../data/products';
import { useFavoritesStore } from '../../store/favoritesStore';
import { generateWhatsAppLink } from '../../utils/constants';
import ProductGrid from '../../components/products/ProductGrid';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'fr';

  const product = getProductBySlug(slug);
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const favorite = isFavorite(product.id);

  const categoryName = currentLang === 'ar' 
    ? product.categoryAr 
    : (currentLang === 'fr' ? product.categoryFr : product.category);

  const priceText = currentLang === 'ar'
    ? product.priceDisplayAr
    : (currentLang === 'fr' ? product.priceDisplayFr : product.priceDisplay);

  const description = currentLang === 'ar'
    ? product.descriptionAr
    : (currentLang === 'fr' ? product.descriptionFr : product.descriptionEn);

  const waLink = generateWhatsAppLink({
    productName: product.code,
    productId: product.id,
    productUrl: window.location.href,
  });

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto w-full space-y-12 sm:space-y-16 lg:space-y-20">
      
      {/* Breadcrumb */}
      <nav className="text-xs text-[#757575] flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#14333A]">{t('nav.home')}</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[#14333A]">{t('nav.shop')}</Link>
        <span>/</span>
        <span className="text-[#14333A] font-medium">{product.code}</span>
      </nav>

      {/* Main Product Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        
        {/* Gallery / Image Area (Col 7) */}
        <div className="lg:col-span-7 space-y-4 w-full">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#DEDCD5] p-6 sm:p-10 flex items-center justify-center w-full">
            <img
              src={product.image}
              alt={product.code}
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              className={`absolute top-4 end-4 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                favorite
                  ? 'bg-[#14333A] text-white shadow-lg'
                  : 'bg-[#EEECE7] text-[#14333A] hover:bg-white shadow'
              }`}
              aria-label={favorite ? t('product.removedFromWishlist') : t('product.addedToWishlist')}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Product Information & Concierge Action (Col 5) */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:ps-4 w-full">
          
          <div className="space-y-2 sm:space-y-3 pb-6 border-b border-[#DEDCD5]">
            <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
              {categoryName}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#14333A]">
              {product.code}
            </h1>
            <p className="text-sm font-semibold text-[#14333A] pt-1">
              {priceText}
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#757575] leading-relaxed">
            <p>{description}</p>
          </div>

          {/* Action Area */}
          <div className="space-y-3 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 sm:px-8 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 sm:gap-3 hover:bg-[#1C424A] transition-all shadow-md hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 text-[#B2A77E]" />
              <span>{t('product.inquire')}</span>
            </a>

            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              className="w-full py-3.5 px-6 sm:px-8 rounded-full border border-[#DEDCD5] text-[#14333A] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <Heart className={`w-4 h-4 ${favorite ? 'fill-[#14333A] text-[#14333A]' : ''}`} />
              <span>{favorite ? t('product.removedFromWishlist') : t('product.addedToWishlist')}</span>
            </button>
          </div>

          {/* Meta Specifications */}
          <div className="pt-4 border-t border-[#DEDCD5] space-y-2 text-xs text-[#757575]">
            <div className="flex justify-between py-1.5 border-b border-[#DEDCD5]/40">
              <span>{t('product.reference')}</span>
              <span className="font-medium text-[#14333A]">{product.id}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#DEDCD5]/40">
              <span>{t('product.status')}</span>
              <span className="font-medium text-[#14333A]">{product.status}</span>
            </div>
          </div>

          {/* Maison Guarantees */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 text-[11px] sm:text-xs text-[#757575]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#14333A] shrink-0" />
              <span>Original Craft</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-1.5">
              <Sparkles className="w-4 h-4 text-[#14333A] shrink-0" />
              <span>Concierge Care</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-1.5">
              <RefreshCw className="w-4 h-4 text-[#14333A] shrink-0" />
              <span>WhatsApp</span>
            </div>
          </div>

        </div>

      </div>

      {/* Complementary Editions Section */}
      <section className="pt-12 sm:pt-16 border-t border-[#DEDCD5] space-y-8">
        <h2 className="text-xl sm:text-2xl font-medium text-[#14333A]">
          {t('product.related')}
        </h2>
        <ProductGrid products={relatedProducts} />
      </section>

    </div>
  );
}
