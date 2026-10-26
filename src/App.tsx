/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesBento } from './components/AmenitiesBento';
import { CommunityEventsSection } from './components/CommunityEventsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { MobileAppFeatureBanner } from './components/MobileAppFeatureBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileAppSimulator } from './components/MobileAppSimulator';
import { VentureAuditModal } from './components/VentureAuditModal';
import { Room, RoomCategory, BookingSearchState } from './types';
import { ROOMS_DATA } from './data/mockData';
import { Sparkles, Smartphone } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<RoomCategory>('all');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(ROOMS_DATA[0]);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [simulatorModalOpen, setSimulatorModalOpen] = useState(false);

  // Search state from Hero
  const [searchDates, setSearchDates] = useState({
    checkin: '2026-11-01',
    checkout: '2026-11-05',
    guests: 2,
  });

  const handleHeroSearch = (criteria: BookingSearchState) => {
    setActiveCategory(criteria.category);
    setSearchDates({
      checkin: criteria.checkin,
      checkout: criteria.checkout,
      guests: criteria.guests,
    });
  };

  const handleBookRoom = (room: Room) => {
    setSelectedRoom(room);
    setBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    if (!selectedRoom) {
      setSelectedRoom(ROOMS_DATA[0]);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Founder Notice Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white text-xs py-2 px-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>
            <strong>Venture Review & Mobile App Strategy</strong> included for CloudCrest Stayz.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setAuditModalOpen(true)}
            className="text-amber-300 hover:text-white underline font-semibold text-xs cursor-pointer"
          >
            Read Executive Review & PRD
          </button>
          <span className="text-white/30">|</span>
          <button
            onClick={() => setSimulatorModalOpen(true)}
            className="text-blue-300 hover:text-white underline font-semibold text-xs flex items-center gap-1 cursor-pointer"
          >
            <Smartphone className="w-3 h-3" />
            <span>Test Mobile Companion App</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        onOpenAudit={() => setAuditModalOpen(true)}
        onOpenSimulator={() => setSimulatorModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero with Atmospheric Photography & Booking Engine */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* Filterable Room & Hostel Capsule Catalog */}
        <RoomsSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onBookRoom={handleBookRoom}
        />

        {/* Amenities & Tech Infrastructure Bento */}
        <AmenitiesBento />

        {/* Live Community Events & Glasshouse Lounge */}
        <CommunityEventsSection />

        {/* Mobile App Companion Spotlight */}
        <MobileAppFeatureBanner
          onOpenSimulator={() => setSimulatorModalOpen(true)}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* Verified Reviews & Social Proof */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAudit={() => setAuditModalOpen(true)}
        onOpenSimulator={() => setSimulatorModalOpen(true)}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Floating Strategy Quick Trigger */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2">
        <button
          onClick={() => setAuditModalOpen(true)}
          className="bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg border border-slate-700/80 backdrop-blur-md flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          title="Review original website vs new build + Mobile App PRD"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Venture Review & App Roadmap</span>
        </button>
        <button
          onClick={() => setSimulatorModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg border border-blue-500/80 backdrop-blur-md flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
          title="Try interactive mobile app"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile App Simulator</span>
        </button>
      </div>

      {/* Modals */}
      <BookingModal
        room={selectedRoom}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultCheckin={searchDates.checkin}
        defaultCheckout={searchDates.checkout}
        defaultGuests={searchDates.guests}
      />

      <MobileAppSimulator
        isOpen={simulatorModalOpen}
        onClose={() => setSimulatorModalOpen(false)}
      />

      <VentureAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        onOpenSimulator={() => setSimulatorModalOpen(true)}
      />
    </div>
  );
}
