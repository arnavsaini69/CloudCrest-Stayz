import { Room, AddOnOption, CommunityEvent, GuestReview, MobileAppPillar } from '../types';

export const HERO_IMAGE = '/src/assets/images/cloudcrest_hero_resort_1793006619526.jpg';
export const DELUXE_ROOM_IMAGE = '/src/assets/images/cloudcrest_deluxe_room_1793006619910.jpg';
export const HOSTEL_DORM_IMAGE = '/src/assets/images/cloudcrest_hostel_dorm_1793006620247.jpg';
export const COMMON_LOUNGE_IMAGE = '/src/assets/images/cloudcrest_common_lounge_1793006620893.jpg';

export const ROOMS_DATA: Room[] = [
  {
    id: 'room-deluxe-double',
    title: 'Deluxe Himalayan Balcony Room',
    category: 'private',
    price: 2699,
    originalPrice: 3299,
    perUnit: 'night',
    maxGuests: 2,
    bedType: 'Queen Plush Ortho Bed',
    bathType: 'En-suite Rainfall Shower',
    sizeSqFt: 310,
    rating: 4.94,
    reviewCount: 382,
    description: 'Panoramic mountain view balcony, ergonomic cedar desk, crisp Egyptian linen and bespoke artisan tea bar.',
    longDescription: 'Designed for couples and mindful travelers seeking tranquility. Wake up to direct sunrise views over the Garhwal range, brew single-origin local teas, and unwind on your private teak-wood balcony facing pine valleys.',
    amenities: ['Private Sunrise Balcony', '250 Mbps Fiber Wi-Fi', 'En-suite Rain Shower', 'Bespoke Tea Bar', 'Smart HD TV', 'Daily Housekeeping'],
    tags: ['Couples Favorite', 'Mountain View', 'Private Bath'],
    image: DELUXE_ROOM_IMAGE,
    badge: 'Guest Favorite',
    highlights: ['Highest rated view on the property', 'Zero noise pollution zone', 'Dedicated workspace'],
    availableUnits: 3
  },
  {
    id: 'room-social-capsule',
    title: 'Social Capsule Dormitory Bed',
    category: 'hostel',
    price: 799,
    originalPrice: 999,
    perUnit: 'bed/night',
    maxGuests: 1,
    bedType: 'Oak Capsule Pod with Privacy Curtain',
    bathType: 'Shared Designer Bathrooms (4:1 ratio)',
    sizeSqFt: 55,
    rating: 4.88,
    reviewCount: 640,
    description: 'Custom acoustic timber capsule with blackout curtain, dual USB-C ports, biometric secure locker, and reading lamp.',
    longDescription: 'Built for backpackers and social explorers. Our custom acoustic timber capsules give you the privacy of a hotel with the community warmth of a hostel. Includes electronic RFID locker under the bed and access to our 24/7 common cafe.',
    amenities: ['RFID Digital Underbed Locker', 'Dual USB-C & Universal Plugs', 'Blackout Linen Drape', 'Warm Reading Beam', 'Linen & Towel Included', 'Free Luggage Storage'],
    tags: ['Backpacker Pick', 'Social Lounge Access', 'Budget Friendly'],
    image: HOSTEL_DORM_IMAGE,
    badge: 'Best Value',
    highlights: ['Curfew-free with digital keycard', 'Community events included', 'Power backup 24/7'],
    availableUnits: 6
  },
  {
    id: 'room-premium-suite',
    title: 'Grand Alpine Family & Group Suite',
    category: 'suite',
    price: 5499,
    originalPrice: 6500,
    perUnit: 'night',
    maxGuests: 5,
    bedType: '2 King Bedrooms + Sofa Bed',
    bathType: '2 Full Designer Bathrooms',
    sizeSqFt: 720,
    rating: 4.97,
    reviewCount: 145,
    description: 'Expansive two-bedroom sanctuary with living salon, warm kitchenette, panoramic 180° valley sundeck, and dining area.',
    longDescription: 'The pinnacle stay for visiting families or close friend circles. Featuring two king bedrooms, a full living lounge, fully fitted kitchenette, dining bar, and an expansive wraparound balcony overlooking the mist-laden peaks.',
    amenities: ['180° Valley View Terrace', 'Equipped Kitchenette', '2 Luxury En-suite Baths', 'Marshall Bluetooth Sound', 'Living & Dining Lounge', 'Reserved Stilt Parking'],
    tags: ['Family Choice', 'Kitchenette', 'Luxury Group Stay'],
    image: HERO_IMAGE,
    badge: 'Luxury Suite',
    highlights: ['Separate entry hallway', 'Dedicated concierge direct line', 'Full group dining setup'],
    availableUnits: 2
  },
  {
    id: 'room-nomad-loft',
    title: 'Nomad Workation Creator Loft',
    category: 'workation',
    price: 3199,
    originalPrice: 3800,
    perUnit: 'night',
    maxGuests: 2,
    bedType: 'Queen Cloud Bed + Daybed',
    bathType: 'Private Glass Shower with Geyser',
    sizeSqFt: 390,
    rating: 4.96,
    reviewCount: 219,
    description: 'Dedicated acoustic workspace with Herman Miller-style chair, external 27" 4K monitor, Starlink backup, and espresso pod brewer.',
    longDescription: 'Tailored for remote software engineers, founders, and creators doing deep work in the mountains. High-speed dual ISP fiber connection, dedicated ergonomic setup, natural skylight, and complimentary weekly laundry.',
    amenities: ['Dual Fiber + Starlink Failover', 'Ergonomic Desk & Chair', '27" 4K Type-C Monitor', 'Nespresso Coffee Machine', 'Private Terrace Balcony', 'Weekly Free Laundry (5kg)'],
    tags: ['Remote Work Ready', 'High-Speed Fiber', 'Ergonomic Setup'],
    image: COMMON_LOUNGE_IMAGE,
    badge: 'Nomad Favorite',
    highlights: ['Guaranteed 200+ Mbps up/down', 'Standing desk converter available', 'Quiet hours enforced in wing'],
    availableUnits: 4
  },
  {
    id: 'room-female-sanctuary',
    title: 'Women-Only Safe Haven Dorm Pod',
    category: 'hostel',
    price: 849,
    originalPrice: 1049,
    perUnit: 'bed/night',
    maxGuests: 1,
    bedType: 'Deluxe Sound-Dampened Pod',
    bathType: 'Attached Vanity & Hair Stations',
    sizeSqFt: 60,
    rating: 4.98,
    reviewCount: 312,
    description: 'Keycard-access-only wing with en-suite vanity mirrors, full salon blow-dryers, premium mattress, and oversized lockers.',
    longDescription: 'A dedicated female-only dormitory wing with double security keycard access. Equipped with luxury Hollywood vanity mirrors, Dyson hairdryers, organic apothecary toiletries, and generous luggage compartments.',
    amenities: ['Double Keycard Security Wing', 'Hollywood Vanity & Blowdryers', 'Organic Bath Amenities', 'Extra-Large Travel Locker', 'Full Length Wardrobe Mirror', 'Complimentary Herbal Tea'],
    tags: ['Solo Female Friendly', 'En-suite Vanity', 'High Security'],
    image: HOSTEL_DORM_IMAGE,
    badge: 'Top Safety Pick',
    highlights: ['Verified female travelers only', 'En-suite dressing vanity', 'Full privacy soundproofing'],
    availableUnits: 5
  }
];

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'addon-breakfast',
    name: 'Artisan Pahadi & Continental Breakfast',
    price: 299,
    per: 'night',
    description: 'Fresh farm eggs, organic local jams, sourdough toast, steaming parathas, and single-origin estate coffee.'
  },
  {
    id: 'addon-cowork',
    name: 'Dedicated 250Mbps Co-working Hotdesk Pass',
    price: 199,
    per: 'night',
    description: 'Reserved quiet desk in the panoramic glass glasshouse cafe with unlimited artisanal tea/filter coffee.'
  },
  {
    id: 'addon-shuttle',
    name: 'Private Airport / Railway Station Pickup (Dehradun)',
    price: 750,
    per: 'stay',
    description: 'Chauffeured scenic drive in a sanitized electric/sedan cab directly to our front porch.'
  },
  {
    id: 'addon-trek',
    name: 'Guided Cloud Forest & Secret Ridge Trek',
    price: 499,
    per: 'person',
    description: '3-hour guided nature trail led by local mountaineer with trail snacks and birdwatching gear.'
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'evt-bonfire',
    title: 'Twilight Bonfire & Acoustic Jam',
    date: 'Every Tuesday & Saturday',
    time: '7:30 PM - 10:30 PM',
    location: 'Open Stone Firedeck',
    category: 'Music & Social',
    spotsLeft: 8,
    host: 'Aarav (Resident Singer & Host)',
    description: 'Gather around the pine wood fire with fellow travelers, roasted marshmallows, indie tunes, and hot spiced chai under a starry mountain sky.',
    isComplimentary: true,
    imageFallbackLabel: 'Firepit Jam'
  },
  {
    id: 'evt-trek',
    title: 'Himalayan Ridge Sunrise Trail',
    date: 'Mon, Wed, Fri',
    time: '5:45 AM - 8:30 AM',
    location: 'Starts at Trailhead Deck',
    category: 'Trek & Adventure',
    spotsLeft: 5,
    host: 'Prakash (Certified Himalayan Guide)',
    description: 'Crisp morning hike through rhododendron and deodar forests up to an undiscovered cliff edge overlooking the snow peaks of Nanda Devi.',
    isComplimentary: false,
    imageFallbackLabel: 'Alpine Trail'
  },
  {
    id: 'evt-cowork',
    title: 'Digital Nomads & Founders Pitch & Chai',
    date: 'Every Thursday',
    time: '5:00 PM - 6:30 PM',
    location: 'Glasshouse Co-work Lounge',
    category: 'Work & Networking',
    spotsLeft: 12,
    host: 'Devika (CloudCrest Community Lead)',
    description: 'Casual showcase where creators, indie hackers, designers, and remote workers share what they are building over mountain herb teas.',
    isComplimentary: true,
    imageFallbackLabel: 'Nomad Mixer'
  },
  {
    id: 'evt-yoga',
    title: 'Sun Salutations & Breathwork on Valley Deck',
    date: 'Daily Morning',
    time: '7:00 AM - 8:00 AM',
    location: 'Sunrise Yoga Platform',
    category: 'Wellness',
    spotsLeft: 10,
    host: 'Meenakshi (Rishikesh Certified Yogini)',
    description: 'Gentle mindful stretching and pranayama overlooking the morning mist rising through the valley. Mats and herbal water provided.',
    isComplimentary: true,
    imageFallbackLabel: 'Morning Yoga'
  }
];

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    author: 'Aisha & Nikhil K.',
    location: 'Mumbai',
    travelerType: 'Couple',
    rating: 5,
    stayDate: 'Stayed October 2026',
    roomStayed: 'Deluxe Himalayan Balcony Room',
    comment: 'The booking experience was effortless and the balcony view exceeded every expectation. Waking up to the mist rolling over the pines with hot chai was magical. The staff arranged our scooter rental in 10 minutes flat.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Julian Vance',
    location: 'Berlin / Remote',
    travelerType: 'Digital Nomad',
    rating: 5,
    stayDate: 'Stayed 3 weeks (Workation)',
    roomStayed: 'Nomad Workation Creator Loft',
    comment: 'Best co-working stay in the lower Himalayas. The fiber connection never dropped once during Zoom client calls, the ergonomic chair was a lifesaver, and the evening acoustic bonfire brought people from 12 different countries together.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Tanvi Deshmukh',
    location: 'Pune',
    travelerType: 'Solo Backpacker',
    rating: 5,
    stayDate: 'Stayed September 2026',
    roomStayed: 'Women-Only Safe Haven Dorm Pod',
    comment: 'As a solo female traveler, safety and clean hygiene are my top priorities. The biometric access, huge lockers, and vanity dressing room felt like a luxury hotel. Made lifelong friends on the sunrise ridge trek!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Dr. Alok Sengupta',
    location: 'Kolkata',
    travelerType: 'Group / Family',
    rating: 5,
    stayDate: 'Stayed October 2026',
    roomStayed: 'Grand Alpine Family Suite',
    comment: 'Traveled with my elderly parents and kids. Having two large bedrooms and our own kitchenette made all the difference. Superb hospitality, immaculate cleanliness, and zero hidden charges.',
    verified: true
  }
];

