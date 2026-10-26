import React, { useState } from 'react';
import { 
  X, Smartphone, KeyRound, MessageSquare, Coffee, Compass, 
  Share2, ShieldAlert, Check, Sparkles, Send, Bell, Wifi, Battery, Signal, ChevronRight
} from 'lucide-react';

interface MobileAppSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'key' | 'community' | 'concierge' | 'split' | 'guide';

export const MobileAppSimulator: React.FC<MobileAppSimulatorProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<TabType>('key');
  const [doorUnlocked, setDoorUnlocked] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  // Community Chat state
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Priya (Dorm 4)', text: 'Anyone heading down to Robber’s Cave for sunset?', time: '3:15 PM' },
    { id: 2, sender: 'Dev (Suite 1)', text: 'Yes! We have 2 empty seats in our rented Thar leaving at 4 PM.', time: '3:18 PM' },
    { id: 3, sender: 'Alex (Nomad Loft)', text: 'I am in! Grabbing my camera from the lounge now.', time: '3:20 PM' },
  ]);
  const [newMsg, setNewMsg] = useState('');

  // Concierge orders
  const [serviceStatus, setServiceStatus] = useState<string | null>(null);

  // Split bill state
  const [splitAmount, setSplitAmount] = useState(2400);
  const [numPeople, setNumPeople] = useState(3);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleUnlockDoor = () => {
    setUnlocking(true);
    setTimeout(() => {
      setUnlocking(false);
      setDoorUnlocked(true);
      setTimeout(() => setDoorUnlocked(false), 4500);
    }, 1200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'You (Room 204)',
        text: newMsg.trim(),
        time: 'Just now',
      },
    ]);
    setNewMsg('');
  };

  const handleOrderService = (item: string) => {
    setServiceStatus(`Ordered: ${item}. Crew notified on floor 2.`);
    setTimeout(() => setServiceStatus(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl p-4 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
        role="dialog"
        aria-modal="true"
        aria-labelledby="simulator-modal-title"
      >
        {/* Left Side: Strategic Context for Venture */}
        <div className="lg:w-1/2 text-left space-y-4 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
            <Smartphone className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Mobile App Prototype</span>
          </div>

          <h2 id="simulator-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How the Mobile App elevates CloudCrest’s guest experience
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            While the website acts as the <strong>primary discovery & conversion engine</strong> for booking guests, 
            the <strong>CloudCrest Mobile App</strong> is an in-stay operating system that drives guest satisfaction, 
            word-of-mouth referral, and high-margin ancillary revenue (food, treks, co-working).
          </p>

          <div className="space-y-2.5 text-xs text-slate-300 pt-2">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <KeyRound className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">1. Hardware Keyless Access</strong>
                Eliminates check-in reception lines using NFC/Bluetooth and Apple/Google Wallet.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">2. Resident Social Tribe</strong>
                Private geo-fenced community chat so backpackers and remote workers connect instantly.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
              <Coffee className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">3. 2-Tap Touch Concierge</strong>
                Direct in-room dining, extra linen requests, and late checkouts with live push updates.
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
            <span>Tap any tab inside the phone simulator to test live.</span>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white underline text-xs cursor-pointer"
            >
              Exit Simulator
            </button>
          </div>
        </div>

        {/* Right Side: High-Fidelity Phone Frame */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[340px] sm:w-[360px] h-[670px] bg-slate-950 rounded-[44px] border-[10px] border-slate-800 shadow-2xl overflow-hidden flex flex-col text-slate-900 select-none">
            {/* Top Island & Status Bar */}
            <div className="bg-slate-950 text-white px-6 pt-3 pb-2 flex items-center justify-between text-xs z-20">
              <span className="font-semibold text-[11px]">9:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* App Internal Header */}
            <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600 block">CloudCrest Guest</span>
                <span className="text-sm font-extrabold text-slate-900">Room 204 · Alpine Balcony</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                  AS
                </div>
              </div>
            </div>

            {/* Notification alert banner */}
            {serviceStatus && (
              <div className="bg-emerald-600 text-white text-xs px-4 py-2 flex items-center justify-between animate-in slide-in-from-top duration-200">
                <span>{serviceStatus}</span>
                <Check className="w-3.5 h-3.5" />
              </div>
            )}

            {/* App Screen Content (Switches by Tab) */}
            <div className="flex-1 bg-slate-50 overflow-y-auto p-4">
              {activeTab === 'key' && (
                <div className="space-y-4 text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl text-white shadow-md">
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Active Keycard</span>
                    <h3 className="text-lg font-bold mt-1">Deluxe Mountain Suite 204</h3>
                    <p className="text-xs text-blue-100 mt-1">Check-in active until 11:00 AM, 5 Nov</p>

                    <div className="my-6">
                      <button
                        onClick={handleUnlockDoor}
                        disabled={unlocking}
                        className={`w-28 h-28 mx-auto rounded-full flex flex-col items-center justify-center transition-all cursor-pointer shadow-xl ${
                          doorUnlocked
                            ? 'bg-emerald-500 scale-105'
                            : unlocking
                            ? 'bg-amber-500 animate-pulse'
                            : 'bg-white text-blue-900 hover:scale-105 active:scale-95'
                        }`}
                      >
                        <KeyRound className={`w-8 h-8 ${doorUnlocked ? 'text-white' : unlocking ? 'text-white' : 'text-blue-600'}`} />
                        <span className="text-[11px] font-bold mt-1">
                          {doorUnlocked ? 'Unlocked!' : unlocking ? 'Beaming...' : 'Hold to Unlock'}
                        </span>
                      </button>
                    </div>

                    <div className="text-[11px] text-blue-200 flex items-center justify-center gap-1.5">
                      <Wifi className="w-3 h-3" />
                      <span>NFC & Bluetooth Door Proximity Active</span>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-left">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1">
                      <span>Share Guest Key</span>
                      <Share2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Send a secure one-time unlock link to your travel companion via WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'community' && (
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-slate-900">Live Resident Chat</span>
                      <span className="text-emerald-600 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                        18 Guests Online
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {messages.map((m) => (
                        <div key={m.id} className="p-2.5 bg-white rounded-xl border border-slate-200 text-left text-xs shadow-2xs">
                          <div className="flex justify-between text-[10px] text-slate-500 mb-0.5 font-medium">
                            <span className="font-bold text-blue-700">{m.sender}</span>
                            <span>{m.time}</span>
                          </div>
                          <p className="text-slate-800">{m.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={newMsg}
                      onChange={(e) => setNewMsg(e.target.value)}
                      placeholder="Say hi to fellow travelers..."
                      className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'concierge' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>1-Tap In-Stay Service</span>
                    <span className="text-slate-500 font-normal">SLA &lt; 15 mins</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOrderService('Pahadi Masala Chai (₹60)')}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-500 transition-all cursor-pointer text-xs"
                    >
                      <Coffee className="w-4 h-4 text-amber-600 mb-1" />
                      <span className="font-bold block text-slate-900">Masala Chai</span>
                      <span className="text-[10px] text-slate-500">₹60 · Delivered to room</span>
                    </button>

                    <button
                      onClick={() => handleOrderService('Extra Warm Quilt / Blanket')}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-500 transition-all cursor-pointer text-xs"
                    >
                      <Sparkles className="w-4 h-4 text-sky-600 mb-1" />
                      <span className="font-bold block text-slate-900">Extra Quilt</span>
                      <span className="text-[10px] text-slate-500">Free · Floor 2 staff</span>
                    </button>

                    <button
                      onClick={() => handleOrderService('Laundry Bag Pickup (5kg wash & fold)')}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-500 transition-all cursor-pointer text-xs"
                    >
                      <Bell className="w-4 h-4 text-purple-600 mb-1" />
                      <span className="font-bold block text-slate-900">Laundry Bag</span>
                      <span className="text-[10px] text-slate-500">Same day return</span>
                    </button>

                    <button
                      onClick={() => handleOrderService('Late Checkout Request (Until 2 PM)')}
                      className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-500 transition-all cursor-pointer text-xs"
                    >
                      <ChevronRight className="w-4 h-4 text-emerald-600 mb-1" />
                      <span className="font-bold block text-slate-900">Late Checkout</span>
                      <span className="text-[10px] text-slate-500">Subject to inventory</span>
                    </button>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold block text-slate-900 mb-1">Direct Host Line</span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Manager Vikram is on duty at the front deck. Average response time: 2 minutes.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'split' && (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-left">
                    <span className="text-xs font-bold text-slate-800 block mb-2">Split Dorm / Group Stay</span>
                    
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="text-slate-500 block mb-1">Total Bill Amount (₹)</label>
                        <input
                          type="number"
                          value={splitAmount}
                          onChange={(e) => setSplitAmount(Number(e.target.value))}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-900"
                        />
                      </div>

                      <div>
                        <label className="text-slate-500 block mb-1">Split Among ({numPeople} people)</label>
                        <div className="flex gap-2">
                          {[2, 3, 4, 6].map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => setNumPeople(p)}
                              className={`flex-1 py-1.5 rounded-lg font-semibold text-xs cursor-pointer ${
                                numPeople === p
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-slate-600 font-medium">Each Person Owes:</span>
                        <span className="text-base font-extrabold text-blue-700 tabular-nums">
                          ₹{Math.round(splitAmount / numPeople)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`Hey! Your share for CloudCrest Stayz is ₹${Math.round(splitAmount / numPeople)}. Pay via UPI: cloudcrest@okaxis`);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'UPI Payment Request Copied!' : 'Share WhatsApp UPI Split Link'}</span>
                  </button>
                </div>
              )}

              {activeTab === 'guide' && (
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>Offline Mountain Compass</span>
                    <span className="text-emerald-600 text-[10px] font-semibold">100% Offline GPS</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Pari Tibba (Witch's Hill) Trail</span>
                        <span className="text-slate-500 font-normal">1.8 km</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Quiet oak tree ridge with sunset views. Safe for solo walking before 6 PM.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Cafe de Piccolo</span>
                        <span className="text-slate-500 font-normal">800 m</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Artisan stone cottage cafe serving fresh waffles, hot cocoa, and mountain berries.
                      </p>
                    </div>

                    <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between text-xs text-rose-900">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                        <div>
                          <strong className="block font-semibold">Emergency SOS</strong>
                          <span className="text-[10px] text-rose-700">Mountain Rescue Direct Line</span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert('Emergency call triggered to CloudCrest On-Site Responder Desk!')}
                        className="px-2.5 py-1 bg-rose-600 text-white font-bold text-[11px] rounded cursor-pointer"
                      >
                        Call Desk
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 5-Tab Ergonomic Navigation Bar (Thumb Zone) */}
            <div className="bg-white border-t border-slate-200 grid grid-cols-5 py-2 px-1 text-center shrink-0">
              <button
                onClick={() => setActiveTab('key')}
                className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer ${
                  activeTab === 'key' ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <KeyRound className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Keycard</span>
              </button>

              <button
                onClick={() => setActiveTab('community')}
                className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer ${
                  activeTab === 'community' ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Community</span>
              </button>

              <button
                onClick={() => setActiveTab('concierge')}
                className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer ${
                  activeTab === 'concierge' ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Coffee className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Service</span>
              </button>

              <button
                onClick={() => setActiveTab('split')}
                className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer ${
                  activeTab === 'split' ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Share2 className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Split Bill</span>
              </button>

              <button
                onClick={() => setActiveTab('guide')}
                className={`flex flex-col items-center justify-center py-1 transition-colors cursor-pointer ${
                  activeTab === 'guide' ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Trails</span>
              </button>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="bg-white pb-2 pt-1 flex justify-center">
              <div className="w-28 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
