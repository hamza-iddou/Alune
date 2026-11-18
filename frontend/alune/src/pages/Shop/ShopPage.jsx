import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import ProductGrid from '../../components/products/ProductGrid';

export default function ShopPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (filter === 'featured') {
      result = result.filter((p) => p.isFeatured);
    }

    if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [filter, sortBy]);

  return (
    <div className="py-12 sm:py-16 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="space-y-3 pb-8 border-b border-[#DEDCD5]">
        <span className="text-xs uppercase tracking-widest text-[#B2A77E] font-semibold">
          ALUNE Catalogue
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#14333A]">
          {t('shop.title')}
        </h1>
        <p className="text-sm sm:text-base text-[#757575] max-w-xl">
          {t('shop.subtitle')}
        </p>
      </div>

      {/* Control Bar: Filters & Sorters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              filter === 'all'
                ? 'bg-[#14333A] text-[#F7F5F0]'
                : 'bg-white text-[#212121] border border-[#DEDCD5] hover:bg-[#EEECE7]'
            }`}
          >
            {t('shop.filterAll')}
          </button>
          <button
            type="button"
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors ${
              filter === 'featured'
                ? 'bg-[#14333A] text-[#F7F5F0]'
                : 'bg-white text-[#212121] border border-[#DEDCD5] hover:bg-[#EEECE7]'
            }`}
          >
            {t('shop.filterFeatured')}
          </button>
        </div>

        {/* Sort Controls & Count */}
        <div className="flex items-center gap-4 text-xs text-[#757575]">
          <span>{filteredProducts.length} {t('shop.results')}</span>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#DEDCD5]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#14333A]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-medium text-[#14333A] focus:outline-none cursor-pointer"
            >
              <option value="default">{t('shop.sortDefault')}</option>
              <option value="newest">{t('shop.sortNewest')}</option>
            </select>
          </div>
        </div>

      </div>

      {/* Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="py-20 text-center space-y-4 bg-white rounded-2xl border border-[#DEDCD5] p-8">
          <p className="text-base text-[#757575]">{t('shop.empty')}</p>
        </div>
      )}

    </div>
  );
}
