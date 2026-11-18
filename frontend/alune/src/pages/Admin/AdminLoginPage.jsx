import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Lock, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Frontend mock navigation; real authentication will be bound with Laravel Sanctum/JWT later
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white border border-[#DEDCD5] rounded-2xl p-8 sm:p-10 space-y-8 shadow-sm">
        
        <div className="text-center space-y-3">
          <img
            src="/ALUNE-LOGO/website-header/ALUNE-header.svg"
            alt="ALUNE"
            className="h-8 mx-auto object-contain"
          />
          <h1 className="text-xl font-medium text-[#14333A]">
            {t('admin.loginTitle')}
          </h1>
          <p className="text-xs text-[#757575]">
            {t('admin.loginSubtitle')}
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
              {t('admin.username')}
            </label>
            <input
              type="text"
              required
              placeholder="admin"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] text-sm text-[#212121] focus:outline-none focus:border-[#14333A]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#14333A] uppercase tracking-wider">
              {t('admin.password')}
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#DEDCD5] text-sm text-[#212121] focus:outline-none focus:border-[#14333A]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#14333A] text-[#F7F5F0] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1C424A] transition-colors"
          >
            <Lock className="w-4 h-4 text-[#B2A77E]" />
            <span>{t('admin.signIn')}</span>
          </button>
        </form>

        <div className="pt-4 border-t border-[#DEDCD5] text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-[#757575] hover:text-[#14333A]">
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span>Return to Boutique</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
