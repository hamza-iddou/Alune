import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trash2, MessageCircle } from 'lucide-react';
import { useFavoritesStore } from '../../store/favoritesStore';
import { PRODUCTS } from '../../data/products';
import { APP_CONFIG } from '../../utils/constants';
import ProductGrid from '../../components/products/ProductGrid';

export default function FavoritesPage() {
  const { t } = useTranslation();
  const { favoriteIds, clearFavorites } = useFavoritesStore();

  const favoriteProducts = PRODUCTS.filter((p) => favoriteIds.includes(p.id));

  // WhatsApp concierge bulk inquiry link
  const createBulkInquiryLink = () => {
    const listNames = favoriteProducts.map((p) => `• ${p.code} (${p.id})`).join('\n');
    const message = `Hello ALUNE,\n\nI have saved these eyewear pieces in my wishlist and would like to inquire about their availability:\n\n${listNames}\n\nPlease advise on ordering details.`;
    return `https://wa.me/${APP_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-12 sm:py-16 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#DEDCD5]">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
            Private Wishlist
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium text-[#14333A]">
            {t('favorites.title')}
          </h1>
          <p className="text-sm text-[#757575] max-w-lg">
            {t('favorites.subtitle')}
          </p>
        </div>

        {favoriteProducts.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearFavorites}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#DEDCD5] text-xs font-semibold text-[#757575] hover:text-[#B42318] hover:border-[#B42318] transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t('favorites.clear')}</span>
            </button>
            <a
              href={createBulkInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B2A77E]" />
              <span>{t('favorites.inquireAll')}</span>
            </a>
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      {favoriteProducts.length > 0 ? (
        <ProductGrid products={favoriteProducts} />
      ) : (
        <div className="py-24 text-center space-y-6 bg-white rounded-2xl border border-[#DEDCD5] p-8 max-w-xl mx-auto">
          <img
            src="/ALUNE-LOGO/monogram/ALUNE-monogram-primary.svg"
            alt=""
            className="w-12 h-12 mx-auto opacity-30"
            aria-hidden="true"
          />
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-[#14333A]">
              {t('favorites.empty')}
            </h3>
            <p className="text-xs text-[#757575]">
              {t('favorites.subtitle')}
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
          >
            {t('favorites.emptyAction')}
          </Link>
        </div>
      )}

    </div>
  );
}
