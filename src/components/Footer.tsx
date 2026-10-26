import React from 'react';
import { Compass, Sparkles, Smartphone, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenSimulator: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAudit,
  onOpenSimulator,
  onOpenBooking,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                CloudCrest Stayz
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              A hybrid hospitality venture pairing boutique mountain rooms with social capsule dorms and high-speed co-working in the Garhwal Himalayas.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 rounded-lg border border-slate-800 text-xs font-medium cursor-pointer transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Venture Review & Strategy</span>
              </button>
              <button
                onClick={onOpenSimulator}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-blue-300 rounded-lg border border-slate-800 text-xs font-medium cursor-pointer transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                <span>Test Mobile App</span>
              </button>
            </div>
          </div>

          {/* Col 3: Accommodations */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Stay Spaces</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="hover:text-white transition-colors">Deluxe Balcony Rooms</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Social Capsule Dorms</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Nomad Creator Lofts</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Grand Family Suites</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Women-Only Wing</a></li>
            </ul>
          </div>

          {/* Col 4: Community & Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Experience</h4>
            <ul className="space-y-2">
              <li><a href="#events" className="hover:text-white transition-colors">Acoustic Bonfire Jams</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Himalayan Ridge Treks</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">250 Mbps Fiber Coworking</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Glasshouse Cafe & Roastery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Guest Reviews</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Sanctuary Address</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>CloudCrest Stayz, Old Mussoorie Road, Dehradun Foothills, UK 248009</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+91 135 298 7654 (24/7 Desk)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:hello@cloudcreststayz.com" className="hover:text-white">
                  hello@cloudcreststayz.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; 2026 CloudCrest Stayz Ventures Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Guest Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Cancellation Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">House Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
