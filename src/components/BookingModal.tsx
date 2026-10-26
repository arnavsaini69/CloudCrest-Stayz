import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Users, Shield, QrCode, ArrowRight, Sparkles, Copy, Download } from 'lucide-react';
import { Room, BookingConfirmation } from '../types';
import { ADD_ON_OPTIONS } from '../data/mockData';

interface BookingModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  defaultCheckin?: string;
  defaultCheckout?: string;
  defaultGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  room,
  isOpen,
  onClose,
  defaultCheckin = '2026-11-01',
  defaultCheckout = '2026-11-05',
  defaultGuests = 2,
}) => {
  if (!isOpen || !room) return null;

  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [checkin, setCheckin] = useState(defaultCheckin);
  const [checkout, setCheckout] = useState(defaultCheckout);
  const [guests, setGuests] = useState(Math.min(defaultGuests, room.maxGuests) || 1);
  const [guestName, setGuestName] = useState('Arnav Sharma');
  const [guestEmail, setGuestEmail] = useState('arnav.0251mba158@dgu.ac.in');
  const [guestPhone, setGuestPhone] = useState('+91 98765 43210');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['addon-breakfast']);
  const [specialRequests, setSpecialRequests] = useState('High floor balcony preference, arriving around 2 PM.');
  const [copiedVoucher, setCopiedVoucher] = useState(false);

  // Compute nights
  const calculateNights = () => {
    const start = new Date(checkin);
    const end = new Date(checkout);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const baseRate = room.price * nights;

  // Add-ons computation
  const addOnsTotal = selectedAddOns.reduce((acc, addOnId) => {
    const item = ADD_ON_OPTIONS.find((a) => a.id === addOnId);
    if (!item) return acc;
    if (item.per === 'night') return acc + item.price * nights;
    if (item.per === 'person') return acc + item.price * guests;
    return acc + item.price;
  }, 0);

  const discount = Math.round((baseRate + addOnsTotal) * 0.05); // 5% direct website booking perk
  const taxableAmount = baseRate + addOnsTotal - discount;
  const taxes = Math.round(taxableAmount * 0.12); // 12% GST
  const grandTotal = taxableAmount + taxes;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const bookingCode = `CC-UK-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    setCopiedVoucher(true);
    setTimeout(() => setCopiedVoucher(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Top Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 sticky top-0 z-10">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-blue-600 font-bold block">
              {step === 'form' ? 'Instant Reservation Engine' : 'Booking Confirmed'}
            </span>
            <h2 id="booking-modal-title" className="text-lg font-bold text-slate-900">
              {step === 'form' ? room.title : 'Your Mountain Sanctuary Is Reserved!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleConfirm} className="p-6 space-y-6">
            {/* Step 1: Dates & Guests */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-600 tracking-wider mb-3 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>1. Travel Dates & Occupancy</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="modal-checkin" className="block text-xs font-semibold text-slate-600 mb-1">Check-in</label>
                  <input
                    id="modal-checkin"
                    type="date"
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-checkout" className="block text-xs font-semibold text-slate-600 mb-1">Check-out</label>
                  <input
                    id="modal-checkout"
                    type="date"
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-guests" className="block text-xs font-semibold text-slate-600 mb-1">Guests ({room.maxGuests} max)</label>
                  <select
                    id="modal-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none cursor-pointer"
                  >
                    {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-2 text-xs text-blue-700 font-medium flex items-center gap-1">
                <span>Duration: <strong>{nights} night{nights > 1 ? 's' : ''}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Includes free fiber Wi-Fi & mountain lounge access</span>
              </div>
            </div>

            {/* Step 2: Custom Add-Ons */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-600 tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>2. Customize Your Stay (Optional Add-ons)</span>
              </h3>
              <div className="space-y-2.5">
                {ADD_ON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-start justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-blue-600 bg-blue-50/50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddOn(addon.id)}
                          className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900">
                            {addon.name}
                          </div>
                          <div className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {addon.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-slate-800 shrink-0 ml-4 tabular-nums">
                        +₹{addon.price}
                        <span className="text-[11px] text-slate-400 font-normal">/{addon.per}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Guest Details */}
            <div>
              <h3 className="text-xs uppercase font-bold text-slate-600 tracking-wider mb-3 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-600" />
                <span>3. Primary Guest Information</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="guest-full-name" className="block text-xs font-semibold text-slate-600 mb-1">Full Legal Name</label>
                  <input
                    id="guest-full-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="e.g. Arnav Sharma"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guest-email" className="block text-xs font-semibold text-slate-600 mb-1">Email for Confirmation</label>
                  <input
                    id="guest-email"
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="you@domain.com"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="guest-phone" className="block text-xs font-semibold text-slate-600 mb-1">Mobile / WhatsApp Number</label>
                  <input
                    id="guest-phone"
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="guest-notes" className="block text-xs font-semibold text-slate-600 mb-1">Special Preferences / ETA</label>
                  <input
                    id="guest-notes"
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    placeholder="e.g. Quiet room for Zoom calls, late check-in"
                  />
                </div>
              </div>
            </div>

            {/* Transparent Bill Breakdown */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{room.title} ({nights} night{nights > 1 ? 's' : ''})</span>
                <span className="font-semibold tabular-nums">₹{baseRate.toLocaleString('en-IN')}</span>
              </div>
              {addOnsTotal > 0 && (
                <div className="flex justify-between text-slate-600">
                  <span>Selected Stay Add-ons</span>
                  <span className="font-semibold tabular-nums">+₹{addOnsTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Direct Venture Booking Discount (5%)</span>
                <span className="tabular-nums">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Government Goods & Services Tax (12% GST)</span>
                <span className="font-semibold tabular-nums">+₹{taxes.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Total Amount Payable (All Inclusive)</span>
                <span className="text-blue-600 text-base tabular-nums">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Zero Cancellation fee up to 48 hrs</span>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Confirm & Lock Rate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-6 space-y-6">
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Reservation Confirmed!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Booking Reference has been dispatched to <strong>{guestEmail}</strong>
              </p>
            </div>

            {/* Digital Boarding Voucher Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider block">
                    CloudCrest Stayz · Digital Guest Pass
                  </span>
                  <span className="text-lg font-bold text-white mt-1 block">
                    {room.title}
                  </span>
                  <span className="text-xs text-slate-300">
                    Dehradun Foothills, Uttarakhand
                  </span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl text-center">
                  <QrCode className="w-8 h-8 text-white mx-auto" />
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 mt-1 block">Scan at Desk</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-white/10 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Lead Guest</span>
                  <span className="font-semibold text-white">{guestName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Dates</span>
                  <span className="font-semibold text-white">{checkin} → {checkout}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Nights & Guests</span>
                  <span className="font-semibold text-white">{nights} Nights · {guests} Guests</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Voucher ID</span>
                  <span className="font-mono font-bold text-amber-300">{bookingCode}</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-slate-300">
                <span>Total Paid: <strong className="text-white tabular-nums">₹{grandTotal.toLocaleString('en-IN')}</strong></span>
                <span className="text-emerald-300 font-medium">Guaranteed Instant Check-In</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleCopyCode}
                className="w-full sm:w-1/2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedVoucher ? 'Copied Voucher Code!' : 'Copy Reservation Code'}</span>
              </button>
              <button
                onClick={() => {
                  alert(`Reservation ${bookingCode} saved. You can also view it inside the CloudCrest Mobile Companion App!`);
                }}
                className="w-full sm:w-1/2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Offline Pass</span>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
              >
                Return to Stays Catalog
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
