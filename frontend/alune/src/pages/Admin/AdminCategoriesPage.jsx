import { useTranslation } from 'react-i18next';
import { Tag } from 'lucide-react';

export default function AdminCategoriesPage() {
  const { t } = useTranslation();

  const categories = [
    { id: 1, name: 'Sunglasses', nameFr: 'Lunettes de soleil', nameAr: 'نظارات شمسية', count: 4 },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl font-medium text-[#14333A]">{t('admin.categories')}</h1>
        <p className="text-xs text-[#757575]">Product catalog taxonomy</p>
      </div>

      <div className="bg-white border border-[#DEDCD5] rounded-2xl p-6 space-y-4">
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between p-4 rounded-xl bg-[#F7F5F0] border border-[#DEDCD5]/60">
            <div className="flex items-center gap-3">
              <Tag className="w-4 h-4 text-[#14333A]" />
              <div>
                <p className="text-sm font-medium text-[#14333A]">{cat.name}</p>
                <p className="text-xs text-[#757575]">{cat.nameFr} • {cat.nameAr}</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-[#DEDCD5]">
              {cat.count} Editions
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