export const MOBILE_APP_PILLARS: MobileAppPillar[] = [
  {
    id: 'pillar-keyless',
    pillar: '1. Contactless Hardware & Check-In',
    title: 'Digital Bluetooth / NFC Keycard & Express Arrival',
    badge: 'Hardware Powered',
    description: 'Guests can bypass the front desk queue entirely upon arrival. The mobile app automatically verifies their ID and turns their smartphone into a secure digital door key via BLE/NFC and dynamic Apple/Google Wallet room passes.',
    nativeAdvantage: 'Leverages phone NFC, Bluetooth Low Energy, and Secure Enclave biometrics.',
    features: [
      'Self-check-in in 30 seconds with instant photo ID OCR verification',
      'One-tap door unlock via Bluetooth or Wallet pass',
      'Secondary guest key sharing via WhatsApp or link',
      'Automated checkout with 1-click room release'
    ]
  },
  {
    id: 'pillar-community',
    pillar: '2. Resident Social Network',
    title: 'CloudCrest Nomad Tribe & Verified In-House Chat',
    badge: 'Community Core',
    description: 'A private geo-fenced social network strictly for currently checked-in guests. Backpackers and nomads can see who is staying at the property, organize shared cab rides to Rishikesh, match for badminton or treks, and RSVP for common room events.',
    nativeAdvantage: 'Push notifications for flash bonfires, geo-fencing for verified in-stay privacy.',
    features: [
      'Checked-in guest directory with travel badges (e.g. Designer, Hiker, Dev)',
      'Ride-share & trek matching board to split local cab expenses',
      '1-tap RSVP for evening bonfires, live jams, and yoga sessions',
      'Real-time common room buzz & board game meetup calls'
    ]
  },
  {
    id: 'pillar-concierge',
    pillar: '3. In-Stay Touch Concierge',
    title: '2-Tap Room Service, Housekeeping & Direct Desk Chat',
    badge: 'Zero Friction',
    description: 'No more dialing intercom 9 and waiting. Guests can order artisanal hot drinks, request extra towels, schedule luggage storage, or message the duty manager directly via native instant chat with live status tracking.',
    nativeAdvantage: 'Real-time WebSockets, push alerts for order updates, background sync.',
    features: [
      'In-app cafe ordering with delivery right to dorm pod or private balcony',
      'Predictive housekeeping requests (Fresh towels, duvet change, toiletries)',
      'Direct chat with 24/7 mountain desk manager with <2 min SLA',
      'Late checkout extensions with dynamic automated rate calculation'
    ]
  },
  {
    id: 'pillar-bill',
    pillar: '4. Group Splitting & Fintech',
    title: 'Split-with-Friends & One-Click UPI Dorm Checkout',
    badge: 'Fintech Native',
    description: 'Hostels frequently face awkward bill splitting when groups or solo travelers book together. The mobile app features a built-in bill split engine that divides room nights, cafe tabs, and trek fees across roommates in one tap via UPI / cards.',
    nativeAdvantage: 'Deep integration with UPI apps (GPay, PhonePe, Paytm) and Apple Pay.',
    features: [
      'Split dorm booking instantly with roomies via payment links',
      'Consolidated folio tab: charge cafe and treks to room and settle at checkout',
      'Instant GST invoice download to PDF for corporate business expense claims',
      'Nomad loyalty coin balance earned per night stayed and redeemable on perks'
    ]
  },
  {
    id: 'pillar-guide',
    pillar: '5. Offline Mountain Compass',
    title: 'Offline Himalayan Trail Compass & Secret Local Spots',
    badge: 'Works Without Signal',
    description: 'Mountain cell reception drops frequently on ridges. The CloudCrest app downloads offline topographic trail maps, local cafe recommendations, emergency mountain rescue contacts, and curated sunrise viewpoints that work 100% offline.',
    nativeAdvantage: 'Offline SQLite / CoreData storage, GPS compass tracking without cellular data.',
    features: [
      'Offline trail map with live GPS waypoint navigation',
      'Curated list of vetted mountain cafes, bakeries, and sunset spots',
      'One-touch SOS button with GPS coordinate SMS to emergency desk',
      'Curfew-free front gate security code offline access'
    ]
  }
];

