/**
 * HostelMatch – Smart Student Hostel & PG Recommendation System
 * Frontend Application Logic with Live Interactive Map & Admin Dashboard
 */

// ============================================================================
// 1. DATASETS: Colleges and Real Hostels
// ============================================================================

const COLLEGES_DATA = [
  // --- Zone 1: Premier & Central Institutes ---
  {
    id: "iit_bombay",
    name: "IIT Bombay (Powai)",
    shortName: "IIT Bombay",
    zone: "Premier Institutes",
    lat: 19.1334,
    lng: 72.9133,
    city: "Mumbai",
    area: "Powai, Mumbai",
    type: "Institute of National Importance"
  },
  {
    id: "vjti_matunga",
    name: "VJTI - Veermata Jijabai Technological Institute (Matunga)",
    shortName: "VJTI Matunga",
    zone: "Premier Institutes",
    lat: 19.0222,
    lng: 72.8561,
    city: "Mumbai",
    area: "H.R. Mahajani Rd, Matunga",
    type: "Autonomous Govt-Aided Engineering College"
  },
  {
    id: "ict_mumbai",
    name: "ICT Mumbai - Institute of Chemical Technology (Matunga)",
    shortName: "ICT Mumbai",
    zone: "Premier Institutes",
    lat: 19.0238,
    lng: 72.8586,
    city: "Mumbai",
    area: "Nathalal Parekh Marg, Matunga",
    type: "Deemed Tech University"
  },
  {
    id: "mu_kalina",
    name: "University of Mumbai - Tech & Sciences Campus (Kalina)",
    shortName: "MU Kalina",
    zone: "Premier Institutes",
    lat: 19.0748,
    lng: 72.8682,
    city: "Mumbai",
    area: "Vidyanagari, Kalina, Santacruz East",
    type: "State University Engineering & Tech"
  },

  // --- Zone 2: Western Suburbs (Andheri, Vile Parle, Bandra, Juhu) ---
  {
    id: "spit_andheri",
    name: "SPIT - Sardar Patel Institute of Technology (Andheri West)",
    shortName: "SPIT Andheri",
    zone: "Western Suburbs",
    lat: 19.1232,
    lng: 72.8360,
    city: "Mumbai",
    area: "Bhavan's Campus, Munshi Nagar, Andheri West",
    type: "Autonomous Engineering College"
  },
  {
    id: "spce_andheri",
    name: "SPCE - Sardar Patel College of Engineering (Andheri West)",
    shortName: "SPCE Andheri",
    zone: "Western Suburbs",
    lat: 19.1238,
    lng: 72.8364,
    city: "Mumbai",
    area: "Bhavan's Campus, Munshi Nagar, Andheri West",
    type: "Autonomous Govt-Aided Engineering College"
  },
  {
    id: "djsanghvi",
    name: "D.J. Sanghvi College of Engineering (Vile Parle West)",
    shortName: "DJ Sanghvi",
    zone: "Western Suburbs",
    lat: 19.1075,
    lng: 72.8372,
    city: "Mumbai",
    area: "J.V.P.D. Scheme, Vile Parle West",
    type: "Autonomous Engineering College"
  },
  {
    id: "nmims_mpstme",
    name: "NMIMS MPSTME - Mukesh Patel School of Technology (Vile Parle)",
    shortName: "MPSTME NMIMS",
    zone: "Western Suburbs",
    lat: 19.1030,
    lng: 72.8360,
    city: "Mumbai",
    area: "JVPD Scheme, Vile Parle West",
    type: "Deemed Engineering University"
  },
  {
    id: "tsec_bandra",
    name: "Thadomal Shahani Engineering College - TSEC (Bandra West)",
    shortName: "TSEC Bandra",
    zone: "Western Suburbs",
    lat: 19.0645,
    lng: 72.8358,
    city: "Mumbai",
    area: "Linking Road, Bandra West",
    type: "Premier Engineering College"
  },
  {
    id: "crce_bandra",
    name: "Fr. CRCE - Fr. Conceicao Rodrigues College of Engg (Bandra Bandstand)",
    shortName: "Fr. Agnel Bandra",
    zone: "Western Suburbs",
    lat: 19.0441,
    lng: 72.8207,
    city: "Mumbai",
    area: "Bandstand, Bandra West",
    type: "Engineering College"
  },
  {
    id: "rizvi_bandra",
    name: "Rizvi College of Engineering (Bandra West)",
    shortName: "Rizvi Engg Bandra",
    zone: "Western Suburbs",
    lat: 19.0680,
    lng: 72.8270,
    city: "Mumbai",
    area: "Carter Rd, Bandra West",
    type: "Engineering College"
  },
  {
    id: "rgit_versova",
    name: "RGIT - Rajiv Gandhi Institute of Technology (Versova, Andheri West)",
    shortName: "RGIT Versova",
    zone: "Western Suburbs",
    lat: 19.1350,
    lng: 72.8180,
    city: "Mumbai",
    area: "Juhu Versova Link Rd, Andheri West",
    type: "Engineering College"
  },
  {
    id: "umit_sndt_juhu",
    name: "UMIT - Usha Mittal Institute of Technology (SNDT Juhu)",
    shortName: "UMIT Juhu (Women)",
    zone: "Western Suburbs",
    lat: 19.0965,
    lng: 72.8300,
    city: "Mumbai",
    area: "SNDT Campus, Juhu Rd, Santacruz West",
    type: "Engineering College for Women"
  },

  // --- Zone 3: Northern Suburbs (Borivali, Kandivali, Malad) ---
  {
    id: "tcet_kandivali",
    name: "TCET - Thakur College of Engineering & Technology (Kandivali East)",
    shortName: "TCET Kandivali",
    zone: "Northern Suburbs",
    lat: 19.2060,
    lng: 72.8735,
    city: "Mumbai",
    area: "Thakur Educational Campus, Kandivali East",
    type: "Autonomous Engineering College"
  },
  {
    id: "atharva_malad",
    name: "Atharva College of Engineering (Malad West)",
    shortName: "Atharva Malad",
    zone: "Northern Suburbs",
    lat: 19.1960,
    lng: 72.8290,
    city: "Mumbai",
    area: "Malad-Marve Rd, Charkop, Malad West",
    type: "Engineering College"
  },
  {
    id: "sfit_borivali",
    name: "SFIT - St. Francis Institute of Technology (Borivali West)",
    shortName: "SFIT Borivali",
    zone: "Northern Suburbs",
    lat: 19.2450,
    lng: 72.8540,
    city: "Mumbai",
    area: "Mount Poinsur, S.V.P. Road, Borivali West",
    type: "Engineering College"
  },

  // --- Zone 4: Central & Eastern Suburbs (Vidyavihar, Chembur, Kurla, Wadala, Sion) ---
  {
    id: "kjsce_vidyavihar",
    name: "K.J. Somaiya College of Engineering - KJSCE (Vidyavihar)",
    shortName: "K.J. Somaiya Vidyavihar",
    zone: "Central & Eastern Suburbs",
    lat: 19.0726,
    lng: 72.8996,
    city: "Mumbai",
    area: "Vidyanagar, Vidyavihar East",
    type: "Autonomous Engineering College"
  },
  {
    id: "kjsieit_sion",
    name: "K.J. Somaiya Institute of Engineering & IT - KJSIEIT (Sion)",
    shortName: "Somaiya Sion",
    zone: "Central & Eastern Suburbs",
    lat: 19.0463,
    lng: 72.8716,
    city: "Mumbai",
    area: "Ayurvihar Complex, Everard Nagar, Sion",
    type: "Autonomous Engineering College"
  },
  {
    id: "vesit_chembur",
    name: "VESIT - Vivekanand Education Society's Institute of Tech (Chembur)",
    shortName: "VESIT Chembur",
    zone: "Central & Eastern Suburbs",
    lat: 19.0450,
    lng: 72.8890,
    city: "Mumbai",
    area: "Collector's Colony, Chembur",
    type: "Autonomous Engineering College"
  },
  {
    id: "sakec_chembur",
    name: "Shah & Anchor Kutchhi Engineering College - SAKEC (Chembur)",
    shortName: "SAKEC Chembur",
    zone: "Central & Eastern Suburbs",
    lat: 19.0538,
    lng: 72.9126,
    city: "Mumbai",
    area: "W.T. Patil Marg, Chembur",
    type: "Engineering College"
  },
  {
    id: "vit_wadala",
    name: "VIT - Vidyalankar Institute of Technology (Wadala East)",
    shortName: "VIT Wadala",
    zone: "Central & Eastern Suburbs",
    lat: 19.0218,
    lng: 72.8710,
    city: "Mumbai",
    area: "Sangam Nagar, Wadala East",
    fullAddress: "Vidyalankar Educational Campus, Vidyalankar College Road, Sangam Nagar, Wadala (East), Mumbai 400037",
    landmarks: "Near Dosti Acres, Eastern Freeway Wadala Exit, Sangam Nagar",
    transit: [
      { mode: "train", title: "Harbour Line Local Trains", detail: "Wadala Road Station (~1.8 km) & GTB Nagar Station (~1.7 km)" },
      { mode: "train", title: "Central & Western Lines", detail: "Dadar Junction (~4.5 km) with direct BEST bus & shared taxi connectivity" },
      { mode: "monorail", title: "Mumbai Monorail", detail: "Bhakti Park & Wadala Bridge Monorail Stations (~1.5 km)" },
      { mode: "road", title: "Eastern Freeway", detail: "Direct Eastern Freeway Wadala Ramp (~800 m) connecting to South Mumbai & Chembur" }
    ],
    type: "Autonomous Engineering College"
  },
  {
    id: "dbit_kurla",
    name: "DBIT - Don Bosco Institute of Technology (Kurla West)",
    shortName: "DBIT Kurla",
    zone: "Central & Eastern Suburbs",
    lat: 19.0805,
    lng: 72.8885,
    city: "Mumbai",
    area: "Premier Automobiles Road, Kurla West",
    type: "Engineering College"
  },

  // --- Zone 5: South Mumbai ---
  {
    id: "saboo_siddik",
    name: "M.H. Saboo Siddik College of Engineering (Byculla)",
    shortName: "Saboo Siddik Byculla",
    zone: "South Mumbai",
    lat: 18.9680,
    lng: 72.8295,
    city: "Mumbai",
    area: "8 Shepherd Rd, Nagpada, Byculla",
    type: "Engineering College"
  },

  // --- Zone 6: Navi Mumbai Hub ---
  {
    id: "fcrit_vashi",
    name: "FCRIT - Fr. C. Rodrigues Institute of Technology (Vashi)",
    shortName: "FCRIT Vashi",
    zone: "Navi Mumbai Hub",
    lat: 19.0770,
    lng: 72.9980,
    city: "Navi Mumbai",
    area: "Sector 9A, Vashi",
    type: "Autonomous Engineering College"
  },
  {
    id: "sies_nerul",
    name: "SIES Graduate School of Technology (Nerul)",
    shortName: "SIES GST Nerul",
    zone: "Navi Mumbai Hub",
    lat: 19.0370,
    lng: 73.0180,
    city: "Navi Mumbai",
    area: "Sector V, Nerul, Navi Mumbai",
    type: "Engineering College"
  },
  {
    id: "rait_nerul",
    name: "RAIT - Ramrao Adik Institute of Tech / D.Y. Patil (Nerul)",
    shortName: "RAIT D.Y. Patil Nerul",
    zone: "Navi Mumbai Hub",
    lat: 19.0435,
    lng: 73.0245,
    city: "Navi Mumbai",
    area: "Sector 7, D.Y. Patil Vidyanagar, Nerul",
    type: "Engineering & Tech Campus"
  },
  {
    id: "terna_nerul",
    name: "Terna Engineering College (Nerul)",
    shortName: "Terna Engg Nerul",
    zone: "Navi Mumbai Hub",
    lat: 19.0340,
    lng: 73.0200,
    city: "Navi Mumbai",
    area: "Sector 22, Opp. Nerul Railway Station",
    type: "Engineering College"
  },
  {
    id: "bvcoe_kharghar",
    name: "Bharati Vidyapeeth College of Engineering - BVCOE (Kharghar)",
    shortName: "BVCOE Kharghar",
    zone: "Navi Mumbai Hub",
    lat: 19.0250,
    lng: 73.0560,
    city: "Navi Mumbai",
    area: "Sector 7, Belapur / Kharghar",
    type: "Engineering College"
  },
  {
    id: "scoe_kharghar",
    name: "Saraswati College of Engineering - SCOE (Kharghar)",
    shortName: "Saraswati Kharghar",
    zone: "Navi Mumbai Hub",
    lat: 19.0480,
    lng: 73.0720,
    city: "Navi Mumbai",
    area: "Sector 5, Kharghar",
    type: "Engineering College"
  },
  {
    id: "pillai_panvel",
    name: "Pillai College of Engineering - PCE (New Panvel)",
    shortName: "Pillai Panvel",
    zone: "Navi Mumbai Hub",
    lat: 18.9902,
    lng: 73.1277,
    city: "Navi Mumbai",
    area: "Sector 16, New Panvel",
    type: "Autonomous Engineering College"
  },
  {
    id: "dmce_airoli",
    name: "Datta Meghe College of Engineering - DMCE (Airoli)",
    shortName: "DMCE Airoli",
    zone: "Navi Mumbai Hub",
    lat: 19.1585,
    lng: 72.9980,
    city: "Navi Mumbai",
    area: "Sector 3, Airoli, Navi Mumbai",
    type: "Engineering College"
  },
  {
    id: "ltce_koparkhairane",
    name: "Lokmanya Tilak College of Engineering - LTCE (Koparkhairane)",
    shortName: "LTCE Koparkhairane",
    zone: "Navi Mumbai Hub",
    lat: 19.1060,
    lng: 73.0110,
    city: "Navi Mumbai",
    area: "Sector 4, Koparkhairane",
    type: "Engineering College"
  },
  {
    id: "aiktc_panvel",
    name: "Anjuman-I-Islam's Kalsekar Technical Campus - AIKTC (Panvel)",
    shortName: "AIKTC Panvel",
    zone: "Navi Mumbai Hub",
    lat: 18.9985,
    lng: 73.1420,
    city: "Navi Mumbai",
    area: "Sector 16, New Panvel",
    type: "Technical & Engineering Campus"
  },

  // --- Zone 7: Thane & Extended Suburbs ---
  {
    id: "apsit_thane",
    name: "A.P. Shah Institute of Technology - APSIT (Thane West)",
    shortName: "APSIT Thane",
    zone: "Thane & Extended Suburbs",
    lat: 19.2680,
    lng: 72.9680,
    city: "Thane",
    area: "Ghodbunder Rd, Kasarvadavali, Thane West",
    type: "Engineering College"
  },
  {
    id: "kc_coe_thane",
    name: "K.C. College of Engineering & Management Studies (Thane East)",
    shortName: "KC College Thane",
    zone: "Thane & Extended Suburbs",
    lat: 19.1820,
    lng: 72.9810,
    city: "Thane",
    area: "Mith Bunder Road, Kopri, Thane East",
    type: "Engineering College"
  },
  {
    id: "vcet_vasai",
    name: "Vidyavardhini's College of Engineering & Tech - VCET (Vasai Road)",
    shortName: "VCET Vasai",
    zone: "Thane & Extended Suburbs",
    lat: 19.3830,
    lng: 72.8280,
    city: "Palghar / Vasai",
    area: "K.T. Marg, Vasai Road West",
    type: "Engineering College"
  },
  {
    id: "universal_vasai",
    name: "Universal College of Engineering (Vasai / Kaman)",
    shortName: "Universal Vasai",
    zone: "Thane & Extended Suburbs",
    lat: 19.3450,
    lng: 72.9350,
    city: "Palghar / Vasai",
    area: "Kaman Bhiwandi Rd, Vasai",
    type: "Engineering College"
  },
  {
    id: "jondhale_dombivli",
    name: "Shivajirao S. Jondhale College of Engineering (Dombivli)",
    shortName: "Jondhale Dombivli",
    zone: "Thane & Extended Suburbs",
    lat: 19.2230,
    lng: 73.0880,
    city: "Kalyan / Dombivli",
    area: "Behind Vasar Gaon, Dombivli East",
    type: "Engineering College"
  }
];

