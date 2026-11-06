'use client';

import React, { useState } from 'react';
import { X, User, Lock, Eye, EyeOff, CheckCircle2, AlertCircle, Loader2, Coins, Gem, Shield, Swords, Crown, Target, LogOut, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (charData: any) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [character, setCharacter] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account, password }),
      });

      const data = await res.json();

      if (data.success && data.character) {
        setCharacter(data.character);
        setMessage({ type: 'success', text: 'تم تسجيل الدخول بنجاح!' });
        if (onLoginSuccess) {
          onLoginSuccess(data.character);
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'فشل تسجيل الدخول. تحقق من اسم الحساب وكلمة المرور.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'فشل الاتصال بسيرفر تسجيل الدخول.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setCharacter(null);
    setAccount('');
    setPassword('');
    setMessage(null);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#050811]/85 backdrop-blur-md transition-all overflow-y-auto"
    >

      {/* Glass Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-5 sm:p-8 rounded-3xl bg-[#0e1424] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] text-right overflow-hidden max-h-[92vh] overflow-y-auto"
      >

        {/* Glow Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-orange-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:top-5 sm:left-5 p-1.5 rounded-full bg-[#141d33] border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!character ? (
          /* Login Form View */
          <div>
            <div className="text-center mb-6 pt-2">
              <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                تسجيل الدخول <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-400">Equinox VS</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-bold">سجل دخولك لعرض أرصدة CPs ومقتنيات شخصيتك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Account Input */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">اسم الحساب (Account Name):</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="أدخل اسم الحساب"
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors font-medium"
                  />
                  <User className="w-5 h-5 text-slate-500 absolute top-3.5 right-3.5" />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">كلمة المرور (Password):</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                    className="w-full px-4 py-3 pr-11 pl-11 rounded-xl bg-[#070b14] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition-colors font-medium"
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
                  className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
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
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_25px_rgba(255,69,0,0.6)] text-white font-black text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>جاري التحقق والدخول...</span>
                  </>
                ) : (
                  <span>عرض بيانات شخصيتي</span>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* Character Dashboard View */
          <div className="space-y-4 sm:space-y-5 pt-2">

            {/* Header Hero Banner */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-orange-500/20 border border-cyan-500/40 text-center relative overflow-hidden">
              <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs font-extrabold mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>لوحة أسطورة بطل Equinox VS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{character.name}</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2 text-xs font-bold text-slate-300">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {character.className}
                </span>
                <span>•</span>
                <span className="text-amber-400 font-black">Level {character.level}</span>
                <span>•</span>
                <span className="text-orange-400 font-bold">Reborn {character.reborn}</span>
              </div>
            </div>

            {/* Currencies Grid */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wider mb-2">العملات والمقتنيات (Currencies):</h4>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-amber-500/30 text-center">
                  <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold">الذهب (Gold)</div>
                  <div className="text-xs sm:text-sm font-black text-amber-300 mt-0.5 truncate">{character.money.toLocaleString()}</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-cyan-500/30 text-center">
                  <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold">CPs حرة</div>
                  <div className="text-xs sm:text-sm font-black text-cyan-300 mt-0.5 truncate">{character.emoney.toLocaleString()}</div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-orange-500/30 text-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mx-auto mb-1" />
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold">CPs مقيدة</div>
                  <div className="text-xs sm:text-sm font-black text-orange-300 mt-0.5 truncate">{character.boundEmoney.toLocaleString()}</div>
                </div>

              </div>
            </div>

            {/* Combat Stats Grid */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-wider mb-2">إحصائيات القتال (Combat Stats):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs font-bold">

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Swords className="w-4 h-4 text-cyan-400" /> القوة (BP):
                  </span>
                  <span className="text-cyan-300 font-black">{character.battlePower} BP</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-orange-400" /> قتلات الوحوش:
                  </span>
                  <span className="text-orange-400 font-black">{character.mobKills} Kills</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-rose-400" /> نقاط القتل (PK):
                  </span>
                  <span className="text-rose-400 font-black">{character.pk} PK</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-amber-400" /> رتبة الـ VIP:
                  </span>
                  <span className="text-amber-300 font-black">VIP {character.vip}</span>
                </div>

              </div>
            </div>

            {/* Logout / Close Button */}
            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-xl bg-[#141d33] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>تسجيل الخروج والعودة</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
