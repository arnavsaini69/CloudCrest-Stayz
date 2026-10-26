import React, { useState } from 'react';
import { Star, Users, ArrowUpRight, Check, Eye } from 'lucide-react';
import { Room, RoomCategory } from '../types';
import { ROOMS_DATA } from '../data/mockData';
import { RoomDetailModal } from './RoomDetailModal';

interface RoomsSectionProps {
  activeCategory: RoomCategory;
  onSelectCategory: (category: RoomCategory) => void;
  onBookRoom: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onBookRoom,
}) => {
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<Room | null>(null);

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="rooms" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase font-bold text-blue-600 tracking-wider mb-2">
              Curated Accommodations
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Find the space tailored to your mountain journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              From solo traveler pods with digital lockers to panoramic family suites with private dining balconies.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto shrink-0 max-w-full">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Spaces ({ROOMS_DATA.length})
            </button>
            <button
              onClick={() => onSelectCategory('private')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'private'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Private Rooms
            </button>
            <button
              onClick={() => onSelectCategory('hostel')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'hostel'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hostel Capsule Beds
            </button>
            <button
              onClick={() => onSelectCategory('suite')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'suite'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Family Suites
            </button>
            <button
              onClick={() => onSelectCategory('workation')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'workation'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nomad Lofts
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame with Overlay Action */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={room.image}
                  alt={room.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Rating badge subtle */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums">{room.rating}</span>
                  <span className="text-slate-400 font-normal">({room.reviewCount})</span>
                </div>

                {/* Units left indicator */}
                {room.availableUnits <= 3 && (
                  <div className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                    Only {room.availableUnits} left
                  </div>
                )}

                {/* Quick inspect button */}
                <button
                  onClick={() => setSelectedRoomForModal(room)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors text-xs flex items-center gap-1.5 backdrop-blur-sm cursor-pointer"
                  title="View full specs & photos"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span>{room.bedType.split(' ')[0]} {room.bedType.split(' ')[1] || 'Bed'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.maxGuests} Guest{room.maxGuests > 1 ? 's' : ''}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.sizeSqFt} sq ft</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {room.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities List */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-600">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    {room.originalPrice && (
                      <span className="text-xs text-slate-400 line-through tabular-nums mr-1.5">
                        ₹{room.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/{room.perUnit}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedRoomForModal(room)}
                      className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookRoom(room)}
                      className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Reserve</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Room Modal */}
      <RoomDetailModal
        room={selectedRoomForModal}
        onClose={() => setSelectedRoomForModal(null)}
        onBook={onBookRoom}
      />
    </section>
  );
};
