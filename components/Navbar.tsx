'use client';

import React, { useState, useEffect } from 'react';
import { UserPlus, LogIn, Menu, X, Flame, Snowflake, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenRegister, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none',
        scrolled
          ? 'bg-[#030611]/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.9)] py-2 sm:py-2.5'
          : 'bg-gradient-to-b from-[#030611]/98 via-[#030611]/85 to-transparent backdrop-blur-md border-b border-white/5 py-3 sm:py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Brand Logo & Name (RTL Container with LTR Brand Typography) */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-sky-500 to-orange-500 shadow-[0_0_22px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/logo-emblem.jpeg"
              alt="Equinox VS Logo"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col text-right">
            <div dir="ltr" className="inline-flex items-center gap-1.5 text-lg sm:text-2xl font-black tracking-tight leading-none font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                EQUINOX
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 drop-shadow-[0_0_15px_rgba(255,85,0,0.4)]">
                VS
              </span>
            </div>
            <span dir="ltr" className="text-[8px] sm:text-[9.5px] font-black tracking-widest text-slate-400 uppercase mt-1 block leading-none font-sans">
              Conquer Mobile World
            </span>
          </div>
        </a>

        {/* Clean Center Navigation Links (NO DUPLICATE DOWNLOAD LINK HERE!) */}
        <nav className="hidden xl:flex items-center gap-6 px-7 py-2.5 rounded-full bg-[#070b16]/90 border border-slate-800/90 shadow-2xl font-extrabold text-xs text-slate-300 backdrop-blur-2xl">
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

        {/* Top-Left Action Buttons (Account CTAs Only) */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            className="px-4 py-2.5 rounded-xl bg-[#090e1c] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-extrabold text-xs flex items-center gap-2 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] shrink-0 whitespace-nowrap cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-cyan-400" />
            <span>تسجيل الدخول</span>
          </button>

          {/* Register Button */}
          <button
            onClick={onOpenRegister}
            className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:shadow-[0_0_25px_rgba(255,85,0,0.6)] text-white font-black text-xs transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-white/20 shrink-0 whitespace-nowrap"
          >
            <UserPlus className="w-4 h-4" />
            <span>إنشاء حساب</span>
          </button>

        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            onClick={onOpenLogin}
            className="px-3 py-1.5 rounded-xl bg-[#090e1c] border border-cyan-500/40 text-cyan-300 font-extrabold text-xs shrink-0 cursor-pointer"
          >
            دخول
          </button>
          <button
            onClick={onOpenRegister}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs shrink-0 cursor-pointer"
          >
            تسجيل
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#080c18] border border-slate-800 text-white shrink-0 cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] sm:top-[66px] bg-[#030611]/98 border-b border-cyan-500/30 px-6 py-5 space-y-2.5 font-extrabold text-slate-200 backdrop-blur-2xl text-right shadow-2xl max-h-[82vh] overflow-y-auto">
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
            عالم اللعبة
          </a>
          <a
            href="#classes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-orange-400 border-b border-slate-800/80 hover:bg-slate-900/50 px-2 rounded-lg"
          >
            أابطال المعركة
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
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="w-1/2 py-2.5 rounded-xl bg-[#090e1c] border border-cyan-500/40 text-cyan-300 font-extrabold text-xs text-center cursor-pointer"
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
              className="w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs text-center cursor-pointer"
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
