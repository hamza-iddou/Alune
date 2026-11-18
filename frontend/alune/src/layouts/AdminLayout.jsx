import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Glasses, Tag, MessageSquare, Settings, ArrowLeft, Menu, X } from 'lucide-react';

export default function AdminLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { to: '/admin', label: t('admin.dashboard'), icon: LayoutDashboard },
    { to: '/admin/products', label: t('admin.products'), icon: Glasses },
    { to: '/admin/categories', label: t('admin.categories'), icon: Tag },
    { to: '/admin/orders', label: t('admin.orders'), icon: MessageSquare },
    { to: '/admin/settings', label: t('admin.settings'), icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F0EDE6] text-[#212121] flex flex-col md:flex-row w-full">
      
      {/* Mobile Top Header for Admin */}
      <div className="md:hidden bg-[#14333A] text-[#F7F5F0] p-4 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-2">
          <img
            src="/ALUNE-LOGO/website-header/ALUNE-header.svg"
            alt="ALUNE Admin"
            className="h-5 w-auto brightness-200"
          />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#B2A77E] px-1.5 py-0.5 rounded bg-[#1C424A]">
            Panel
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-1.5 rounded-lg text-white hover:bg-[#1C424A]"
          aria-label="Toggle admin menu"
        >
          {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar (Desktop permanent, Mobile collapsible) */}
      <aside
        className={`${
          mobileNavOpen ? 'block' : 'hidden'
        } md:flex w-full md:w-64 bg-[#14333A] text-[#F7F5F0] flex-col justify-between shrink-0 transition-all`}
      >
        <div>
          {/* Logo & Header */}
          <div className="hidden md:flex p-6 border-b border-[#1C424A] items-center justify-between">
            <Link to="/admin" className="block">
              <img
                src="/ALUNE-LOGO/website-header/ALUNE-header.svg"
                alt="ALUNE Admin"
                className="h-6 w-auto brightness-200"
              />
            </Link>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B2A77E] px-2 py-0.5 rounded bg-[#1C424A]">
              Panel
            </span>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#B2A77E] text-[#14333A]'
                      : 'text-[#F7F5F0]/70 hover:bg-[#1C424A] hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Back to Client Storefront */}
        <div className="p-4 border-t border-[#1C424A]">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs text-[#F7F5F0]/70 hover:text-white hover:bg-[#1C424A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>Storefront</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content Canvas */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0 w-full overflow-hidden">
        <header className="h-16 bg-white border-b border-[#DEDCD5] px-4 sm:px-8 flex items-center justify-between shrink-0">
          <span className="text-xs font-semibold text-[#14333A] uppercase tracking-wider truncate">
            {t('admin.portal')}
          </span>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-[#757575] hidden sm:inline">Administrator</span>
            <div className="w-7 h-7 rounded-full bg-[#14333A] text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-8 lg:p-10 flex-1 overflow-x-auto w-full">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
