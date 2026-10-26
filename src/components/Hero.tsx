import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Sparkles, ShieldCheck, Wifi, Star, ArrowRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';
import { BookingSearchState, RoomCategory } from '../types';

interface HeroProps {
  onSearch: (criteria: BookingSearchState) => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenAudit }) => {
  const [location, setLocation] = useState('Dehradun Foothills, Uttarakhand');
  const [checkin, setCheckin] = useState('2026-11-01');
  const [checkout, setCheckout] = useState('2026-11-05');
  const [guests, setGuests] = useState(2);
  const [category, setCategory] = useState<RoomCategory>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      checkin,
      checkout,
      guests,
      category,
    });
    // Scroll to rooms section smoothly
    const elem = document.getElementById('rooms');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-slate-900 text-white">
      {/* Background Media with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="CloudCrest Stayz Himalayan Lodge and Evening Firepit"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
        {/* Measured dark scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Editorial Callout */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200 mb-6 font-medium tracking-wide">
          <span className="uppercase text-blue-400 font-semibold tracking-wider">CloudCrest Himalayan Collection</span>
          <span aria-hidden="true" className="text-blue-400">·</span>
          <span>Boutique Mountain Suites</span>
          <span aria-hidden="true" className="text-blue-400">·</span>
          <span>Acoustic Capsule Dorms</span>
          <span aria-hidden="true" className="text-blue-400">·</span>
          <span>High-Speed Remote Work Hub</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white [text-wrap:balance]">
              Rest well above the clouds,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
                stay connected with the tribe.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience the warmth of a mountain lodge paired with the vibrant community of a modern hostel. 
              Private sunrise balcony suites, soundproof capsule pods, and dedicated 250 Mbps fiber co-working in the Garhwal Himalayas.
            </p>

            {/* Micro action tags */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Transparent Pricing & Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                <Wifi className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dual ISP Fiber + Starlink Failover</span>
              </div>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors underline decoration-amber-400/60 underline-offset-4 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Read Venture Review & Mobile Roadmap</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Side Hero Highlights */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Guest Score</span>
              <div className="flex items-center gap-1 text-amber-300 text-sm font-bold">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>4.94 / 5.0</span>
              </div>
            </div>
            <p className="text-xs text-slate-200 italic mb-4">
              "The speed of Wi-Fi for remote engineering plus the evening guitar jams on the firepit deck made this the best workation stay I have had in India."
            </p>
            <div className="text-xs text-slate-400 flex items-center justify-between pt-3 border-t border-white/10">
              <span>Rohan S. · Verified Nomad</span>
              <span>1,280+ Stays Hosted</span>
            </div>
          </div>
        </div>

        {/* Interactive Search Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/40 text-slate-900 border border-slate-100">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              Find Your Himalayan Sanctuary
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>Real-time availability synced</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            {/* Field: Destination */}
            <div className="space-y-1.5">
              <label htmlFor="search-location" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Destination / Property
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <select
                  id="search-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Dehradun Foothills, Uttarakhand">Dehradun Foothills, UK</option>
                  <option value="Mussoorie Cloud Ridge">Mussoorie Cloud Ridge</option>
                  <option value="Rishikesh River Trail">Rishikesh River Trail</option>
                </select>
              </div>
            </div>

            {/* Field: Check-In */}
            <div className="space-y-1.5">
              <label htmlFor="search-checkin" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Check-In
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  id="search-checkin"
                  type="date"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* Field: Check-Out */}
            <div className="space-y-1.5">
              <label htmlFor="search-checkout" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Check-Out
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  id="search-checkout"
                  type="date"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* Field: Guests & Category */}
            <div className="space-y-1.5">
              <label htmlFor="search-stay-type" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Travel Style & Guests
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <select
                  id="search-stay-type"
                  value={`${category}-${guests}`}
                  onChange={(e) => {
                    const [cat, g] = e.target.value.split('-');
                    setCategory(cat as RoomCategory);
                    setGuests(Number(g));
                  }}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="all-2">Any Stay · 2 Guests</option>
                  <option value="hostel-1">Hostel Bed · 1 Solo Guest</option>
                  <option value="private-2">Private Suite · 2 Guests</option>
                  <option value="suite-4">Family Suite · 4+ Guests</option>
                  <option value="workation-1">Nomad Loft · 1 Remote Worker</option>
                </select>
              </div>
            </div>

            {/* Action Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Stays</span>
              </button>
            </div>
          </form>
        </div>

        {/* Four Key Proof Anchors Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="block text-xl font-extrabold text-white">4.94★</span>
            <span className="text-xs text-slate-300">Over 1,280+ Verified Reviews</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="block text-xl font-extrabold text-white">250 Mbps</span>
            <span className="text-xs text-slate-300">Dual Fiber & Backup Generator</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="block text-xl font-extrabold text-white">₹0 Hidden</span>
            <span className="text-xs text-slate-300">All Taxes & Linen Upfront</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="block text-xl font-extrabold text-white">24/7 Crew</span>
            <span className="text-xs text-slate-300">Local Hosts & Mountain Desk</span>
          </div>
        </div>
      </div>
    </section>
  );
};