const INITIAL_HOSTELS_DATA = [
  {
    "id": 1,
    "name": "VJTI Campus Hostels (Blocks A, B, C, D)",
    "category": "govt_hostel",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Matunga East",
    "address": "VJTI Campus, H.R. Mahajani Marg, Matunga East, Mumbai 400019",
    "lat": 19.02250,
    "lng": 72.85680,
    "price": 3500,
    "deposit": 6000,
    "rooms": { "double": 4500, "triple": 3500, "dorm": 2800 },
    "rating": 4.5,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "fast_filling",
    "available_beds": 6,
    "phone": "+91 22 2419 8100",
    "cover_image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "about": "Official on-campus engineering hostel for Veermata Jijabai Technological Institute (VJTI) and ICT students. Includes subsidized mess meals, 24/7 security, high-speed campus LAN/WiFi, and reading rooms.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup", "gym"]
  },
  {
    "id": 2,
    "name": "IIT Bombay On-Campus Student Hostels (H-12 to H-16)",
    "category": "college_hostel",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Powai Campus",
    "address": "Hostel Zone, IIT Bombay Main Campus, Powai, Mumbai 400076",
    "lat": 19.13500,
    "lng": 72.91400,
    "price": 4200,
    "deposit": 8000,
    "rooms": { "single": 6000, "double": 4200 },
    "rating": 4.9,
    "safety_score": 5.0,
    "verified": true,
    "verification_date": "2026-10-19",
    "availability": "available",
    "available_beds": 12,
    "phone": "+91 22 2576 7000",
    "cover_image": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    "about": "Premier residential student hostels situated inside the IIT Bombay Powai campus. High-speed academic network, mess halls serving hygienic balanced meals, Olympic-grade sports access, and hospital facilities.",
    "amenities": ["wifi", "meals", "study_room", "security", "gym", "power_backup", "attached_washroom"]
  },
  {
    "id": 3,
    "name": "Dosti Acres Student Accommodations (Near VIT Mumbai)",
    "category": "private_pg",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Sangam Nagar, Wadala East",
    "address": "Dosti Flamingos & Aster, Dosti Acres, Vidyalankar College Road, Wadala East, Mumbai 400037",
    "lat": 19.02320,
    "lng": 72.87320,
    "price": 8800,
    "deposit": 18000,
    "rooms": { "single": 15000, "double": 11000, "triple": 8800 },
    "rating": 4.8,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 5,
    "phone": "+91 98201 44520",
    "cover_image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "about": "Premier student accommodation located inside the gated Dosti Acres complex, just 350 meters from Vidyalankar Institute of Technology (VIT Wadala). Fully furnished AC bedrooms, pure vegetarian home-style mess, biometric access, and high-speed fiber WiFi.",
    "amenities": ["wifi", "ac", "meals", "laundry", "gym", "study_room", "security", "power_backup", "attached_washroom", "biometric"]
  },
  {
    "id": 4,
    "name": "Your-Space Powai (Kanjurmarg / Hiranandani)",
    "category": "private_pg",
    "gender": "coed",
    "food": "veg_nonveg",
    "area": "Hiranandani Gardens, Powai",
    "address": "Near Bayer House, Central Avenue, Hiranandani Gardens, Powai, Mumbai 400076",
    "lat": 19.12200,
    "lng": 72.91200,
    "price": 12500,
    "deposit": 25000,
    "rooms": { "single": 22000, "double": 15500, "triple": 12500 },
    "rating": 4.7,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-17",
    "availability": "available",
    "available_beds": 8,
    "phone": "+91 84488 44400",
    "cover_image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "about": "Official Your-Space student residence in Powai. Tailored for IIT Bombay scholars and young techies. Offers Chef-cooked meals, gym, silent study pods, laundry, housekeeping, and round-the-clock female & male security guards.",
    "amenities": ["wifi", "ac", "meals", "laundry", "gym", "study_room", "security", "power_backup", "attached_washroom", "biometric"]
  },
  {
    "id": 5,
    "name": "Stanza Living Santa Fe House (JVPD Scheme, Vile Parle)",
    "category": "private_pg",
    "gender": "girls",
    "food": "pure_veg",
    "area": "JVPD Scheme, Vile Parle West",
    "address": "Gulmohar Cross Road 7, Near NMIMS MPSTME & DJ Sanghvi, Vile Parle West, Mumbai 400049",
    "lat": 19.10600,
    "lng": 72.83900,
    "price": 14500,
    "deposit": 28000,
    "rooms": { "single": 24000, "double": 18000, "triple": 14500 },
    "rating": 4.8,
    "safety_score": 5.0,
    "verified": true,
    "verification_date": "2026-10-19",
    "availability": "fast_filling",
    "available_beds": 3,
    "phone": "+91 80460 07700",
    "cover_image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "about": "Premium Stanza Living girls residence situated 5 minutes walking distance from NMIMS MPSTME and D.J. Sanghvi College of Engineering. Includes biometric check-in, dedicated Jain & pure vegetarian food mess, high-speed WiFi, and daily housekeeping.",
    "amenities": ["wifi", "ac", "meals", "laundry", "study_room", "security", "power_backup", "biometric", "attached_washroom"]
  },
  {
    "id": 6,
    "name": "Your-Space Vile Parle (10th Road JVPD)",
    "category": "private_pg",
    "gender": "boys",
    "food": "pure_veg",
    "area": "JVPD Scheme, Vile Parle West",
    "address": "10th Road, Near Juhu Circle, JVPD Scheme, Vile Parle West, Mumbai 400049",
    "lat": 19.10850,
    "lng": 72.83500,
    "price": 13800,
    "deposit": 26000,
    "rooms": { "single": 23000, "double": 17500, "triple": 13800 },
    "rating": 4.6,
    "safety_score": 4.8,
    "verified": true,
    "verification_date": "2026-10-15",
    "availability": "available",
    "available_beds": 4,
    "phone": "+91 84488 44401",
    "cover_image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "about": "Modern Your-Space co-living for boys attending D.J. Sanghvi, SPIT, and NMIMS. Air-conditioned rooms, hot nutritious vegetarian meals, power backup, study lounge, and regular recreational events.",
    "amenities": ["wifi", "ac", "meals", "laundry", "study_room", "security", "power_backup", "biometric"]
  },
  {
    "id": 7,
    "name": "Bhavan's Campus Student Hostels (SPIT & SPCE)",
    "category": "college_hostel",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Munshi Nagar, Andheri West",
    "address": "Bhavan's College Campus, Munshi Nagar, Dadabhai Road, Andheri West, Mumbai 400058",
    "lat": 19.12400,
    "lng": 72.83500,
    "price": 7500,
    "deposit": 15000,
    "rooms": { "single": 13000, "double": 9500, "triple": 7500 },
    "rating": 4.6,
    "safety_score": 4.8,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 7,
    "phone": "+91 22 2628 7250",
    "cover_image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "about": "Official campus accommodation serving Sardar Patel Institute of Technology (SPIT) and SPCE engineering candidates. Peaceful lush green campus, library access, home-cooked food, and strict security protocol.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup", "attached_washroom"]
  },
  {
    "id": 8,
    "name": "K.J. Somaiya Sandipani & Maitreyi Hostels (Vidyavihar)",
    "category": "college_hostel",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Vidyavihar East",
    "address": "Somaiya Vidyavihar University Campus, Vidyavihar East, Mumbai 400077",
    "lat": 19.07350,
    "lng": 72.89850,
    "price": 6800,
    "deposit": 14000,
    "rooms": { "single": 12000, "double": 8500, "triple": 6800 },
    "rating": 4.7,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-16",
    "availability": "fast_filling",
    "available_beds": 4,
    "phone": "+91 22 6728 3000",
    "cover_image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    "about": "Official on-campus student residences for K.J. Somaiya College of Engineering (KJSCE) students. Features expansive campus lawns, Jain & vegetarian dining facilities, running track, and 24-hour reading rooms.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup", "gym", "attached_washroom"]
  },
  {
    "id": 9,
    "name": "Telang Memorial Hostel (Matunga Central)",
    "category": "college_hostel",
    "gender": "boys",
    "food": "pure_veg",
    "area": "Hindu Colony, Matunga",
    "address": "Sir Bhalchandra Road, Hindu Colony, Matunga East, Mumbai 400019",
    "lat": 19.02650,
    "lng": 72.85400,
    "price": 5200,
    "deposit": 10000,
    "rooms": { "double": 6800, "triple": 5200 },
    "rating": 4.4,
    "safety_score": 4.6,
    "verified": true,
    "verification_date": "2026-10-14",
    "availability": "available",
    "available_beds": 5,
    "phone": "+91 22 2414 3218",
    "cover_image": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80",
    "about": "Historic and reputed student hostel in central Matunga, minutes from VJTI, ICT, and Ruia College. Offers subsidized pure vegetarian meals, peaceful environment, and high-speed broadband.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup"]
  },
  {
    "id": 10,
    "name": "Zolo Amber (Wadala / Dadar East Hub)",
    "category": "private_pg",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Wadala East",
    "address": "Barkat Ali Dargah Road, Near Wadala Monorail Bridge, Wadala East, Mumbai 400037",
    "lat": 19.01950,
    "lng": 72.86200,
    "price": 7500,
    "deposit": 15000,
    "rooms": { "single": 13500, "double": 9500, "triple": 7500 },
    "rating": 4.5,
    "safety_score": 4.7,
    "verified": true,
    "verification_date": "2026-10-17",
    "availability": "available",
    "available_beds": 6,
    "phone": "+91 88845 18010",
    "cover_image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "about": "Zolo-managed co-living residence within 1 km of VIT Wadala and Wadala Road Station. Complete with high-speed WiFi, daily housekeeping, biometric security, and optional meal packages.",
    "amenities": ["wifi", "ac", "meals", "laundry", "security", "power_backup", "biometric"]
  },
  {
    "id": 11,
    "name": "Thakur Educational Trust Hostels (TCET Kandivali)",
    "category": "college_hostel",
    "gender": "boys",
    "food": "pure_veg",
    "area": "Thakur Village, Kandivali East",
    "address": "Thakur Educational Complex, Shyamnarayan Thakur Marg, Kandivali East, Mumbai 400101",
    "lat": 19.20700,
    "lng": 72.87400,
    "price": 7200,
    "deposit": 14000,
    "rooms": { "single": 12500, "double": 9000, "triple": 7200 },
    "rating": 4.6,
    "safety_score": 4.8,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 8,
    "phone": "+91 22 6730 8000",
    "cover_image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "about": "Official student hostel for Thakur College of Engineering & Technology (TCET). Air-cooled and AC rooms, three daily vegetarian meals, power backup, and walking distance to college lecture halls.",
    "amenities": ["wifi", "ac", "meals", "study_room", "security", "power_backup", "attached_washroom"]
  },
  {
    "id": 12,
    "name": "St. Francis Institute of Technology (SFIT) Hostel (Borivali)",
    "category": "college_hostel",
    "gender": "boys",
    "food": "pure_veg",
    "area": "Mount Poinsur, Borivali West",
    "address": "SFIT Campus, Mount Poinsur, S.V.P. Road, Borivali West, Mumbai 400103",
    "lat": 19.24450,
    "lng": 72.85350,
    "price": 7500,
    "deposit": 15000,
    "rooms": { "double": 9500, "triple": 7500 },
    "rating": 4.5,
    "safety_score": 4.7,
    "verified": true,
    "verification_date": "2026-10-16",
    "availability": "available",
    "available_beds": 5,
    "phone": "+91 22 2893 3333",
    "cover_image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    "about": "Official campus residence of St. Francis Institute of Technology (SFIT). Serene hill-view location, high-speed internet, dedicated study desks, mess meals, and strict security.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup"]
  },
  {
    "id": 13,
    "name": "Savitribai Phule Government Girls Hostel (Marine Drive)",
    "category": "govt_hostel",
    "gender": "girls",
    "food": "pure_veg",
    "area": "Marine Drive, Churchgate",
    "address": "Netaji Subhash Chandra Bose Road, Near Sydenham & HR College, Marine Drive, Mumbai 400020",
    "lat": 18.94800,
    "lng": 72.82200,
    "price": 3200,
    "deposit": 5000,
    "rooms": { "double": 4200, "triple": 3200 },
    "rating": 4.6,
    "safety_score": 5.0,
    "verified": true,
    "verification_date": "2026-10-19",
    "availability": "fast_filling",
    "available_beds": 3,
    "phone": "+91 22 2281 2000",
    "cover_image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "about": "Subsidized Maharashtra Government girls hostel right opposite the Arabian Sea promenade on Marine Drive. Highly secure female-warden facility with home-style vegetarian dining.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup"]
  },
  {
    "id": 14,
    "name": "Karmaveer Bhaurao Patil Boys Hostel (Kalina Campus)",
    "category": "govt_hostel",
    "gender": "boys",
    "food": "pure_veg",
    "area": "Kalina, Santacruz East",
    "address": "University of Mumbai Vidyanagari Campus, Kalina, Santacruz East, Mumbai 400098",
    "lat": 19.07600,
    "lng": 72.86650,
    "price": 3400,
    "deposit": 5000,
    "rooms": { "double": 4500, "triple": 3400, "dorm": 2800 },
    "rating": 4.2,
    "safety_score": 4.6,
    "verified": true,
    "verification_date": "2026-10-12",
    "availability": "available",
    "available_beds": 8,
    "phone": "+91 22 2654 3000",
    "cover_image": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80",
    "about": "Affiliated university campus hostel for engineering, sciences, and tech students. 200m from department lecture complexes, subsidized meal mess, sports facilities, and library access.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup"]
  },
  {
    "id": 15,
    "name": "The Covie Vashi (Sector 19D, Navi Mumbai)",
    "category": "private_pg",
    "gender": "coed",
    "food": "veg_nonveg",
    "area": "Sector 19D, Vashi",
    "address": "Near Palm Beach Road & Satra Plaza, Sector 19D, Vashi, Navi Mumbai 400703",
    "lat": 19.07200,
    "lng": 72.99900,
    "price": 10500,
    "deposit": 21000,
    "rooms": { "single": 18500, "double": 13500, "triple": 10500 },
    "rating": 4.8,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 6,
    "phone": "+91 80689 77800",
    "cover_image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "about": "Premier co-living facility located 5 minutes from Fr. CRIT Vashi. Fully furnished boutique rooms, high-speed WiFi, gym, cafeteria, and housekeeping.",
    "amenities": ["wifi", "ac", "meals", "laundry", "gym", "study_room", "security", "power_backup", "attached_washroom", "biometric"]
  },
  {
    "id": 16,
    "name": "SIES Nerul Student Living PG",
    "category": "private_pg",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Sector 5, Nerul",
    "address": "Sector 5, Behind SIES GST Campus, Nerul West, Navi Mumbai 400706",
    "lat": 19.03600,
    "lng": 73.01650,
    "price": 6800,
    "deposit": 13000,
    "rooms": { "single": 11500, "double": 8500, "triple": 6800 },
    "rating": 4.5,
    "safety_score": 4.7,
    "verified": true,
    "verification_date": "2026-10-15",
    "availability": "available",
    "available_beds": 5,
    "phone": "+91 98202 33190",
    "cover_image": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "about": "Convenient student residency situated between SIES GST, RAIT D.Y. Patil, and Terna Engineering. Clean ventilated rooms, vegetarian food mess, and fast WiFi.",
    "amenities": ["wifi", "ac", "meals", "laundry", "security", "power_backup"]
  },
  {
    "id": 17,
    "name": "Pillai HOC Campus Residences & PGs (New Panvel)",
    "category": "college_hostel",
    "gender": "coed",
    "food": "veg_nonveg",
    "area": "Sector 16, New Panvel",
    "address": "Pillai Campus, Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel 410206",
    "lat": 18.98950,
    "lng": 73.12600,
    "price": 5400,
    "deposit": 10000,
    "rooms": { "single": 9500, "double": 6800, "triple": 5400, "dorm": 4500 },
    "rating": 4.5,
    "safety_score": 4.6,
    "verified": true,
    "verification_date": "2026-10-17",
    "availability": "available",
    "available_beds": 9,
    "phone": "+91 22 2745 6030",
    "cover_image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "about": "Official student residences for Pillai College of Engineering (PCE). On-campus cafeteria, study rooms, gym, high-speed WiFi, and sports ground access.",
    "amenities": ["wifi", "meals", "study_room", "gym", "security", "power_backup"]
  },
  {
    "id": 18,
    "name": "Kharghar Sector 20 Engineering Accommodations",
    "category": "private_pg",
    "gender": "girls",
    "food": "pure_veg",
    "area": "Sector 20, Kharghar",
    "address": "Near Central Park & Utsav Chowk, Sector 20, Kharghar, Navi Mumbai 410210",
    "lat": 19.03100,
    "lng": 73.06100,
    "price": 6500,
    "deposit": 12000,
    "rooms": { "single": 11500, "double": 8200, "triple": 6500 },
    "rating": 4.7,
    "safety_score": 4.9,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 4,
    "phone": "+91 98199 44320",
    "cover_image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "about": "Gated female student housing serving Bharati Vidyapeeth (BVCOE) and Saraswati College of Engineering (SCOE). Female warden supervision, Jain food options, and round-the-clock CCTV.",
    "amenities": ["wifi", "meals", "study_room", "laundry", "security", "biometric", "attached_washroom"]
  },
  {
    "id": 19,
    "name": "APSIT Ghodbunder Student PGs (Thane West)",
    "category": "private_pg",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Kasarvadavali, Thane West",
    "address": "Ghodbunder Road, Opp. Hypercity Mall, Kasarvadavali, Thane West 400615",
    "lat": 19.26700,
    "lng": 72.96700,
    "price": 6800,
    "deposit": 13000,
    "rooms": { "single": 11500, "double": 8500, "triple": 6800 },
    "rating": 4.6,
    "safety_score": 4.7,
    "verified": true,
    "verification_date": "2026-10-19",
    "availability": "available",
    "available_beds": 6,
    "phone": "+91 98205 11290",
    "cover_image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "about": "Located a 3-minute walk from A.P. Shah Institute of Technology (APSIT). High-speed fiber internet, silent library study lounge, pure vegetarian mess, and power backup.",
    "amenities": ["wifi", "ac", "meals", "study_room", "security", "power_backup", "attached_washroom"]
  },
  {
    "id": 20,
    "name": "SNDT Women's University Hostels (Juhu Campus)",
    "category": "college_hostel",
    "gender": "girls",
    "food": "pure_veg",
    "area": "Juhu Tara Road",
    "address": "Sir Vithaldas Vidyavihar, Juhu Road, Santacruz West, Mumbai 400049",
    "lat": 19.09700,
    "lng": 72.83100,
    "price": 4500,
    "deposit": 8000,
    "rooms": { "double": 6000, "triple": 4500 },
    "rating": 4.6,
    "safety_score": 5.0,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "available",
    "available_beds": 4,
    "phone": "+91 22 2660 8493",
    "cover_image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "about": "Official on-campus women's hostel serving Usha Mittal Institute of Technology (UMIT). Extremely secure campus, mess meals, study areas, and walking distance to Juhu Beach.",
    "amenities": ["wifi", "meals", "study_room", "security", "power_backup"]
  },
  {
    "id": 21,
    "name": "Bandra Bandstand Sea-View PGs (Near Fr. Agnel CRCE)",
    "category": "private_pg",
    "gender": "girls",
    "food": "jain",
    "area": "Bandstand, Bandra West",
    "address": "BJ Road, Near Mount Mary & Fr. Agnel CRCE, Bandra West, Mumbai 400050",
    "lat": 19.04500,
    "lng": 72.82100,
    "price": 12800,
    "deposit": 25000,
    "rooms": { "single": 20000, "double": 14500, "triple": 12800 },
    "rating": 4.9,
    "safety_score": 5.0,
    "verified": true,
    "verification_date": "2026-10-19",
    "availability": "fast_filling",
    "available_beds": 2,
    "phone": "+91 98200 88710",
    "cover_image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "about": "Premier girls PG overlooking the Arabian Sea, 3 minutes from Fr. Conceicao Rodrigues College of Engineering (CRCE). Biometric security, Jain food mess, and AC.",
    "amenities": ["wifi", "ac", "meals", "laundry", "study_room", "security", "biometric", "attached_washroom"]
  },
  {
    "id": 22,
    "name": "Zolo Canvas (Andheri East Hub)",
    "category": "private_pg",
    "gender": "coed",
    "food": "veg_nonveg",
    "area": "Chakala / MIDC, Andheri East",
    "address": "Near Chakala Metro Station, Andheri-Kurla Rd, Andheri East, Mumbai 400093",
    "lat": 19.11700,
    "lng": 72.86200,
    "price": 9200,
    "deposit": 18000,
    "rooms": { "single": 16000, "double": 11500, "triple": 9200 },
    "rating": 4.6,
    "safety_score": 4.7,
    "verified": true,
    "verification_date": "2026-10-17",
    "availability": "available",
    "available_beds": 7,
    "phone": "+91 88845 18012",
    "cover_image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "about": "Fully serviced Zolo property with metro connectivity to Andheri and Ghatkopar colleges. High-speed WiFi, laundry, cafeteria, gym, and 24/7 security.",
    "amenities": ["wifi", "ac", "meals", "laundry", "gym", "security", "power_backup"]
  },
  {
    "id": 23,
    "name": "GTB Nagar Station & Antop Hill PG (Wadala East)",
    "category": "private_pg",
    "gender": "boys",
    "food": "pure_veg",
    "area": "GTB Nagar / Wadala East",
    "address": "Guru Nanak Nagar, Opp. GTB Nagar Railway Station East, Near VIT Campus, Mumbai 400037",
    "lat": 19.03400,
    "lng": 72.86800,
    "price": 6400,
    "deposit": 12000,
    "rooms": { "double": 8500, "triple": 6400, "dorm": 5200 },
    "rating": 4.4,
    "safety_score": 4.5,
    "verified": true,
    "verification_date": "2026-10-16",
    "availability": "available",
    "available_beds": 5,
    "phone": "+91 98203 77610",
    "cover_image": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "about": "Convenient 5-minute shared auto commute to Vidyalankar (VIT Wadala) and Somaiya Sion. High-speed WiFi, laundry facilities, study desks, and three vegetarian meals.",
    "amenities": ["wifi", "meals", "study_room", "laundry", "security", "power_backup"]
  },
  {
    "id": 24,
    "name": "Chembur Sindhi Society Scholars Home (VESIT Hub)",
    "category": "private_pg",
    "gender": "coed",
    "food": "pure_veg",
    "area": "Sindhi Society, Chembur",
    "address": "Road No. 2, Sindhi Society, Near VESIT Campus, Chembur, Mumbai 400071",
    "lat": 19.04650,
    "lng": 72.89100,
    "price": 8200,
    "deposit": 16000,
    "rooms": { "single": 13500, "double": 9800, "triple": 8200 },
    "rating": 4.7,
    "safety_score": 4.8,
    "verified": true,
    "verification_date": "2026-10-18",
    "availability": "fast_filling",
    "available_beds": 3,
    "phone": "+91 98204 99180",
    "cover_image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "about": "Prime location for VESIT engineering students (350m walk). Home-cooked pure vegetarian meals, peaceful garden neighborhood, and continuous power backup.",
    "amenities": ["wifi", "ac", "meals", "study_room", "laundry", "security", "power_backup"]
  }
];

