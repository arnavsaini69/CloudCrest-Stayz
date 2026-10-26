import React from 'react';
import { Smartphone, KeyRound, MessageSquare, Coffee, Compass, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MobileAppFeatureBannerProps {
  onOpenSimulator: () => void;
  onOpenAudit: () => void;
}

export const MobileAppFeatureBanner: React.FC<MobileAppFeatureBannerProps> = ({
  onOpenSimulator,
  onOpenAudit,
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Mobile App Architecture & Strategy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Your stay in the palm of your hand: Keyless access, tribe chat & 1-tap concierge.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We engineered a companion mobile application designed specifically for CloudCrest guests. 
              Unlock room doors via Bluetooth/NFC, chat with fellow travelers in the hostel lounge, split dorm expenses with one-click UPI, and access offline mountain maps.
            </p>

            {/* Micro feature pills */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NFC / BLE Keyless Door Access</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Geo-Fenced In-House Nomad Chat</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Coffee className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Room Service & Towels</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Compass className="w-4 h-4 text-rose-400 shrink-0" />
                <span>100% Offline GPS Trail Guide</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSimulator}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/40 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Launch Interactive Mobile App Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenAudit}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors cursor-pointer"
              >
                Read 5-Pillar App PRD
              </button>
            </div>
          </div>

          {/* Interactive teaser graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={onOpenSimulator}
              className="w-full max-w-sm bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl hover:border-blue-400/80 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-700">
                <span className="font-semibold text-white">Live App Prototype</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Interactive
                </span>
              </div>

              <div className="py-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Tap to test the Mobile App
                </h4>
                <p className="text-xs text-slate-300">
                  Simulate door unlocking, live resident chat, ordering chai to room, and splitting dorm payments.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:text-blue-300">
                <span>Open in Virtual Device</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
