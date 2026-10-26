import React from 'react';
import { X, Check, Star, Users, Maximize2, Shield, Wifi, Coffee, Calendar, ArrowRight } from 'lucide-react';
import { Room } from '../types';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBook }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-room-title"
      >
        {/* Header Media */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={room.image}
            alt={room.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-blue-200 mb-1 font-medium">
              <span>{room.bedType}</span>
              <span aria-hidden="true">·</span>
              <span>{room.sizeSqFt} sq ft</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>{room.rating} ({room.reviewCount} reviews)</span>
              </span>
            </div>
            <h2 id="modal-room-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {room.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Key Specs unboxed */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Capacity</span>
              <span className="text-sm font-bold text-slate-800">{room.maxGuests} Guest{room.maxGuests > 1 ? 's' : ''}</span>
            </div>
            <div className="border-x border-slate-200">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Bathroom</span>
              <span className="text-sm font-bold text-slate-800">{room.bathType.split(' ')[0]}</span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Space</span>
              <span className="text-sm font-bold text-slate-800">{room.sizeSqFt} sq ft</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">About this space</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">Space Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-2">Amenities & Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {room.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-start gap-3">
            <Shield className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 leading-relaxed">
              <span className="font-semibold block">Flexible Cancellation Policy</span>
              Full refund up to 48 hours prior to arrival check-in. Instant reservation pass sent to email & WhatsApp.
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 block">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-500 font-medium">/{room.perUnit}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(room);
              }}
              className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Instant Reserve</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