// ============================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE PERSISTENCE
// ============================================================================

const STORAGE_KEY = "hostelmatch_data_v5";

let hostels = [];
let selectedCollegeId = "vit_wadala";
let currentSelectedHostelId = null;
let activePolyline = null;
let userCoordinates = null;

// Filter and Search State
const filterState = {
  searchQuery: "",
  gender: "all",
  food: "all",
  category: "all",
  room: "all",
  availability: "all",
  maxBudget: 20000,
  maxDistance: 999,
  amenities: [],
  sortBy: "match"
};

// Initialize or Restore Data (Syncs with backend REST API when available)
async function loadHostelData() {
  // Check if running on web server
  if (window.location.protocol.startsWith("http")) {
    try {
      const res = await fetch("/api/hostels");
      if (res.ok) {
        const data = await res.json();
        if (data.results && Array.isArray(data.results) && data.results.length > 0) {
          hostels = data.results;
          saveHostelDataLocally();
          renderAll();
          if (document.getElementById("adminView") && !document.getElementById("adminView").classList.contains("hidden")) {
            renderAdminTable();
            updateAdminMetrics();
          }
          return;
        }
      }
    } catch (e) {
      console.log("REST API offline or not reachable, using local storage fallback", e);
    }
  }

  // Local storage fallback
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      hostels = JSON.parse(cached);
      return;
    } catch (e) {
      console.warn("Failed to parse cached data, restoring default data", e);
    }
  }
  hostels = JSON.parse(JSON.stringify(INITIAL_HOSTELS_DATA));
  saveHostelDataLocally();
}

