'use client';

import React, { useState } from 'react';
import { X, User, Lock, Eye, EyeOff, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage({ type: 'success', text: data.message || 'تم تسجيل الحساب بنجاح! يمكنك الآن الدخول للعبة.' });
        setAccount('');
        setPassword('');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setMessage({ type: 'error', text: data.error || 'حدث خطأ أثناء التسجيل.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'فشل الاتصال بسيرفر التسجيل، يرجى المحاولة لاحقاً.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#050811]/85 backdrop-blur-md transition-all overflow-y-auto"
    >

      {/* Glass Modal Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md p-5 sm:p-8 rounded-3xl bg-[#0e1424] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] text-right overflow-hidden max-h-[92vh] overflow-y-auto"
      >

        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-orange-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:top-5 sm:left-5 p-1.5 rounded-full bg-[#141d33] border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 pt-2">
          <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            إنشاء حساب جديد في <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-400">Equinox VS</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-bold flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>تسجيل فوري ودخول مباشر لعالم اللعبة</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Account Input */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 sm:mb-2">اسم الحساب (Account Name):</label>
            <div className="relative">
              <input
                type="text"
                required
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="من 3 إلى 24 حرف أو رقم"
                className="w-full px-4 py-3 sm:py-3.5 pr-11 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors font-medium"
              />
              <User className="w-5 h-5 text-slate-500 absolute top-3.5 right-3.5" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 sm:mb-2">كلمة المرور (Password):</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="w-full px-4 py-3 sm:py-3.5 pr-11 pl-11 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors font-medium"
              />
              <Lock className="w-5 h-5 text-slate-500 absolute top-3.5 right-3.5" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3.5 left-3.5 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Alert Message */}
          {message && (
            <div
              className={`p-3.5 rounded-xl text-xs font-bold flex items-center gap-2 ${
                message.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
              }`}
            >
              {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              <span>{message.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_25px_rgba(255,69,0,0.6)] text-white font-black text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>جاري إنشاء الحساب...</span>
              </>
            ) : (
              <span>إنشاء الحساب الآن</span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
