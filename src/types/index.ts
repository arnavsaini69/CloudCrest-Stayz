export type RoomCategory = 'all' | 'private' | 'hostel' | 'suite' | 'workation';

export interface Room {
  id: string;
  title: string;
  category: 'private' | 'hostel' | 'suite' | 'workation';
  price: number;
  originalPrice?: number;
  perUnit: 'night' | 'bed/night';
  maxGuests: number;
  bedType: string;
  bathType: string;
  sizeSqFt: number;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  amenities: string[];
  tags: string[];
  image: string;
  badge?: string;
  highlights: string[];
  availableUnits: number;
}

export interface BookingSearchState {
  location: string;
  checkin: string;
  checkout: string;
  guests: number;
  category: RoomCategory;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  per: 'night' | 'stay' | 'person';
  description: string;
}

export interface BookingConfirmation {
  bookingId: string;
  room: Room;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkin: string;
  checkout: string;
  guests: number;
  nights: number;
  selectedAddOns: string[];
  baseTotal: number;
  addOnsTotal: number;
  discount: number;
  taxes: number;
  grandTotal: number;
  createdAt: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Trek & Adventure' | 'Music & Social' | 'Work & Networking' | 'Wellness';
  spotsLeft: number;
  host: string;
  description: string;
  isComplimentary: boolean;
  imageFallbackLabel: string;
}

export interface GuestReview {
  id: string;
  author: string;
  location: string;
  travelerType: 'Solo Backpacker' | 'Digital Nomad' | 'Couple' | 'Group / Family';
  rating: number;
  stayDate: string;
  roomStayed: string;
  comment: string;
  verified: boolean;
}

export interface MobileAppPillar {
  id: string;
  pillar: string;
  title: string;
  badge: string;
  description: string;
  nativeAdvantage: string;
  features: string[];
}