function saveHostelDataLocally() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(hostels));
}

async function saveHostelData(changedHostel = null, action = "update") {
  saveHostelDataLocally();

  // If connected to backend, sync changes
  if (window.location.protocol.startsWith("http") && changedHostel) {
    try {
      if (action === "create") {
        await fetch("/api/hostels", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(changedHostel)
        });
      } else if (action === "update") {
        await fetch(`/api/hostels/${changedHostel.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(changedHostel)
        });
      } else if (action === "delete") {
        await fetch(`/api/hostels/${changedHostel.id}`, {
          method: "DELETE"
        });
      }
    } catch (err) {
      console.warn("Failed to sync change with backend server", err);
    }
  }
}

function resetToDefaultData() {
  if (confirm("Reset all hostel listings to sample default dataset? This will erase any admin changes.")) {
    hostels = JSON.parse(JSON.stringify(INITIAL_HOSTELS_DATA));
    saveHostelDataLocally();
    renderAll();
    renderAdminTable();
    updateAdminMetrics();
  }
}

// ============================================================================
// 3. GEOLOCATION & PROXIMITY CALCULATIONS
// ============================================================================

/**
 * Haversine formula to calculate accurate distance between two GPS coordinates in kilometers.
 */
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round((R * c) * 10) / 10;
}

/**
 * Commute duration estimates based on distance.
 */
function estimateCommuteTimes(distanceKm) {
  // Walking: ~4.8 km/h
  const walkMinutes = Math.round((distanceKm / 4.8) * 60);
  // Cab / Auto: ~18 km/h average city speed + 3 min traffic buffer
  const driveMinutes = Math.max(3, Math.round((distanceKm / 18) * 60) + 2);
  return {
    walk: walkMinutes > 60 ? `${Math.floor(walkMinutes/60)}h ${walkMinutes%60}m walk` : `${walkMinutes} min walk`,
    drive: `${driveMinutes} min ride`
  };
}

function getSelectedCollege() {
  return COLLEGES_DATA.find(c => c.id === selectedCollegeId) || COLLEGES_DATA[0];
}

// ============================================================================
// 4. SMART 5-FACTOR MATCHING ALGORITHM
// ============================================================================
/**
 * 5-Factor algorithm matching:
 * 1. Budget Fit (0 - 25 pts)
 * 2. Proximity to Selected Campus (0 - 25 pts)
 * 3. Room Type Availability (0 - 20 pts)
 * 4. Amenities Match (0 - 20 pts)
 * 5. Safety & Verification (0 - 10 pts)
 * Total Score = 100%
 */
function calculateSmartMatchScore(hostel, userFilters, college) {
  let score = 0;

  // Factor 1: Budget Fit (Weight: 25%)
  const maxBudget = userFilters.maxBudget || 20000;
  if (hostel.price <= maxBudget) {
    // Within budget: reward if comfortably within budget
    const diff = maxBudget - hostel.price;
    score += Math.min(25, 20 + (diff / maxBudget) * 5);
  } else {
    // Above budget: penalty proportional to excess
    const excess = hostel.price - maxBudget;
    const penalty = (excess / maxBudget) * 20;
    score += Math.max(0, 15 - penalty);
  }

  // Factor 2: Proximity to Campus (Weight: 25%)
  const dist = calculateDistanceKm(college.lat, college.lng, hostel.lat, hostel.lng);
  if (dist <= 0.8) {
    score += 25; // Exceptional walking distance
  } else if (dist <= 1.8) {
    score += 22;
  } else if (dist <= 3.5) {
    score += 17;
  } else if (dist <= 6.0) {
    score += 10;
  } else {
    score += Math.max(2, 8 - (dist - 6));
  }

  // Factor 3: Room Type Availability (Weight: 20%)
  if (userFilters.room === "all" || !userFilters.room) {
    score += 20; // No strict room preference
  } else if (hostel.rooms && hostel.rooms[userFilters.room]) {
    score += 20; // Has exact room sharing
  } else {
    score += 8; // Partial
  }

  // Factor 4: Amenities Overlap (Weight: 20%)
  if (!userFilters.amenities || userFilters.amenities.length === 0) {
    score += 20;
  } else {
    const matchedCount = userFilters.amenities.filter(a => (hostel.amenities || []).includes(a)).length;
    const ratio = matchedCount / userFilters.amenities.length;
    score += Math.round(ratio * 20);
  }

  // Factor 5: Safety & Verification (Weight: 10%)
  const safetyPts = ((hostel.safety_score || 4.0) / 5.0) * 6;
  const verifiedPts = hostel.verified ? 4 : 1;
  score += Math.round(safetyPts + verifiedPts);

  return Math.min(99, Math.max(45, Math.round(score)));
}

// ============================================================================
// 5. LEAFLET MAP INITIALIZATION & MARKER MANAGEMENT
// ============================================================================

let map = null;
let collegeMarker = null;
let hostelMarkers = {};

function initMap() {
  const college = getSelectedCollege();
  
  // Initialize Leaflet Map
  map = L.map("liveHostelMap", {
    center: [college.lat, college.lng],
    zoom: 14,
    zoomControl: true
  });

  // CARTO Voyager Tile Layer - High performance, retina-ready, no OSM 403 blocking
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  renderMapMarkers();
}

/**
 * Creates custom HTML SVG Marker Pins
 */
function createCustomPinIcon(type, glyphHtml) {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div class="custom-pin ${type}-marker">${glyphHtml}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
  });
}

function renderMapMarkers() {
  if (!map) return;

  const currentCollege = getSelectedCollege();

  // 1. College Marker
  if (collegeMarker) {
    map.removeLayer(collegeMarker);
  }

  const collegeIcon = createCustomPinIcon("college", `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
      <path d="M22 10v6"></path>
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
    </svg>
  `);

  const fullAddr = currentCollege.fullAddress || currentCollege.area;
  let transitHtml = "";
  if (currentCollege.transit && Array.isArray(currentCollege.transit)) {
    transitHtml = `
      <div style="border-top: 1px solid #e2e8f0; padding-top: 8px; margin-top: 8px;">
        <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">🚆 Transit & Connectivity:</div>
        ${currentCollege.transit.map(t => `<div style="font-size: 11px; color: #475569; margin-bottom: 2px;">• <b>${t.title}:</b> ${t.detail}</div>`).join("")}
      </div>
    `;
  }

  collegeMarker = L.marker([currentCollege.lat, currentCollege.lng], { icon: collegeIcon, zIndexOffset: 1000 })
    .addTo(map)
    .bindPopup(`
      <div style="padding: 12px; font-family: sans-serif; max-width: 280px;">
        <span style="font-size: 10px; font-weight: 800; color: #059669; text-transform: uppercase; letter-spacing: 0.04em;">Selected College Campus</span>
        <h4 style="margin: 4px 0 2px 0; font-size: 14px; font-weight: 800; color: #0f172a; line-height: 1.25;">${currentCollege.name}</h4>
        <p style="margin: 0; font-size: 11.5px; color: #475569; line-height: 1.35;">📍 ${fullAddr}</p>
        ${transitHtml}
      </div>
    `);

  // 2. Hostel Markers
  // Clear previous markers
  Object.values(hostelMarkers).forEach(m => map.removeLayer(m));
  hostelMarkers = {};

  const filtered = getFilteredHostels();

  filtered.forEach(h => {
    let pinType = "coed";
    let glyph = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`;

    if (h.category === "govt_hostel") {
      pinType = "govt";
    } else if (h.gender === "girls") {
      pinType = "girls";
    } else if (h.gender === "boys") {
      pinType = "boys";
    }

    const markerIcon = createCustomPinIcon(pinType, glyph);
    const dist = calculateDistanceKm(currentCollege.lat, currentCollege.lng, h.lat, h.lng);

    const marker = L.marker([h.lat, h.lng], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`
        <div class="map-popup-card">
          <img src="${h.cover_image}" alt="${h.name}" class="map-popup-img">
          <div class="map-popup-body">
            <h4 class="map-popup-title">${h.name}</h4>
            <div class="map-popup-price">₹${h.price.toLocaleString()} / mo</div>
            <div class="map-popup-dist">📍 ${dist} km from ${currentCollege.shortName}</div>
            <button class="map-popup-btn" onclick="openHostelDetailsModal(${h.id})">View Full Details & Beds</button>
          </div>
        </div>
      `);

    marker.on("click", () => {
      highlightHostel(h.id);
      drawRouteLine(h);
    });

    marker.on("mouseover", () => {
      drawRouteLine(h);
    });

    hostelMarkers[h.id] = marker;
  });
}

/**
 * Draws an interactive dashed routing line between current college and target hostel
 */
function drawRouteLine(hostel) {
  if (!map) return;
  const college = getSelectedCollege();

  if (activePolyline) {
    map.removeLayer(activePolyline);
  }

  const latlngs = [
    [college.lat, college.lng],
    [hostel.lat, hostel.lng]
  ];

  activePolyline = L.polyline(latlngs, {
    color: "#4f46e5",
    weight: 3.5,
    opacity: 0.85,
    dashArray: "8, 8",
    lineCap: "round"
  }).addTo(map);

  // Update Route Banner Info
  const dist = calculateDistanceKm(college.lat, college.lng, hostel.lat, hostel.lng);
  const commute = estimateCommuteTimes(dist);

  const routeBar = document.getElementById("routeInfoBar");
  document.getElementById("routeHostelName").textContent = `${hostel.name} ➔ ${college.shortName}`;
  document.getElementById("routeDistance").textContent = `${dist} km`;
  document.getElementById("routeWalkTime").textContent = commute.walk;
  document.getElementById("routeDriveTime").textContent = commute.drive;
  routeBar.classList.remove("hidden");
}

function clearRouteLine() {
  if (activePolyline && map) {
    map.removeLayer(activePolyline);
    activePolyline = null;
  }
  document.getElementById("routeInfoBar").classList.add("hidden");
}

// ============================================================================
// 6. FILTERING, SEARCHING & SORTING LOGIC
// ============================================================================

function getFilteredHostels() {
  const college = getSelectedCollege();

  return hostels.filter(h => {
    // 1. Search Query
    if (filterState.searchQuery) {
      const q = filterState.searchQuery.toLowerCase();
      const matchText = (
        h.name + " " + 
        h.area + " " + 
        h.address + " " + 
        (h.amenities || []).join(" ") + " " +
        (h.about || "")
      ).toLowerCase();
      if (!matchText.includes(q)) return false;
    }

    // 2. Gender
    if (filterState.gender !== "all" && h.gender !== filterState.gender) {
      return false;
    }

    // 3. Food / Diet
    if (filterState.food !== "all") {
      if (filterState.food === "jain" && h.food !== "jain") return false;
      if (filterState.food === "pure_veg" && (h.food !== "pure_veg" && h.food !== "jain")) return false;
      if (filterState.food === "veg_nonveg" && h.food !== "veg_nonveg") return false;
    }

    // 4. Property Category
    if (filterState.category !== "all" && h.category !== filterState.category) {
      return false;
    }

    // 5. Room Sharing
    if (filterState.room !== "all") {
      if (!h.rooms || !h.rooms[filterState.room]) return false;
    }

    // 6. Availability
    if (filterState.availability !== "all" && h.availability !== filterState.availability) {
      return false;
    }

    // 7. Max Budget
    if (h.price > filterState.maxBudget) {
      return false;
    }

    // 8. Max Distance to College
    const dist = calculateDistanceKm(college.lat, college.lng, h.lat, h.lng);
    if (dist > filterState.maxDistance) {
      return false;
    }

    // 9. Amenities
    if (filterState.amenities.length > 0) {
      const hasAll = filterState.amenities.every(amenity => (h.amenities || []).includes(amenity));
      if (!hasAll) return false;
    }

    return true;
  }).sort((a, b) => {
    // Sorting
    const distA = calculateDistanceKm(college.lat, college.lng, a.lat, a.lng);
    const distB = calculateDistanceKm(college.lat, college.lng, b.lat, b.lng);

    if (filterState.sortBy === "distance_asc") {
      return distA - distB;
    }
    if (filterState.sortBy === "price_asc") {
      return a.price - b.price;
    }
    if (filterState.sortBy === "price_desc") {
      return b.price - a.price;
    }
    if (filterState.sortBy === "rating_desc") {
      return b.rating - a.rating;
    }
    if (filterState.sortBy === "safety_desc") {
      return (b.safety_score || 0) - (a.safety_score || 0);
    }
    // Default: Smart 5-Factor Match Score
    const matchA = calculateSmartMatchScore(a, filterState, college);
    const matchB = calculateSmartMatchScore(b, filterState, college);
    return matchB - matchA;
  });
}

// ============================================================================
// 7. UI RENDERING: CARDS, STATS, MODALS
// ============================================================================

function renderAll() {
  renderCampusGuideCard();
  renderHostelCards();
  renderMapMarkers();
  updateHeaderAndHeroStats();
  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderCampusGuideCard() {
  const college = getSelectedCollege();
  if (!college) return;

  const card = document.getElementById("campusGuideCard");
  if (!card) return;

  const typeEl = document.getElementById("campusBadgeType");
  const zoneEl = document.getElementById("campusBadgeZone");
  const nameEl = document.getElementById("campusGuideName");
  const addrEl = document.getElementById("campusGuideAddress");
  const lmarkEl = document.getElementById("campusGuideLandmarks");
  const transitGrid = document.getElementById("campusTransitGrid");

  if (typeEl) typeEl.innerHTML = `<i data-lucide="graduation-cap"></i> ${college.type || 'Engineering & Technology College'}`;
  if (zoneEl) zoneEl.textContent = `📍 ${college.zone || college.area}`;
  if (nameEl) nameEl.textContent = college.name;
  
  const fullAddress = college.fullAddress || `${college.area}, ${college.city || 'Mumbai'}`;
  if (addrEl) addrEl.innerHTML = `<i data-lucide="map-pin"></i> ${fullAddress}`;

  const landmarks = college.landmarks 
    ? `<span><b>Landmarks:</b> ${college.landmarks}</span>` 
    : `<span><b>Locality:</b> ${college.area}</span>`;
  if (lmarkEl) lmarkEl.innerHTML = landmarks;

  if (transitGrid) {
    if (college.transit && Array.isArray(college.transit)) {
      transitGrid.innerHTML = college.transit.map(t => {
        let icon = "🚆";
        if (t.mode === "monorail") icon = "🚝";
        if (t.mode === "road") icon = "🛣️";
        if (t.mode === "bus") icon = "🚌";
        return `
          <div class="transit-chip">
            <span class="t-icon">${icon}</span>
            <div class="transit-chip-text">
              <b>${t.title}</b>
              <span>${t.detail}</span>
            </div>
          </div>
        `;
      }).join("");
    } else {
      transitGrid.innerHTML = `
        <div class="transit-chip">
          <span class="t-icon">🚆</span>
          <div class="transit-chip-text">
            <b>Suburban Rail Connectivity</b>
            <span>Direct access via local railway stations around ${college.city || 'Mumbai'}</span>
          </div>
        </div>
        <div class="transit-chip">
          <span class="t-icon">🛣️</span>
          <div class="transit-chip-text">
            <b>Road Connectivity</b>
            <span>Connected via arterial roads in ${college.area}</span>
          </div>
        </div>
      `;
    }
  }
}

function updateHeaderAndHeroStats() {
  const verifiedCount = hostels.filter(h => h.verified).length;
  const availableCount = hostels.filter(h => h.availability === "available").length;
  
  const college = getSelectedCollege();
  const nearbyCount = hostels.filter(h => calculateDistanceKm(college.lat, college.lng, h.lat, h.lng) <= 3.0).length;

  document.getElementById("statVerifiedCount").textContent = verifiedCount;
  document.getElementById("statAvailableCount").textContent = availableCount;
  document.getElementById("statNearbyCount").textContent = nearbyCount;

  document.getElementById("collegeDistanceHint").textContent = `Showing distances relative to ${college.name}`;
}

function renderHostelCards() {
  const listContainer = document.getElementById("hostelsList");
  const filtered = getFilteredHostels();
  const college = getSelectedCollege();

  document.getElementById("resultsCount").textContent = `${filtered.length} stays available around campus`;

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div style="background: #fff; padding: 40px; border-radius: 16px; text-align: center; border: 1px dashed #cbd5e1;">
        <i data-lucide="search-x" style="width: 48px; height: 48px; color: #94a3b8; margin: 0 auto 12px;"></i>
        <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a;">No Hostels Match Your Specific Filters</h3>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 16px;">Try adjusting your monthly budget, relaxing your distance limit, or clearing amenities filters.</p>
        <button class="btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(h => {
    const dist = calculateDistanceKm(college.lat, college.lng, h.lat, h.lng);
    const commute = estimateCommuteTimes(dist);
    const matchScore = calculateSmartMatchScore(h, filterState, college);

    // Badges & Categories
    const genderTag = h.gender === "girls" 
      ? `<span class="tag-badge girls"><i data-lucide="user-check"></i> Girls Only</span>`
      : h.gender === "boys" 
        ? `<span class="tag-badge boys"><i data-lucide="user"></i> Boys Only</span>`
        : `<span class="tag-badge coed"><i data-lucide="users"></i> Co-Ed Stay</span>`;

    let foodTag = "";
    if (h.food === "jain") {
      foodTag = `<span class="tag-badge jain"><i data-lucide="sun"></i> Jain Food Available</span>`;
    } else if (h.food === "pure_veg") {
      foodTag = `<span class="tag-badge pure-veg"><i data-lucide="leaf"></i> Pure Veg</span>`;
    }

    let categoryTag = "";
    if (h.category === "govt_hostel") {
      categoryTag = `<span class="tag-badge govt"><i data-lucide="landmark"></i> Govt Hostel</span>`;
    } else if (h.category === "college_hostel") {
      categoryTag = `<span class="tag-badge college-hostel"><i data-lucide="school"></i> Campus Affiliate</span>`;
    }

    // Availability styling
    let availLabel = "Available Now";
    if (h.availability === "fast_filling") {
      availLabel = `Fast Filling (${h.available_beds || 'Few'} beds left)`;
    } else if (h.availability === "full") {
      availLabel = "Full (Waitlist only)";
    }

    // Sharing pricing chips
    const roomChips = Object.entries(h.rooms || {}).map(([type, price]) => {
      const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
      return `<span class="sharing-chip">${typeLabel}: <b>₹${price.toLocaleString()}</b></span>`;
    }).join("");

    return `
      <article class="hostel-card ${currentSelectedHostelId === h.id ? 'active-selected' : ''}" 
               id="hostel-card-${h.id}"
               onclick="selectHostelOnMap(${h.id})"
               onmouseenter="drawRouteLine(${JSON.stringify(h).replace(/"/g, '&quot;')})">
        
        <div class="hostel-card-body">
          <div class="card-media">
            <img src="${h.cover_image}" alt="${h.name}" class="card-img" loading="lazy">
            
            <div class="match-score-badge ${matchScore >= 85 ? 'high' : (matchScore >= 70 ? 'medium' : '')}">
              <i data-lucide="sparkles"></i> ${matchScore}% Match
            </div>

            ${h.verified ? `
              <div class="badge-verified-float">
                <i data-lucide="shield-check"></i> Verified
              </div>
            ` : ''}
          </div>

          <div class="card-details">
            <div>
              <div class="card-header-row">
                <div class="card-title-group">
                  <h3>${h.name}</h3>
                  <div class="card-locality"><i data-lucide="map-pin"></i> ${h.area}</div>
                </div>
                <div class="card-rent-block">
                  <div class="rent-amount">₹${h.price.toLocaleString()}</div>
                  <div class="rent-period">per month</div>
                  <div class="deposit-info">Deposit: ₹${(h.deposit || (h.price * 1.5)).toLocaleString()}</div>
                </div>
              </div>

              <!-- Tags -->
              <div class="card-tags-row" style="margin-top: 8px;">
                ${genderTag}
                ${foodTag}
                ${categoryTag}
              </div>
            </div>

            <!-- Proximity & Commute Row -->
            <div class="card-proximity-row">
              <div class="prox-distance">
                <i data-lucide="navigation"></i> ${dist} km from ${college.shortName}
              </div>
              <div class="prox-commute">
                <span><i data-lucide="footprints"></i> ${commute.walk}</span>
                <span>•</span>
                <span><i data-lucide="car"></i> ${commute.drive}</span>
              </div>
            </div>

            <!-- Room Sharing Rates -->
            <div class="card-sharing-rates">
              <span style="font-weight: 700; color: #475569;">Sharing:</span>
              ${roomChips}
            </div>

            <!-- Footer: Availability & Actions -->
            <div class="card-footer-row">
              <div class="avail-status ${h.availability}">
                <span class="avail-dot"></span>
                <span>${availLabel}</span>
              </div>

              <div class="card-actions-group">
                <button class="btn-card-action secondary" onclick="event.stopPropagation(); focusHostelMap(${h.id})">
                  <i data-lucide="map-pin"></i> Pin on Map
                </button>
                <button class="btn-card-action primary" onclick="event.stopPropagation(); openHostelDetailsModal(${h.id})">
                  <span>View Details</span>
                  <i data-lucide="chevron-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

      </article>
    `;
  }).join("");
}

