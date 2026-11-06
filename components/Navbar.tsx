'use client';

import React, { useState, useEffect } from 'react';
import { Download, UserPlus, LogIn, Menu, X, Flame, Snowflake, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenRegister, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadUrl = "http://13.140.221.40:9528/Equinox_VS_13.140.221.40.apk";

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
          ? 'bg-[#050811]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2.5'
          : 'bg-gradient-to-b from-[#050811]/95 via-[#050811]/75 to-transparent backdrop-blur-md border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">

        {/* Brand Logo & Title */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-sky-500 to-orange-500 shadow-[0_0_18px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/logo-emblem.jpeg"
              alt="Equinox VS Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xl font-black tracking-wide flex items-center gap-1 leading-none font-sans whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400">
                EQUINOX
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500">
                VS
              </span>
            </span>
            <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase mt-0.5 whitespace-nowrap">
              Conquer Mobile World
            </span>
          </div>
        </a>

        {/* Centered Floating Pill Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 px-5 py-2 rounded-full bg-[#0a101f]/90 border border-slate-800 shadow-lg font-bold text-xs text-slate-300 backdrop-blur-xl">
          <a href="#home" className="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1 shrink-0 whitespace-nowrap">
            <Snowflake className="w-3.5 h-3.5 text-cyan-400" /> الرئيسية
          </a>
          <a href="#game-features" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">مميزات اللعبة</a>
          <a href="#classes" className="hover:text-orange-400 transition-colors py-1 flex items-center gap-1 shrink-0 whitespace-nowrap">
            <Flame className="w-3.5 h-3.5 text-orange-500" /> الأبطال
          </a>
          <a href="#systems" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">أنظمة القتال</a>
          <a href="#guide" className="hover:text-cyan-400 transition-colors py-1 shrink-0 whitespace-nowrap">طريقة البدء</a>
          <a href="#download" className="hover:text-orange-400 transition-colors py-1 shrink-0 whitespace-nowrap">التحميل</a>
        </nav>

        {/* Action Buttons & Server Status */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">

          {/* Player Login / Character Dashboard Button */}
          <button
            onClick={onOpenLogin}
            className="px-3 py-2 rounded-xl bg-[#0c1222] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0 whitespace-nowrap cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5 text-cyan-400" />
            <span>تسجيل الدخول</span>
          </button>

          {/* Download APK Button */}
          <a
            href={downloadUrl}
            download
            className="px-3 py-2 rounded-xl bg-[#101828] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>تحميل APK</span>
          </a>

          {/* Register Button */}
          <button
            onClick={onOpenRegister}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_20px_rgba(255,85,0,0.6)] text-white font-black text-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>إنشاء حساب</span>
          </button>

        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            onClick={onOpenLogin}
            className="px-3 py-1.5 rounded-xl bg-[#0c1222] border border-cyan-500/40 text-cyan-300 font-bold text-xs shrink-0 whitespace-nowrap"
          >
            دخول
          </button>
          <button
            onClick={onOpenRegister}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs shrink-0 whitespace-nowrap"
          >
            تسجيل
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0d1322] border border-slate-800 text-white shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050811]/98 border-b border-cyan-500/30 px-6 py-5 space-y-3 font-bold text-slate-200 backdrop-blur-2xl text-right">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-cyan-400 border-b border-slate-800/80">الرئيسية</a>
          <a href="#game-features" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-cyan-400 border-b border-slate-800/80">مميزات اللعبة</a>
          <a href="#classes" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-orange-400 border-b border-slate-800/80">الأبطال والفئات</a>
          <a href="#systems" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-cyan-400 border-b border-slate-800/80">أنظمة القتال</a>
          <a href="#guide" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-cyan-400 border-b border-slate-800/80">طريقة البدء</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }} className="block w-full text-right py-2 text-cyan-300 border-b border-slate-800/80">تسجيل الدخول وحسابي</button>
          <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-orange-400">تحميل اللعبة</a>
        </div>
      )}
    </header>
  );
}
