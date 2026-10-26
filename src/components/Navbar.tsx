import React, { useState } from 'react';
import { Sparkles, Smartphone, Menu, X, Compass, BedDouble, Calendar, MessageSquareQuote } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAudit,
  onOpenSimulator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#top" className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 flex items-center justify-center text-white shadow-sm shadow-blue-900/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-blue-200" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-950 leading-none">
              CloudCrest<span className="text-blue-600 font-extrabold">.</span>Stayz
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-1">
              Boutique Rooms & Hostels
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#rooms" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Rooms & Dorms
          </a>
          <a href="#experience" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Vibe & Amenities
          </a>
          <a href="#events" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Community Events
          </a>
          <a href="#reviews" className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
            Guest Stories
          </a>
          <button
            onClick={onOpenAudit}
            className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Venture Review & App Strategy</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSimulator}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Experience the interactive mobile companion app"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Test Mobile App</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            Check Availability
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSimulator}
            className="p-2 text-slate-700 bg-slate-100 rounded-lg text-xs font-medium flex items-center gap-1"
            aria-label="Preview Mobile App"
          >
            <Smartphone className="w-4 h-4 text-blue-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#rooms"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            <BedDouble className="w-4 h-4 text-slate-400" />
            <span>Explore Rooms & Hostel Pods</span>
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            <Compass className="w-4 h-4 text-slate-400" />
            <span>Amenities & Workation Hub</span>
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Community Events</span>
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            <MessageSquareQuote className="w-4 h-4 text-slate-400" />
            <span>Verified Guest Reviews</span>
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-amber-800 bg-amber-50 rounded-lg border border-amber-200/60"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Venture Review & Mobile App Strategy</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg border border-blue-200/60"
            >
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Launch Interactive Mobile App Prototype</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-blue-600 rounded-lg text-center shadow-sm"
            >
              Book Stay Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
