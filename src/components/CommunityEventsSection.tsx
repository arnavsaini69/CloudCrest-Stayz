import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check, Sparkles, ArrowRight } from 'lucide-react';
import { COMMUNITY_EVENTS, COMMON_LOUNGE_IMAGE } from '../data/mockData';

export const CommunityEventsSection: React.FC = () => {
  const [rsvpdEvents, setRsvpdEvents] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRsvp = (eventId: string, title: string) => {
    if (rsvpdEvents.includes(eventId)) {
      setRsvpdEvents(rsvpdEvents.filter((id) => id !== eventId));
      setToastMessage(`RSVP removed for ${title}.`);
    } else {
      setRsvpdEvents([...rsvpdEvents, eventId]);
      setToastMessage(`Spot confirmed for ${title}! Added to your itinerary pass.`);
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="events" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast alert */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
              Community & Vibe
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              More than a bed. A mountain home where stories are shared.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are an introverted remote worker seeking quiet focus or a solo backpacker ready for dawn treks, 
              our curated weekly experiences bring travelers together naturally.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Complimentary for all in-house guests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Local Pahadi mountain guides</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
            <img
              src={COMMON_LOUNGE_IMAGE}
              alt="CloudCrest Glasshouse Cafe & Coworking Lounge"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="text-[11px] uppercase tracking-wider text-blue-300 font-bold block mb-1">
                The Glasshouse Common Lounge
              </span>
              <p className="text-sm font-semibold text-white">
                Espresso bar, high-speed fiber tables, vinyl records, and panoramic pine forest views.
              </p>
            </div>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_EVENTS.map((event) => {
            const isRsvpd = rsvpdEvents.includes(event.id);
            const remainingSpots = event.spotsLeft - (isRsvpd ? 1 : 0);

            return (
              <div
                key={event.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Category and complimentary flag unboxed */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-2">
                    <span className="text-blue-600">{event.category}</span>
                    <span>{event.isComplimentary ? 'Complimentary' : 'Guided Trek'}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {remainingSpots > 0 ? `${remainingSpots} spots open` : 'Full House'}
                  </span>

                  <button
                    onClick={() => handleRsvp(event.id, event.title)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      isRsvpd
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                    }`}
                  >
                    {isRsvpd ? 'RSVP Confirmed' : 'Join Event'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
