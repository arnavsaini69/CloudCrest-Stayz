import React from 'react';
import { Wifi, Flame, Shield, Coffee, Compass, Laptop, Zap, Award } from 'lucide-react';

export const AmenitiesBento: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
            Engineered For Living & Working
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Hospitality infrastructure that doesn’t compromise
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Every inch of CloudCrest is designed to solve real traveler pain points: unreliable mountain Wi-Fi, noisy dorms, and cold nights.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Wide Marquee - Wi-Fi & Workation */}
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                250 Mbps Dual Fiber + Starlink Failover
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We know mountain Wi-Fi horror stories. CloudCrest operates two dedicated optical fiber lines from separate ISPs plus Starlink satellite failover and an automated 15kVA silent generator, ensuring your critical meetings never drop.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>99.98% Monitored Uptime</span>
              <span className="text-blue-600 font-bold">Zoom & 4K Ready</span>
            </div>
          </div>

          {/* Card 2: Acoustic Privacy Pods */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Acoustic Soundproofing
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Dense timber walls and acoustic drapes between capsule beds cut dorm noise down to a whisper. Sleep deep without earplugs.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Personal charging docks & reading beams
            </div>
          </div>

          {/* Card 3: Bonfire Deck */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Timber Firepit Amphitheatre
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Every evening brings live acoustic jams, storytelling, and warm chai under unpolluted Himalayan skies.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Starry night stargazing & mulled spices
            </div>
          </div>

          {/* Card 4: Biometric & Smart Key Safety */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Underbed Digital Lockers
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Large enough to fit a 70L trekking rucksack and laptop bag. Controlled via your mobile digital key or personal passcode.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Curfew-free 24/7 security access
            </div>
          </div>

          {/* Card 5: Wide - Farm-to-Table Dining & Espresso */}
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Pahadi Farm-to-Table Kitchen & Specialty Roastery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Nutritious mountain grain bowls, organic buckwheat pancakes, seasonal Himalayan honey, and freshly roasted Arabica beans brewed by resident baristas. Vegetarian and vegan friendly.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Fresh local organic produce</span>
              <span className="text-rose-600 font-bold">Open 7:00 AM – 11:30 PM</span>
            </div>
          </div>

          {/* Card 6: Mountain Concierge & Shuttle */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Local Ridge Explorers
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Secret waterfall walks, certified mountain trekking guides, and direct shuttle coordination to Dehradun & Mussoorie.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Electric sedan & scooter rentals on-site
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