export const VENTURE_AUDIT_COMPARISONS = [
  {
    aspect: 'Visual First Impression & Photography',
    current: 'Broken image paths (images/logo.png, room-deluxe.jpg), default browser fallbacks, flat corporate blue.',
    recommended: 'Atmospheric high-res editorial photography, warm ambient lighting, misty Himalayan ridge backdrop, Plus Jakarta Sans typography.',
    status: 'Transformed in New Build'
  },
  {
    aspect: 'Booking & Inventory Engine',
    current: 'Static HTML form with generic alert("Thanks! Checking availability...") with no room rates, dates math, or confirmation voucher.',
    recommended: 'Interactive booking engine with live date-picker, duration calculation, transparent GST breakdown, add-on customization, and downloadable instant booking voucher.',
    status: 'Fully Implemented'
  },
  {
    aspect: 'Audience Dual Positioning (Hostel vs Boutique)',
    current: 'Mixed cards with basic bullet points; lacks distinct emotional hook for backpackers vs workationers vs luxury couples.',
    recommended: 'Segmented tabs (Private Balcony Rooms, Social Capsule Dorms, Family Suites, Nomad Lofts) with dedicated amenity specifications (250Mbps Fiber, soundproofing, RFID lockers).',
    status: 'Engineered & Filterable'
  },
  {
    aspect: 'Social & Community Proof',
    current: '3 brief static text quotes without dates, room types, or verified proof.',
    recommended: 'Filterable guest reviews with traveler personas (Solo Backpacker, Nomad, Couple, Family), verified badges, plus live Community Events board (Bonfire, Yoga, Treks).',
    status: 'Integrated with Live RSVP'
  },
  {
    aspect: 'Mobile App Strategy & Engagement',
    current: 'No mobile app mentioned; no retention mechanics or in-stay guest touchpoints.',
    recommended: 'Dedicated 5-pillar native mobile app strategy (Keyless Entry, Nomad Tribe Social Feed, In-Stay Concierge, Split-Bill UPI, Offline Trail Compass) with live interactive simulator.',
    status: 'Included with Live Interactive Simulator'
  }
];
