import { useTranslation } from 'react-i18next';
import { Glasses, MessageSquare, Tag, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export default function AdminDashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Notice Banner */}
      <div className="p-4 rounded-xl bg-[#B2A77E]/15 border border-[#B2A77E]/40 flex items-start gap-3 text-xs text-[#14333A]">
        <AlertCircle className="w-4 h-4 shrink-0 text-[#14333A] mt-0.5" />
        <p>{t('admin.notice')}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="bg-white border border-[#DEDCD5] rounded-2xl p-6 space-y-2">
          <div className="flex items-center justify-between text-[#757575]">
            <span className="text-xs uppercase tracking-wider font-semibold">
              {t('admin.totalProducts')}
            </span>
            <Glasses className="w-4 h-4 text-[#14333A]" />
          </div>
          <p className="text-3xl font-medium text-[#14333A]">{PRODUCTS.length}</p>
        </div>

        <div className="bg-white border border-[#DEDCD5] rounded-2xl p-6 space-y-2">
          <div className="flex items-center justify-between text-[#757575]">
            <span className="text-xs uppercase tracking-wider font-semibold">
              {t('admin.totalInquiries')}
            </span>
            <MessageSquare className="w-4 h-4 text-[#14333A]" />
          </div>
          <p className="text-3xl font-medium text-[#14333A]">14</p>
        </div>

        <div className="bg-white border border-[#DEDCD5] rounded-2xl p-6 space-y-2">
          <div className="flex items-center justify-between text-[#757575]">
            <span className="text-xs uppercase tracking-wider font-semibold">
              {t('admin.activeCategories')}
            </span>
            <Tag className="w-4 h-4 text-[#14333A]" />
          </div>
          <p className="text-3xl font-medium text-[#14333A]">1</p>
        </div>

      </div>

      {/* Recent Catalog Overview Table */}
      <div className="bg-white border border-[#DEDCD5] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[#DEDCD5] flex items-center justify-between">
          <h2 className="text-base font-medium text-[#14333A]">
            Current Catalog Editions
          </h2>
          <span className="text-xs text-[#757575]">Local mock schema</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="bg-[#F7F5F0] text-[#757575] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-6 text-start">Code / ID</th>
                <th className="py-3 px-6 text-start">Category</th>
                <th className="py-3 px-6 text-start">Status</th>
                <th className="py-3 px-6 text-start">Pricing Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEDCD5]/60 text-[#212121]">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-[#F7F5F0]/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-[#14333A] flex items-center gap-3">
                    <img src={product.image} alt="" className="w-8 h-8 rounded object-contain bg-[#EEECE7]" />
                    <span>{product.code}</span>
                  </td>
                  <td className="py-4 px-6">{product.category}</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#14333A]/10 text-[#14333A]">
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">{product.priceDisplay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
