'use client';

import React, { useState, useEffect } from 'react';
import { Download, UserPlus, LogIn, Menu, X, Flame, Snowflake } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenRegister, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadUrl = "/Equinox_VS_13.140.221.40.apk";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/95 backdrop-blur-xl border-b border-cyan-500/25 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2 sm:py-2.5'
          : 'bg-gradient-to-b from-[#050811]/98 via-[#050811]/85 to-transparent backdrop-blur-md border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">

        {/* Brand Logo & Title (RTL Container with LTR Brand Name) */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-sky-500 to-orange-500 shadow-[0_0_20px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/logo-emblem.jpeg"
              alt="Equinox VS Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-right">
            {/* Explicit LTR wrapper ensures EQUINOX is on left and VS is on right */}
            <div dir="ltr" className="inline-flex items-center gap-1.5 text-lg sm:text-2xl font-black tracking-tight leading-none font-sans select-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                EQUINOX
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 drop-shadow-[0_0_12px_rgba(255,85,0,0.4)]">
                VS
              </span>
            </div>
            <span dir="ltr" className="text-[8px] sm:text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mt-1 block leading-none">
              Conquer Mobile World
            </span>
          </div>
        </a>

        {/* Centered Floating Pill Navigation Links for XL Screen */}
        <nav className="hidden xl:flex items-center gap-5 px-6 py-2.5 rounded-full bg-[#0a101f]/90 border border-slate-800 shadow-xl font-bold text-xs text-slate-300 backdrop-blur-xl">
          <a href="#home" className="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <Snowflake className="w-3.5 h-3.5 text-cyan-400" /> الرئيسية
          </a>
          <a href="#game-features" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">مميزات اللعبة</a>
          <a href="#classes" className="hover:text-orange-400 transition-colors py-1 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <Flame className="w-3.5 h-3.5 text-orange-500" /> الأبطال والمجسمات
          </a>
          <a href="#systems" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">أنظمة القتال</a>
          <a href="#guide" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">طريقة البدء</a>
          <a href="#download" className="hover:text-amber-400 transition-colors py-1 shrink-0 whitespace-nowrap text-amber-300 font-extrabold">التحميل</a>
        </nav>

        {/* Action Buttons for Large Screens */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">

          {/* Player Login / Character Dashboard Button */}
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2.5 rounded-xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center gap-2 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0 whitespace-nowrap cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-cyan-400" />
            <span>تسجيل الدخول</span>
          </button>

          {/* Download APK Button */}
          <a
            href={downloadUrl}
            download="Equinox_VS_13.140.221.40.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 rounded-xl bg-[#101828] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center gap-2 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span dir="ltr">تحميل APK</span>
          </a>

          {/* Register Button */}
          <button
            onClick={onOpenRegister}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_22px_rgba(255,85,0,0.6)] text-white font-black text-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
          >
            <UserPlus className="w-4 h-4" />
            <span>إنشاء حساب</span>
          </button>

        </div>

        {/* Mobile Action Controls & Hamburger Menu */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            onClick={onOpenLogin}
            className="px-3 py-1.5 rounded-xl bg-[#0c1222] border border-cyan-500/40 text-cyan-300 font-bold text-xs shrink-0 whitespace-nowrap cursor-pointer"
          >
            دخول
          </button>
          <button
            onClick={onOpenRegister}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs shrink-0 whitespace-nowrap cursor-pointer"
          >
            تسجيل
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0d1322] border border-slate-800 text-white shrink-0 cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-[#050811]/98 border-b border-cyan-500/30 px-6 py-5 space-y-3 font-bold text-slate-200 backdrop-blur-2xl text-right shadow-2xl max-h-[82vh] overflow-y-auto">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            الرئيسية
          </a>
          <a
            href="#game-features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            مميزات اللعبة
          </a>
          <a
            href="#classes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-orange-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            الأبطال والمجسمات
          </a>
          <a
            href="#systems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            أنظمة القتال
          </a>
          <a
            href="#guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            طريقة البدء
          </a>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
            className="block w-full text-right py-2.5 text-cyan-300 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg cursor-pointer"
          >
            تسجيل الدخول وحسابي
          </button>
          <a
            href={downloadUrl}
            download="Equinox_VS_13.140.221.40.apk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-amber-400 font-extrabold px-2 rounded-lg flex items-center justify-between"
          >
            <span>تحميل اللعبة APK</span>
            <Download className="w-4 h-4 text-amber-400" />
          </a>
        </div>
      )}
    </header>
  );
}
