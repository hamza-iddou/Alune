import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useFavoritesStore } from '../../store/favoritesStore';
import { generateWhatsAppLink } from '../../utils/constants';

export default function ProductCard({ product }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'fr';
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const favorite = isFavorite(product.id);

  // Localized title & category
  const categoryName = currentLang === 'ar' 
    ? product.categoryAr 
    : (currentLang === 'fr' ? product.categoryFr : product.category);

  const priceText = currentLang === 'ar'
    ? product.priceDisplayAr
    : (currentLang === 'fr' ? product.priceDisplayFr : product.priceDisplay);

  const waLink = generateWhatsAppLink({
    productName: product.code,
    productId: product.id,
    productUrl: `${window.location.origin}/product/${product.slug}`,
  });

  return (
    <div className="group relative bg-white border border-[#DEDCD5] rounded-xl overflow-hidden flex flex-col justify-between w-full min-w-0 transition-all duration-300 hover:shadow-[0_12px_24px_-6px_rgba(20,51,58,0.06)] hover:border-[#B2A77E]/50">
      
      {/* Product Image Stage (4:5 Aspect Ratio) */}
      <div className="relative aspect-[4/5] bg-[#EEECE7]/40 p-5 sm:p-6 flex items-center justify-center overflow-hidden">
        <Link to={`/product/${product.slug}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.code}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 start-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#14333A] text-[#F7F5F0]">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          className={`absolute top-3 end-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            favorite
              ? 'bg-[#14333A] text-white shadow-md'
              : 'bg-white/80 text-[#14333A] hover:bg-white hover:shadow-md'
          }`}
          aria-label={favorite ? t('product.removedFromWishlist') : t('product.addedToWishlist')}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Meta & Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4 min-w-0">
        <div className="min-w-0">
          <span className="text-[11px] uppercase tracking-widest text-[#757575] font-medium block truncate">
            {categoryName}
          </span>
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="text-sm sm:text-base font-medium text-[#14333A] hover:text-[#1C424A] transition-colors mt-1 truncate">
              {product.code}
            </h3>
          </Link>
          <p className="text-xs text-[#757575] mt-1.5 line-clamp-2 leading-relaxed">
            {currentLang === 'ar' ? product.descriptionAr : (currentLang === 'fr' ? product.descriptionFr : product.descriptionEn)}
          </p>
        </div>

        <div className="pt-3 border-t border-[#DEDCD5]/60 flex items-center justify-between gap-2 min-w-0">
          <span className="text-xs font-medium text-[#14333A] truncate">
            {priceText}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            <Link
              to={`/product/${product.slug}`}
              className="p-1.5 rounded-full text-[#14333A] hover:bg-[#EEECE7] transition-colors"
              title="View details"
              aria-label={`View details of ${product.code}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
              aria-label={`Inquire about ${product.code} via WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B2A77E]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
