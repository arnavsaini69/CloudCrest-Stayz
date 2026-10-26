import React, { useState } from 'react';
import { 
  X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Smartphone, 
  Globe, ShieldCheck, Zap, Users, TrendingUp, KeyRound, Coffee, Layers
} from 'lucide-react';
import { MOBILE_APP_PILLARS, VENTURE_AUDIT_COMPARISONS } from '../data/mockData';

interface VentureAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSimulator: () => void;
}

export const VentureAuditModal: React.FC<VentureAuditModalProps> = ({
  isOpen,
  onClose,
  onOpenSimulator,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'review' | 'website' | 'mobile' | 'business'>('review');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col text-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white rounded-t-3xl border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Venture Strategy & Engineering Blueprint</span>
            </div>
            <h2 id="audit-modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
              CloudCrest Stayz: Website Audit & Mobile App Vision
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              A comprehensive review of your venture website, architectural comparison, and native mobile companion roadmap.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close strategy modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto gap-2 py-2">
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'review'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>1. Attachment Code Audit</span>
          </button>

          <button
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'website'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>2. Website Upgrades</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mobile'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>3. Mobile App (5 Pillars)</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'business'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>4. Growth & Retention</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          {activeTab === 'review' && (
            <div className="space-y-6">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950">
                <h3 className="text-sm font-bold flex items-center gap-2 mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Executive Review of the Attached Code (`index.html`)</span>
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  Your attached prototype demonstrated a clear vision for a hybrid stay model (rooms + hostels). 
                  However, from a commercial conversion and user engagement perspective, it suffered from several critical friction points that we have re-engineered.
                </p>
              </div>

              {/* Comparative Table */}
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Evaluation Dimension</th>
                      <th className="py-3 px-4 text-rose-700">Original Attachment State</th>
                      <th className="py-3 px-4 text-emerald-800">Transformed Benchmark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {VENTURE_AUDIT_COMPARISONS.map((comp, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70">
                        <td className="py-3.5 px-4 font-bold text-slate-800">
                          {comp.aspect}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {comp.current}
                        </td>
                        <td className="py-3.5 px-4 text-slate-900 font-medium">
                          <div className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{comp.recommended}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Critical Gap 1: Booking Dead-End</strong>
                  <p className="text-slate-500">
                    The booking form did not calculate nights or prices, ending with an unstyled <code>window.alert</code> that loses customers.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Critical Gap 2: Missing Community</strong>
                  <p className="text-slate-500">
                    Modern hostel & workation travelers buy the *vibe* (bonfires, events, coworking speed). The old site had no events calendar.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="block text-slate-900 mb-1">Critical Gap 3: Zero Mobile Strategy</strong>
                  <p className="text-slate-500">
                    78% of travelers in India book & manage stays on mobile. Without keyless entry or in-stay messaging, staff costs remain high.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'website' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Interactive Stay Filtering & Availability</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Segmented tabs (Private, Dorms, Family Suites, Nomad Lofts) give instant categorization without page reloads.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Dynamic Pricing & Inclusions Engine</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Live calculation of duration, breakfast packages, co-working desks, airport transfers, and transparent 12% GST breakdown.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Live Weekly Community Events Board</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Social calendar showing live RSVPs for acoustic bonfires, morning yoga, and sunrise treks to drive communal loyalty.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Instant Digital Boarding Voucher</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generates a scannable QR confirmation pass with copyable booking codes and offline pass download instructions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-200 text-xs">
                <div>
                  <strong className="text-blue-950 block font-bold text-sm">
                    Recommended Native Mobile App (iOS / Android) Architecture
                  </strong>
                  <span className="text-blue-800">
                    A dedicated mobile app turns guest smartphones into keycards, concierge remotes, and local guides.
                  </span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenSimulator();
                  }}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Launch Live Simulator</span>
                </button>
              </div>

              <div className="space-y-4">
                {MOBILE_APP_PILLARS.map((pillar) => (
                  <div key={pillar.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-600">{pillar.pillar}</span>
                        <span className="text-sm font-bold text-slate-900">· {pillar.title}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {pillar.description}
                    </p>

                    <div className="text-[11px] font-medium text-blue-700 bg-blue-50/70 p-2 rounded-lg mb-3">
                      <strong>Native Capability:</strong> {pillar.nativeAdvantage}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {pillar.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-950">
                <h4 className="font-bold text-sm mb-1 text-emerald-900">
                  Revenue & Retention Growth Playbook for CloudCrest Stayz
                </h4>
                <p className="leading-relaxed">
                  How leading hybrid hospitality brands (Zostel, Selina, CitizenM) capture 30–40% incremental revenue past the base room price.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  <strong className="block text-slate-900 font-bold">1. High-Margin Ancillaries</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Co-working fiber passes (₹199/day), artisan pahadi breakfasts (₹299), guided treks (₹499), and evening bonfire marshmallows.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <strong className="block text-slate-900 font-bold">2. Nomad Pass (14-30 Day Stays)</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Offer monthly workation passes with 25% discount for remote workers during low-season weekdays to guarantee 85%+ occupancy.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <strong className="block text-slate-900 font-bold">3. Direct Booking Loyalty</strong>
                  <p className="text-slate-600 leading-relaxed">
                    OTAs (MakeMyTrip, Booking.com) take 18–25% commissions. By giving a 5% direct discount and free tea on the app/web, you save 15% net.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Prepared specifically for CloudCrest Stayz venture roadmap.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
