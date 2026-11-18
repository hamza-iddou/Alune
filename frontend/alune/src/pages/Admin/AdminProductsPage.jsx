import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export default function AdminProductsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-medium text-[#14333A]">{t('admin.products')}</h1>
          <p className="text-xs text-[#757575]">Overview of sunglasses editions in the system</p>
        </div>
        <button
          type="button"
          onClick={() => alert('Add Product modal ready for Laravel API integration.')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold hover:bg-[#1C424A] transition-colors"
        >
          <Plus className="w-4 h-4 text-[#B2A77E]" />
          <span>New Edition</span>
        </button>
      </div>

      <div className="bg-white border border-[#DEDCD5] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="bg-[#F7F5F0] text-[#757575] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-6 text-start">Image</th>
                <th className="py-3 px-6 text-start">Edition Name</th>
                <th className="py-3 px-6 text-start">ID</th>
                <th className="py-3 px-6 text-start">Category</th>
                <th className="py-3 px-6 text-start">Availability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEDCD5]/60 text-[#212121]">
              {PRODUCTS.map((p) => (
                <tr key={p.id} className="hover:bg-[#F7F5F0]/50 transition-colors">
                  <td className="py-3 px-6">
                    <img src={p.image} alt="" className="w-10 h-10 object-contain rounded bg-[#EEECE7]" />
                  </td>
                  <td className="py-3 px-6 font-medium text-[#14333A]">{p.code}</td>
                  <td className="py-3 px-6 text-[#757575]">{p.id}</td>
                  <td className="py-3 px-6">{p.category}</td>
                  <td className="py-3 px-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#14333A]/10 text-[#14333A]">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