function highlightHostel(id) {
  currentSelectedHostelId = id;
  document.querySelectorAll(".hostel-card").forEach(c => c.classList.remove("active-selected"));
  const targetCard = document.getElementById(`hostel-card-${id}`);
  if (targetCard) {
    targetCard.classList.add("active-selected");
    targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function selectHostelOnMap(id) {
  const h = hostels.find(item => item.id === id);
  if (!h) return;
  highlightHostel(id);
  drawRouteLine(h);

  if (map && hostelMarkers[id]) {
    map.flyTo([h.lat, h.lng], 15, { duration: 0.8 });
    hostelMarkers[id].openPopup();
  }
}

function focusHostelMap(id) {
  selectHostelOnMap(id);
  // Switch to map view if mobile
  const mapSection = document.getElementById("mapSection");
  mapSection.scrollIntoView({ behavior: "smooth" });
}

// ============================================================================
// 8. HOSTEL DETAIL MODAL
// ============================================================================

function openHostelDetailsModal(id) {
  const h = hostels.find(item => item.id === id);
  if (!h) return;

  const college = getSelectedCollege();
  const dist = calculateDistanceKm(college.lat, college.lng, h.lat, h.lng);
  const commute = estimateCommuteTimes(dist);

  document.getElementById("detailName").textContent = h.name;
  document.getElementById("detailAddress").innerHTML = `<i data-lucide="map-pin"></i> ${h.address}`;

  // Badges
  const badgesContainer = document.getElementById("detailCategoryBadges");
  badgesContainer.innerHTML = `
    <span class="tag-badge ${h.gender}">${h.gender.toUpperCase()}</span>
    <span class="tag-badge ${h.food}">${h.food.replace('_', ' ').toUpperCase()}</span>
    <span class="tag-badge">${h.category.replace('_', ' ').toUpperCase()}</span>
    ${h.verified ? `<span class="tag-badge pure-veg"><i data-lucide="shield-check"></i> Verified (${h.verification_date || 'Recent'})</span>` : ''}
  `;

  // Room pricing rows
  const roomRows = Object.entries(h.rooms || {}).map(([type, price]) => `
    <tr>
      <td style="font-weight: 700; text-transform: capitalize;">${type} Room</td>
      <td style="font-weight: 800; color: #4f46e5;">₹${price.toLocaleString()} / mo</td>
      <td style="color: #64748b;">Refundable Deposit: ₹${(h.deposit || price*1.5).toLocaleString()}</td>
    </tr>
  `).join("");

  // Amenities tags
  const amenityPills = (h.amenities || []).map(a => `
    <div class="detail-amenity-pill">
      <i data-lucide="check-circle"></i>
      <span>${formatAmenityName(a)}</span>
    </div>
  `).join("");

  const modalBody = document.getElementById("detailBodyContent");
  modalBody.innerHTML = `
    <div class="detail-content-grid">
      <img src="${h.cover_image}" alt="${h.name}" class="detail-hero-img">

      <!-- Pricing & Deposit Breakdown -->
      <div class="detail-pricing-box">
        <div class="detail-pricing-header">
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; color: #4338ca; text-transform: uppercase;">Starting Monthly Rent</div>
            <div class="detail-price-main">₹${h.price.toLocaleString()} <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">/ bed / month</span></div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #475569;">Security Deposit</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: #0f172a;">₹${(h.deposit || 15000).toLocaleString()}</div>
          </div>
        </div>

        <table class="detail-room-rates-table">
          <thead>
            <tr>
              <th>Sharing Type</th>
              <th>Monthly Rent</th>
              <th>Deposit terms</th>
            </tr>
          </thead>
          <tbody>
            ${roomRows}
          </tbody>
        </table>
      </div>

      <!-- College Proximity & Directions -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
        <h4 class="detail-section-title"><i data-lucide="compass"></i> Commute to ${college.name}</h4>
        <p style="font-size: 0.84rem; color: #334155; margin-bottom: 8px;">
          Direct distance: <b>${dist} km</b>. Estimated commute: <b>${commute.walk}</b> or <b>${commute.drive}</b>.
        </p>
        <button class="btn-card-action secondary" onclick="focusHostelMap(${h.id}); closeHostelDetailsModal();">
          <i data-lucide="navigation"></i> View Real-Time Route on Radar Map
        </button>
      </div>

      <!-- About & House Rules -->
      <div>
        <h4 class="detail-section-title"><i data-lucide="info"></i> About Property & Student Rules</h4>
        <p style="font-size: 0.86rem; color: #475569; line-height: 1.6;">${h.about || "Quality accommodation suited for undergraduate and postgraduate scholars."}</p>
      </div>

      <!-- Amenities -->
      <div>
        <h4 class="detail-section-title"><i data-lucide="layers"></i> Included Amenities & Facilities</h4>
        <div class="detail-amenities-tags">
          ${amenityPills}
        </div>
      </div>

      <!-- Contact Warden / Property Manager -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
        <h4 class="detail-section-title"><i data-lucide="phone-call"></i> Contact Hostel Warden / Manager</h4>
        <p style="font-size: 0.82rem; color: #64748b; margin-bottom: 10px;">Direct student helpline for bed booking, site visits, and instant verification.</p>
        <div class="detail-contact-bar">
          <a href="tel:${h.phone}" class="btn-contact call">
            <i data-lucide="phone"></i> Call ${h.phone}
          </a>
          <a href="https://wa.me/${(h.phone || '').replace(/[^0-9]/g, '')}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(h.name)}%20via%20HostelMatch" 
             target="_blank" 
             class="btn-contact whatsapp">
            <i data-lucide="message-circle"></i> Chat on WhatsApp
          </a>
        </div>
      </div>

    </div>
  `;

  document.getElementById("hostelDetailModal").classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeHostelDetailsModal() {
  document.getElementById("hostelDetailModal").classList.add("hidden");
}

function formatAmenityName(slug) {
  const map = {
    wifi: "High-Speed WiFi",
    meals: "Home Cooked Meals",
    ac: "Air Conditioning",
    study_room: "24h Study Room",
    power_backup: "Power Backup",
    security: "24/7 CCTV & Security",
    laundry: "Washing Machine & Laundry",
    gym: "Gym & Fitness Area",
    attached_washroom: "Attached Washroom",
    biometric: "Biometric Entry"
  };
  return map[slug] || slug.replace('_', ' ');
}

// ============================================================================
// 9. ADMIN DASHBOARD IMPLEMENTATION
// ============================================================================

function openAdminDashboard() {
  document.getElementById("adminView").classList.remove("hidden");
  if (window.history.pushState && window.location.protocol.startsWith("http")) {
    window.history.pushState(null, "Admin Dashboard", "/admin");
  } else {
    window.location.hash = "#admin";
  }
  updateAdminMetrics();
  renderAdminTable();
  if (window.lucide) lucide.createIcons();
}

function closeAdminDashboard() {
  document.getElementById("adminView").classList.add("hidden");
  if (window.history.pushState && window.location.protocol.startsWith("http")) {
    window.history.pushState(null, "HostelMatch", "/");
  } else {
    window.location.hash = "";
  }
}

function updateAdminMetrics() {
  const total = hostels.length;
  const verified = hostels.filter(h => h.verified).length;
  const pending = total - verified;
  const totalBeds = hostels.reduce((acc, curr) => acc + (curr.available_beds || 0), 0);

  document.getElementById("adminTotalListings").textContent = total;
  document.getElementById("adminVerifiedListings").textContent = verified;
  document.getElementById("adminPendingListings").textContent = pending;
  document.getElementById("adminAvailableBeds").textContent = totalBeds;
}

function renderAdminTable() {
  const query = (document.getElementById("adminTableSearch").value || "").toLowerCase();
  const tbody = document.getElementById("adminTableBody");

  const filtered = hostels.filter(h => {
    if (!query) return true;
    return (h.name + " " + h.area + " " + h.address).toLowerCase().includes(query);
  });

  tbody.innerHTML = filtered.map(h => `
    <tr>
      <td>#${h.id}</td>
      <td>
        <div class="table-prop-title">${h.name}</div>
        <div class="table-prop-addr">${h.address}</div>
      </td>
      <td><span class="tag-badge ${h.gender}">${h.gender}</span></td>
      <td><span class="tag-badge ${h.food}">${h.food}</span></td>
      <td style="font-weight: 700; color: #4f46e5;">₹${h.price.toLocaleString()}</td>
      <td>
        <span class="avail-status ${h.availability}">
          <span class="avail-dot"></span>
          ${h.availability}
        </span>
      </td>
      <td>
        ${h.verified ? `
          <span style="color: #10b981; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
            <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i> Verified
          </span>
        ` : `
          <span style="color: #f59e0b; font-weight: 600;">Pending</span>
        `}
      </td>
      <td style="font-size: 0.78rem; color: #64748b;">${h.verification_date || 'N/A'}</td>
      <td>
        <div class="table-actions">
          <button class="btn-table verify" onclick="toggleVerifyHostel(${h.id})" title="Toggle Verification">
            <i data-lucide="${h.verified ? 'x-circle' : 'shield-check'}"></i>
            ${h.verified ? 'Unverify' : 'Verify'}
          </button>
          <button class="btn-table edit" onclick="openHostelEditorModal(${h.id})" title="Edit Listing">
            <i data-lucide="edit-3"></i> Edit
          </button>
          <button class="btn-table delete" onclick="deleteHostel(${h.id})" title="Delete Listing">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function toggleVerifyHostel(id) {
  const target = hostels.find(h => h.id === id);
  if (!target) return;
  target.verified = !target.verified;
  if (target.verified) {
    target.verification_date = new Date().toISOString().split("T")[0];
  }
  saveHostelData(target, "update");
  renderAdminTable();
  updateAdminMetrics();
  renderAll();
}

function deleteHostel(id) {
  const target = hostels.find(h => h.id === id);
  if (!target) return;
  if (confirm(`Are you sure you want to permanently remove "${target.name}"?`)) {
    hostels = hostels.filter(h => h.id !== id);
    saveHostelData(target, "delete");
    renderAdminTable();
    updateAdminMetrics();
    renderAll();
  }
}

// Editor Modal (Add / Edit)
function openHostelEditorModal(id = null) {
  const isEdit = id !== null;
  const modal = document.getElementById("hostelEditorModal");
  document.getElementById("editorModalTitle").textContent = isEdit ? "Edit Hostel Listing" : "Add New Hostel Listing";
  document.getElementById("formHostelId").value = isEdit ? id : "";

  if (isEdit) {
    const h = hostels.find(item => item.id === id);
    if (!h) return;
    document.getElementById("formName").value = h.name || "";
    document.getElementById("formGender").value = h.gender || "coed";
    document.getElementById("formCategory").value = h.category || "private_pg";
    document.getElementById("formFood").value = h.food || "pure_veg";
    document.getElementById("formAvailability").value = h.availability || "available";
    document.getElementById("formAddress").value = h.address || "";
    document.getElementById("formArea").value = h.area || "";
    document.getElementById("formPhone").value = h.phone || "";
    document.getElementById("formLat").value = h.lat || "";
    document.getElementById("formLng").value = h.lng || "";
    document.getElementById("formPrice").value = h.price || "";
    document.getElementById("formDeposit").value = h.deposit || "";
    document.getElementById("formSingleRent").value = (h.rooms && h.rooms.single) || "";
    document.getElementById("formDoubleRent").value = (h.rooms && h.rooms.double) || "";
    document.getElementById("formTripleRent").value = (h.rooms && h.rooms.triple) || "";
    document.getElementById("formDormRent").value = (h.rooms && h.rooms.dorm) || "";
    document.getElementById("formRating").value = h.rating || 4.5;
    document.getElementById("formSafety").value = h.safety_score || 4.8;
    document.getElementById("formCoverImage").value = h.cover_image || "";
    document.getElementById("formAbout").value = h.about || "";
    document.getElementById("formVerified").checked = !!h.verified;
    document.getElementById("formVerificationDate").value = h.verification_date || "";

    // Amenities
    const checks = document.querySelectorAll('input[name="formAmenity"]');
    checks.forEach(c => {
      c.checked = (h.amenities || []).includes(c.value);
    });
  } else {
    // Reset Form
    document.getElementById("hostelForm").reset();
    document.getElementById("formVerificationDate").value = new Date().toISOString().split("T")[0];
    document.getElementById("formVerified").checked = true;
    document.getElementById("formRating").value = 4.5;
    document.getElementById("formSafety").value = 4.8;
    // Default location near Kalina
    document.getElementById("formLat").value = 19.0740;
    document.getElementById("formLng").value = 72.8750;
    document.getElementById("formCoverImage").value = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80";
  }

  modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
}

function closeHostelEditorModal() {
  document.getElementById("hostelEditorModal").classList.add("hidden");
}

function handleHostelFormSubmit(e) {
  e.preventDefault();

  const idVal = document.getElementById("formHostelId").value;
  const isEdit = Boolean(idVal);

  const amenities = Array.from(document.querySelectorAll('input[name="formAmenity"]:checked')).map(c => c.value);

  const rooms = {};
  const single = parseInt(document.getElementById("formSingleRent").value);
  const double = parseInt(document.getElementById("formDoubleRent").value);
  const triple = parseInt(document.getElementById("formTripleRent").value);
  const dorm = parseInt(document.getElementById("formDormRent").value);
  if (!isNaN(single)) rooms.single = single;
  if (!isNaN(double)) rooms.double = double;
  if (!isNaN(triple)) rooms.triple = triple;
  if (!isNaN(dorm)) rooms.dorm = dorm;

  const hostelObj = {
    id: isEdit ? parseInt(idVal) : Date.now(),
    name: document.getElementById("formName").value.trim(),
    gender: document.getElementById("formGender").value,
    category: document.getElementById("formCategory").value,
    food: document.getElementById("formFood").value,
    availability: document.getElementById("formAvailability").value,
    address: document.getElementById("formAddress").value.trim(),
    area: document.getElementById("formArea").value.trim(),
    phone: document.getElementById("formPhone").value.trim(),
    lat: parseFloat(document.getElementById("formLat").value),
    lng: parseFloat(document.getElementById("formLng").value),
    price: parseInt(document.getElementById("formPrice").value) || 7500,
    deposit: parseInt(document.getElementById("formDeposit").value) || 12000,
    rooms: Object.keys(rooms).length > 0 ? rooms : { double: parseInt(document.getElementById("formPrice").value) || 7500 },
    rating: parseFloat(document.getElementById("formRating").value) || 4.2,
    safety_score: parseFloat(document.getElementById("formSafety").value) || 4.5,
    cover_image: document.getElementById("formCoverImage").value.trim() || "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    about: document.getElementById("formAbout").value.trim(),
    verified: document.getElementById("formVerified").checked,
    verification_date: document.getElementById("formVerificationDate").value || new Date().toISOString().split("T")[0],
    amenities: amenities
  };

  if (isEdit) {
    const idx = hostels.findIndex(h => h.id === hostelObj.id);
    if (idx !== -1) {
      hostels[idx] = hostelObj;
    }
  } else {
    hostels.unshift(hostelObj);
  }

  saveHostelData(hostelObj, isEdit ? "update" : "create");
  closeHostelEditorModal();
  renderAdminTable();
  updateAdminMetrics();
  renderAll();

  alert(`Listing "${hostelObj.name}" successfully ${isEdit ? 'updated' : 'published'}!`);
}

// ============================================================================
// 10. EVENT LISTENERS & SETUP
// ============================================================================

function setupEventListeners() {
  // College Dropdown - Grouped by Zones
  const collegeSelect = document.getElementById("headerCollegeSelect");
  const zonesMap = {};
  COLLEGES_DATA.forEach(c => {
    const z = c.zone || "Other Engineering Colleges";
    if (!zonesMap[z]) zonesMap[z] = [];
    zonesMap[z].push(c);
  });

  collegeSelect.innerHTML = Object.entries(zonesMap).map(([zoneName, colleges]) => `
    <optgroup label="📍 ${zoneName}">
      ${colleges.map(c => `<option value="${c.id}">${c.name}</option>`).join("")}
    </optgroup>
  `).join("");
  collegeSelect.value = selectedCollegeId;

  collegeSelect.addEventListener("change", (e) => {
    selectedCollegeId = e.target.value;
    const currentCollege = getSelectedCollege();
    if (map) {
      map.flyTo([currentCollege.lat, currentCollege.lng], 14, { duration: 0.8 });
    }
    clearRouteLine();
    renderAll();
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("btnClearSearch");

  searchInput.addEventListener("input", (e) => {
    filterState.searchQuery = e.target.value.trim();
    clearBtn.classList.toggle("hidden", !filterState.searchQuery);
    renderAll();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterState.searchQuery = "";
    clearBtn.classList.add("hidden");
    renderAll();
  });

  // Gender Filter Pills
  setupPillGroup("genderFilters", (val) => {
    filterState.gender = val;
    renderAll();
  });

  // Food Filter Pills
  setupPillGroup("foodFilters", (val) => {
    filterState.food = val;
    renderAll();
  });

  // Category Filter Pills
  setupPillGroup("categoryFilters", (val) => {
    filterState.category = val;
    renderAll();
  });

  // Room Sharing Pills
  setupPillGroup("roomFilters", (val) => {
    filterState.room = val;
    renderAll();
  });

  // Availability Pills
  setupPillGroup("availFilters", (val) => {
    filterState.availability = val;
    renderAll();
  });

  // Max Distance Pills
  setupPillGroup("distanceFilters", (val) => {
    filterState.maxDistance = parseFloat(val);
    renderAll();
  });

  // Budget Slider
  const budgetRange = document.getElementById("budgetRange");
  const budgetValue = document.getElementById("budgetValue");
  budgetRange.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    filterState.maxBudget = val;
    budgetValue.textContent = `₹${val.toLocaleString()} / mo`;
    renderAll();
  });

  // Amenities Drawer Toggle
  const btnToggleAmenities = document.getElementById("btnToggleAmenities");
  const amenitiesDrawer = document.getElementById("amenitiesDrawer");
  const chevron = document.getElementById("amenitiesChevron");
  btnToggleAmenities.addEventListener("click", () => {
    const isCollapsed = amenitiesDrawer.classList.toggle("collapsed");
    chevron.style.transform = isCollapsed ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Amenities Checkboxes
  const amenityCheckboxes = document.querySelectorAll(".amenity-check");
  amenityCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      filterState.amenities = Array.from(document.querySelectorAll(".amenity-check:checked")).map(el => el.value);
      renderAll();
    });
  });

  // Reset Filters Button
  document.getElementById("btnResetFilters").addEventListener("click", resetAllFilters);

  // Sort By Select
  document.getElementById("sortBySelect").addEventListener("change", (e) => {
    filterState.sortBy = e.target.value;
    renderAll();
  });

  // Map Controls
  document.getElementById("btnRecenterCollege").addEventListener("click", () => {
    const college = getSelectedCollege();
    if (map) map.flyTo([college.lat, college.lng], 14);
  });

  document.getElementById("btnFitAllHostels").addEventListener("click", () => {
    if (!map) return;
    const bounds = L.latLngBounds(hostels.map(h => [h.lat, h.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  });

  document.getElementById("btnUserLocate").addEventListener("click", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          userCoordinates = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          L.marker([userCoordinates.lat, userCoordinates.lng], {
            icon: createCustomPinIcon("college", `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>`)
          }).addTo(map).bindPopup("<b>You are here!</b>").openPopup();
          map.flyTo([userCoordinates.lat, userCoordinates.lng], 15);
        },
        (err) => alert("Could not fetch device location: " + err.message)
      );
    }
  });

  document.getElementById("btnCloseRoute").addEventListener("click", clearRouteLine);

  // Admin Navigation
  document.getElementById("btnAdminNav").addEventListener("click", openAdminDashboard);
  document.getElementById("btnCloseAdmin").addEventListener("click", closeAdminDashboard);
  document.getElementById("btnNewHostel").addEventListener("click", () => openHostelEditorModal(null));
  document.getElementById("btnResetDemoData").addEventListener("click", resetToDefaultData);
  document.getElementById("adminTableSearch").addEventListener("input", renderAdminTable);

  // Hostel Editor Form
  document.getElementById("btnCloseEditorModal").addEventListener("click", closeHostelEditorModal);
  document.getElementById("btnCancelEditor").addEventListener("click", closeHostelEditorModal);
  document.getElementById("hostelForm").addEventListener("submit", handleHostelFormSubmit);

  // Hostel Detail Modal
  document.getElementById("btnCloseDetailModal").addEventListener("click", closeHostelDetailsModal);

  // Mobile Map/List Toggle
  const btnViewToggle = document.getElementById("btnViewToggle");
  const viewToggleText = document.getElementById("viewToggleText");
  btnViewToggle.addEventListener("click", () => {
    const mapSec = document.getElementById("mapSection");
    const isMapVisible = mapSec.style.display === "block";
    if (isMapVisible) {
      mapSec.style.display = "none";
      viewToggleText.textContent = "Map View";
    } else {
      mapSec.style.display = "block";
      viewToggleText.textContent = "List View";
      setTimeout(() => map && map.invalidateSize(), 200);
    }
  });

  document.getElementById("btnLogoHome").addEventListener("click", () => {
    resetAllFilters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupPillGroup(containerId, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const pills = container.querySelectorAll(".pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const val = pill.dataset.gender || pill.dataset.food || pill.dataset.category || pill.dataset.room || pill.dataset.avail || pill.dataset.maxdist;
      onChange(val);
    });
  });
}

function resetAllFilters() {
  filterState.searchQuery = "";
  filterState.gender = "all";
  filterState.food = "all";
  filterState.category = "all";
  filterState.room = "all";
  filterState.availability = "all";
  filterState.maxBudget = 25000;
  filterState.maxDistance = 999;
  filterState.amenities = [];
  filterState.sortBy = "match";

  document.getElementById("searchInput").value = "";
  document.getElementById("btnClearSearch").classList.add("hidden");
  document.getElementById("budgetRange").value = 25000;
  document.getElementById("budgetValue").textContent = "₹25,000 / mo";
  document.getElementById("sortBySelect").value = "match";

  // Reset pill groups
  const groups = ["genderFilters", "foodFilters", "categoryFilters", "roomFilters", "availFilters", "distanceFilters"];
  groups.forEach(gId => {
    const el = document.getElementById(gId);
    if (el) {
      el.querySelectorAll(".pill").forEach((p, idx) => p.classList.toggle("active", idx === 0));
    }
  });

  // Reset checkboxes
  document.querySelectorAll(".amenity-check").forEach(c => c.checked = false);

  clearRouteLine();
  renderAll();
}

// Global hook for inline popup clicks
window.openHostelDetailsModal = openHostelDetailsModal;
window.closeHostelDetailsModal = closeHostelDetailsModal;
window.focusHostelMap = focusHostelMap;
window.drawRouteLine = drawRouteLine;
window.selectHostelOnMap = selectHostelOnMap;
window.openHostelEditorModal = openHostelEditorModal;
window.toggleVerifyHostel = toggleVerifyHostel;
window.deleteHostel = deleteHostel;
window.resetAllFilters = resetAllFilters;

// ============================================================================
// 11. BOOTSTRAP
// ============================================================================
document.addEventListener("DOMContentLoaded", async () => {
  await loadHostelData();
  setupEventListeners();
  initMap();
  renderAll();

  // Route check: auto-open admin view if path is /admin or hash is #admin
  if (window.location.pathname === "/admin" || window.location.hash === "#admin") {
    openAdminDashboard();
  }

  // Handle browser back/forward navigation
  window.addEventListener("popstate", () => {
    if (window.location.pathname === "/admin" || window.location.hash === "#admin") {
      document.getElementById("adminView").classList.remove("hidden");
    } else {
      document.getElementById("adminView").classList.add("hidden");
    }
  });
});
