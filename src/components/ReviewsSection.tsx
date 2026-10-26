import React, { useState } from 'react';
import { Star, ShieldCheck, Check } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredReviews = filterType === 'all'
    ? GUEST_REVIEWS
    : GUEST_REVIEWS.filter((r) => r.travelerType === filterType);

  return (
    <section id="reviews" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
              Verified Guest Experiences
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Loved by solo wanderers, remote workers & couples
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Real reviews from real stays. Filter by traveler type to see how CloudCrest fits your trip style.
            </p>
          </div>

          {/* Interactive Persona Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto shrink-0 max-w-full">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilterType('Digital Nomad')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'Digital Nomad' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Digital Nomads
            </button>
            <button
              onClick={() => setFilterType('Solo Backpacker')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'Solo Backpacker' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo Backpackers
            </button>
            <button
              onClick={() => setFilterType('Couple')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'Couple' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Couples
            </button>
          </div>
        </div>

        {/* Rating Metrics Header Banner */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">4.94</div>
            <div className="flex justify-center my-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs text-slate-500">Overall Rating (1,280+ Reviews)</span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">99.4%</div>
            <span className="text-xs text-emerald-600 font-semibold block mt-1">High Standard</span>
            <span className="text-xs text-slate-500">Cleanliness & Hygiene Score</span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">245 Mbps</div>
            <span className="text-xs text-blue-600 font-semibold block mt-1">Verified Speed</span>
            <span className="text-xs text-slate-500">Average Guest Wi-Fi Speed</span>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-slate-900 tabular-nums">98%</div>
            <span className="text-xs text-purple-600 font-semibold block mt-1">Repeat & Referred</span>
            <span className="text-xs text-slate-500">Would Recommend to Friends</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span>{rev.stayDate}</span>
                    {rev.verified && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-0.5 text-emerald-700 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Verified Stay</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="block text-sm font-bold text-slate-900">
                    {rev.author}
                  </strong>
                  <div className="text-xs text-slate-500">
                    <span>{rev.location}</span>
                    <span aria-hidden="true" className="mx-1">·</span>
                    <span className="text-blue-700 font-medium">{rev.travelerType}</span>
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-medium">
                  {rev.roomStayed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
