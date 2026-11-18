import { useTranslation } from 'react-i18next';
import { MessageSquare } from 'lucide-react';

export default function AdminOrdersPage() {
  const { t } = useTranslation();

  const mockInquiries = [
    { id: 'INQ-101', date: '2026-11-17', client: 'Private Client', model: 'ALUNE — Edition 01', channel: 'WhatsApp', status: 'Inquiry Received' },
    { id: 'INQ-102', date: '2026-11-16', client: 'Private Client', model: 'ALUNE — Edition 03', channel: 'WhatsApp', status: 'Consultation Complete' },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-xl font-medium text-[#14333A]">{t('admin.orders')}</h1>
        <p className="text-xs text-[#757575]">WhatsApp Concierge inquiries & direct client interactions</p>
      </div>

      <div className="bg-white border border-[#DEDCD5] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="bg-[#F7F5F0] text-[#757575] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-6 text-start">Inquiry ID</th>
                <th className="py-3 px-6 text-start">Date</th>
                <th className="py-3 px-6 text-start">Model Queried</th>
                <th className="py-3 px-6 text-start">Channel</th>
                <th className="py-3 px-6 text-start">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEDCD5]/60 text-[#212121]">
              {mockInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-[#F7F5F0]/50 transition-colors">
                  <td className="py-3 px-6 font-medium text-[#14333A]">{inq.id}</td>
                  <td className="py-3 px-6 text-[#757575]">{inq.date}</td>
                  <td className="py-3 px-6">{inq.model}</td>
                  <td className="py-3 px-6 flex items-center gap-1 text-[#14333A]">
                    <MessageSquare className="w-3.5 h-3.5 text-[#B2A77E]" />
                    <span>{inq.channel}</span>
                  </td>
                  <td className="py-3 px-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#EEECE7] text-[#14333A]">
                      {inq.status}
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
