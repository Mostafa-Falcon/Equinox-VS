'use client';

import React, { useState, useEffect } from 'react';
import { UserPlus, LogIn, Menu, X, Flame, Snowflake, Sparkles, Download, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DOWNLOAD_APK_URL } from '@/lib/constants';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenRegister, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const downloadUrl = DOWNLOAD_APK_URL;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none',
        scrolled
          ? 'bg-[#030611]/95 backdrop-blur-2xl border-b border-cyan-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.9)] py-2 sm:py-2.5'
          : 'bg-gradient-to-b from-[#030611]/98 via-[#030611]/85 to-transparent backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">

        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-sky-500 to-orange-500 shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/logo-emblem.jpeg"
              alt="Equinox VS Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col text-right">
            <div dir="ltr" className="inline-flex items-center gap-1 sm:gap-1.5 text-base sm:text-xl font-black tracking-tight leading-none font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                EQUINOX
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 drop-shadow-[0_0_15px_rgba(255,85,0,0.4)]">
                VS
              </span>
            </div>
            <span dir="ltr" className="text-[7.5px] sm:text-[9px] font-black tracking-widest text-slate-400 uppercase mt-0.5 block leading-none font-sans">
              Conquer Mobile World
            </span>
          </div>
        </a>

        {/* Live Server Indicator Chip (Gamer Friendly - Strictly Single-Line, Never Wraps!) */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d1a]/90 border border-emerald-500/30 text-emerald-300 text-xs font-black shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-xl shrink-0 whitespace-nowrap">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 font-bold">سيرفر المعارك:</span>
          <span className="text-emerald-400 font-black">متصل 24/7</span>
        </div>

        {/* Clean Center Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 px-5 py-2 rounded-full bg-[#070b16]/90 border border-slate-800/90 shadow-2xl font-extrabold text-xs text-slate-300 backdrop-blur-2xl shrink-0">
          <a href="#home" className="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <Snowflake className="w-3.5 h-3.5 text-cyan-400" /> الرئيسية
          </a>
          <a href="#game-features" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">
            عالم اللعبة
          </a>
          <a href="#classes" className="hover:text-orange-400 transition-colors py-1 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <Flame className="w-3.5 h-3.5 text-orange-500" /> أبطال المعركة
          </a>
          <a href="#systems" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">
            أنظمة القتال
          </a>
          <a href="#guide" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">
            طريقة البدء
          </a>
        </nav>

        {/* Top-Left Action Buttons (Account CTAs & Download) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">

          {/* Quick Direct Download Button */}
          <a
            href={downloadUrl}
            download="Equinox_VS.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 text-cyan-300 font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>تحميل APK</span>
          </a>

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            className="px-3 py-2 rounded-xl bg-[#090e1c] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-extrabold text-xs flex items-center gap-1.5 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] shrink-0 whitespace-nowrap cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5 text-cyan-400" />
            <span>تسجيل الدخول</span>
          </button>

          {/* Register Button */}
          <button
            onClick={onOpenRegister}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_20px_rgba(255,85,0,0.5)] text-white font-black text-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>إنشاء حساب</span>
          </button>

        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-1.5 sm:hidden shrink-0">
          <button
            onClick={onOpenLogin}
            className="px-2.5 py-1.5 rounded-xl bg-[#090e1c] border border-cyan-500/40 text-cyan-300 font-extrabold text-xs shrink-0 cursor-pointer"
          >
            دخول
          </button>
          <button
            onClick={onOpenRegister}
            className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs shrink-0 cursor-pointer shadow-md"
          >
            تسجيل
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-xl bg-[#080c18] border border-slate-800 text-white shrink-0 cursor-pointer active:scale-95"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[52px] sm:top-[60px] bg-[#030611]/98 border-b border-cyan-500/30 px-5 py-4 space-y-2 font-extrabold text-slate-200 backdrop-blur-2xl text-right shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">

          {/* Mobile Server Status Banner */}
          <div className="p-2.5 rounded-2xl bg-[#070b16] border border-emerald-500/30 flex items-center justify-between mb-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-black">حالة السيرفر: متصل أونلاين</span>
            </div>
            <span className="text-slate-400 font-bold text-[11px]">بدون لاج 24/7</span>
          </div>

          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg flex items-center gap-2"
          >
            <Snowflake className="w-4 h-4 text-cyan-400" /> الرئيسية
          </a>
          <a
            href="#game-features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            عالم اللعبة ومميزاتها
          </a>
          <a
            href="#classes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-orange-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg flex items-center gap-2"
          >
            <Flame className="w-4 h-4 text-orange-500" /> أبطال المعركة والمجسمات
          </a>
          <a
            href="#systems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            أنظمة القتال وتطوير العتاد
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            لقطات الشاشة المباشرة
          </a>
          <a
            href="#guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-cyan-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            طريقة البدء والتحميل
          </a>

          {/* Quick Direct Download Action in Mobile Menu */}
          <a
            href={downloadUrl}
            download="Equinox_VS.apk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] my-2"
          >
            <Download className="w-4 h-4" />
            <span>تحميل ملف APK المباشر (315 MB)</span>
          </a>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="w-1/2 py-2 rounded-xl bg-[#090e1c] border border-cyan-500/40 text-cyan-300 font-extrabold text-xs text-center cursor-pointer"
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
              className="w-1/2 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs text-center cursor-pointer"
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
