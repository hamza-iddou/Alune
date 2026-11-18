import { useTranslation } from 'react-i18next';
import { APP_CONFIG } from '../../utils/constants';

export default function AdminSettingsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl font-medium text-[#14333A]">{t('admin.settings')}</h1>
        <p className="text-xs text-[#757575]">Concierge & Storefront parameters</p>
      </div>

      <div className="bg-white border border-[#DEDCD5] rounded-2xl p-6 space-y-6">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
            Brand Name
          </label>
          <input
            type="text"
            readOnly
            value={APP_CONFIG.brandName}
            className="w-full px-4 py-2.5 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0] text-sm text-[#757575]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
            WhatsApp Concierge Number
          </label>
          <input
            type="text"
            readOnly
            value={APP_CONFIG.whatsappNumber}
            className="w-full px-4 py-2.5 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0] text-sm text-[#757575]"
          />
          <p className="text-[11px] text-[#757575]">Configured in src/utils/constants.js</p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
            Concierge Email
          </label>
          <input
            type="text"
            readOnly
            value={APP_CONFIG.supportEmail}
            className="w-full px-4 py-2.5 rounded-xl border border-[#DEDCD5] bg-[#F7F5F0] text-sm text-[#757575]"
          />
        </div>
      </div>
    </div>
  );
}
