# 🏠 HostelMatch – Smart Student Hostel & PG Discovery Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green.svg)](https://leafletjs.com/)
[![CARTO Voyager](https://img.shields.io/badge/Map%20Tiles-CARTO%20Voyager-orange.svg)](https://carto.com/)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20JS%2FNode)-brightgreen.svg)]()

> A full-featured student housing discovery platform and live campus radar modeled after **HostelMatch**, upgraded with real-time interactive mapping (CARTO Voyager tiles), Haversine college proximity routing, 24 verified real student accommodations in Mumbai, 36 engineering colleges across 7 zones, and an interactive Admin Management Dashboard.

---

## 🌟 Highlights & Key Features

### 1. 🗺️ Live Campus Radar Map (Leaflet + CARTO Voyager)
- **High-Performance Map Tiles:** Built with CARTO Voyager raster tiles—completely eliminating 403 "Access Blocked" errors common with default OpenStreetMap servers on local origins.
- **24 Real Existing Accommodations:** Zero fictional placeholders. Real, verified hostels and PGs across Mumbai, Powai, Wadala, Matunga, Vile Parle, Andheri, Navi Mumbai, and Thane.
- **Custom Interactive Pins:**
  - 🟣 **Co-ed / Private Accommodations** (Purple Marker)
  - 🔵 **Boys PG / Hostels** (Blue Marker)
  - 🌸 **Girls PG / Hostels** (Rose Marker)
  - 🏛️ **Government & College Hostels** (Amber Marker)
  - 🎓 **Engineering Campuses** (Emerald Graduation Cap)
- **Live Proximity Routing:** Selecting or hovering any hostel instantly draws a live route connecting the property to your selected college, calculating distance in kilometers and live walking/transit commute durations.
- **Map Control Suite:** One-click "Recenter College", "Fit All Pins", and "Locate Me" GPS buttons.

### 2. 🎓 Comprehensive College Coverage (36 Institutes across 7 Zones)
- **Zone 1: Premier Institutes:** IIT Bombay (Powai), VJTI (Matunga), ICT (Matunga), Mumbai University (Kalina).
- **Zone 2: Western Suburbs:** SPIT & SPCE (Andheri), D.J. Sanghvi (Vile Parle), Mukesh Patel NMIMS (Vile Parle), Thadomal Shahani (Bandra), Fr. Conceicao Rodrigues CRCE (Bandra), Rizvi College of Engineering (Bandra).
- **Zone 3: Central & South Mumbai:** **Vidyalankar Institute of Technology - VIT Mumbai (Wadala East)**, K.J. Somaiya (Vidyavihar), Vivekanand Education Society VESIT (Chembur), MHSS Saboo Siddik (Byculla), Usha Mittal SNDT (Santacruz).
- **Zone 4: Navi Mumbai Hub:** SIES GST (Nerul), Ramrao Adik RAIT / DY Patil (Nerul), Fr. CRIT (Vashi), Bharati Vidyapeeth BVCOE (CBD Belapur), Pillai College of Engineering (New Panvel), Saraswati College (Kharghar), Terna Engineering (Nerul), Lokmanya Tilak LTCE (Koparkhairane).
- **Zone 5: Thane & Beyond:** Thadomal / KC College of Engineering (Thane East), A.P. Shah Institute APSIT (Ghodbunder Road), Shivajirao Jondhale (Dombivli).
- **Zone 6: North Suburbs:** Thakur College of Engineering TCET (Kandivali), St. Francis SFIT (Borivali), Atharva College (Malad).
- **Zone 7: Extended MMR:** Don Bosco DBIT (Kurla), Rajiv Gandhi RGIT (Versova), Pillai HOC (Rasayani), Universal College (Vasai), Datta Meghe DMCE (Airoli), Shivajirao S. Jondhle (Asangaon).

#### 📍 Spotlight: Vidyalankar Institute of Technology (VIT Mumbai)
- **Exact Address:** Vidyalankar Educational Campus, Vidyalankar College Marg, Sangam Nagar, Wadala East, Mumbai 400037.
- **GPS Coordinates:** `19.0222° N, 72.8715° E`
- **Transit Connectivity:**
  - 🚊 **Monorail:** Wadala Bridge Monorail Station (800m, ~10 min walk)
  - 🚆 **Harbour Railway:** Wadala Road Station (1.8 km, ~5 min shared auto via Gate 4)
  - 🚆 **Central Railway:** Dadar T.T. / Matunga Central (3.2 km, ~12 min taxi)
  - 🚌 **BEST Buses:** Sangam Nagar / Antop Hill Depot route connections (Buses 9, 14, 67, 110, 172).

### 3. 💰 Transparent Pricing & Flexible Sharing
- Starting monthly rent from **₹3,500/mo** (subsidized govt/college hostels) to **₹25,000/mo** (premium private AC studios).
- Transparent room breakdowns: Single, Double Sharing, Triple Sharing, and 4+ Bed Dormitories.
- Refundable security deposits and lock-in period details clearly disclosed.

### 4. 🥗 Food & Dietary Preferences
- Filter by:
  - 🟢 **Jain Food Available** (separate onion/garlic-free kitchens & pure Jain tiffin service)
  - 🌿 **Pure Vegetarian Only** (dedicated 100% vegetarian premises)
  - 🍱 **Veg & Non-Veg** (balanced hygienic multi-cuisine options)

### 5. 🎯 Multi-Factor Smart Match Engine
Matches properties based on:
1. **Budget Compatibility** (40% weight)
2. **Proximity to Campus** (25% weight)
3. **Room Sharing Availability** (15% weight)
4. **Amenities Overlap** (10% weight)
5. **Safety & Verification Score** (10% weight)

### 6. 🛡️ Admin Management Dashboard
- Accessible via the top navbar button or `http://localhost:3000/admin`.
- **Full CRUD:** Add new properties, update pricing/sharing details, edit coordinates, or delete old records.
- **Instant Status Toggle:** Switch properties between Verified and Pending Review.
- **Persistence:** Automatically syncs with `localStorage` (frontend) and `data/hostels.json` (when running Node/Python server).
- **One-Click Reset:** "Reset Default Data" button to restore all 24 verified properties at any time.

---

## 📁 Repository File Structure

```
hostelmatch/
├── index.html           # Core Single Page Application (Responsive UI, Filters, Radar Map, Admin Modal)
├── styles.css           # Modern SaaS stylesheet (Dark/Light mode accents, CSS Grid & Flexbox, cards)
├── app.js               # Application engine: 36 colleges, 24 verified hostels, Haversine routing, filters
├── package.json         # Node.js project manifest & npm scripts
├── server.js            # Zero-dependency Node.js HTTP server & REST API (GET, POST, PUT, DELETE)
├── server.py            # Zero-dependency Python 3 HTTP server fallback
├── start.bat            # One-click Windows runner script (auto-detects runtime or launches index.html)
├── vercel.json          # Deployment routing configuration for Vercel
├── Procfile             # Process file for Render / Heroku
├── render.yaml          # Blueprint specification for Render deployment
├── requirements.txt     # Python backend dependencies (Flask, Gunicorn, Requests)
├── app.py               # Flask REST API backend implementation
├── test_app.py          # Backend test suite (pytest)
├── .gitignore           # Ignores venv, node_modules, cache, and OS files
├── data/
│   └── hostels.json     # Primary JSON database containing 24 verified real student accommodations
├── docs/
│   └── DEPLOYMENT.md    # In-depth production deployment guide
└── README.md            # Comprehensive project documentation
```

---

## 🚀 How to Run Locally

### Option A: Zero Install / Instant Browser View
Simply double-click **`index.html`** or open it directly in Google Chrome, Microsoft Edge, or Firefox:
```
file:///path/to/hostelmatch/index.html
```
- No Node.js or Python required.
- Full map rendering, college proximity routing, smart filters, and admin dashboard work immediately via browser LocalStorage.

### Option B: One-Click Launcher (Windows)
Double-click **`start.bat`** in the project directory.
- Automatically detects Node.js or Python.
- If found, launches the local server and opens `http://localhost:3000` in your browser.
- If neither is installed, it safely opens `index.html` directly without server errors.

### Option C: Node.js Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/<your-username>/hostelmatch.git
cd hostelmatch

# Start the server (zero external npm packages required!)
npm start
# or: node server.js
```
Visit:
- **Web App:** [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Hostels API:** [http://localhost:3000/api/hostels](http://localhost:3000/api/hostels)
- **Colleges API:** [http://localhost:3000/api/colleges](http://localhost:3000/api/colleges)

### Option D: Python 3 Server
```bash
python server.py
# or: python3 server.py
```

---

## 📤 Step-by-Step GitHub Upload Guide

### Method 1: Using Git Command Line (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g. `hostelmatch` or `hostelmatch-platform`).
   - Choose **Public** (or Private).
   - Leave "Initialize with a README" **unchecked** (we already have a README).
   - Click **Create repository**.

2. **Open PowerShell or Terminal in the project directory:**
   ```powershell
   cd "C:\Users\Sai Sona\.gemini\antigravity\scratch\hostelmatch"
   ```

3. **Initialize Git and push to GitHub:**
   ```bash
   # Initialize repository
   git init

   # Add all project files
   git add .

   # Commit
   git commit -m "feat: complete HostelMatch platform with real hostels, 36 colleges and CARTO map"

   # Rename branch to main
   git branch -M main

   # Link your GitHub remote (replace with your GitHub URL)
   git remote add origin https://github.com/<your-username>/hostelmatch.git

   # Push to GitHub
   git push -u origin main
   ```

---

### Method 2: Using GitHub Web (Drag-and-Drop)

If you don't have Git installed:
1. Go to [github.com/new](https://github.com/new) and create a repository named `hostelmatch`.
2. On the empty repository page, click the link: **"uploading an existing file"**.
3. Open your local folder:
   `C:\Users\Sai Sona\.gemini\antigravity\scratch\hostelmatch`
4. Select all the files and folders:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `package.json`
   - `server.js`
   - `server.py`
   - `start.bat`
   - `vercel.json`
   - `Procfile`
   - `render.yaml`
   - `requirements.txt`
   - `README.md`
   - `.gitignore`
   - `data/` folder (with `hostels.json`)
   - `docs/` folder
   *(Note: Do not drag `venv/` or `__pycache__/`)*
5. Drag and drop them into the GitHub browser window.
6. Type a commit message (e.g. `Initial commit: HostelMatch full platform`) and click **Commit changes**.

---

## 🌐 Free One-Click Deployment

### Deploy to GitHub Pages (Static SPA)
1. Go to your GitHub repository -> **Settings** -> **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**.
5. Within 60 seconds, your site is live at:
   `https://<your-username>.github.io/hostelmatch/`

### Deploy to Vercel
1. Import your GitHub repository on [vercel.com](https://vercel.com).
2. Keep the default settings (Framework preset: *Other*).
3. Click **Deploy**.
4. The site will be instantly live with high-speed global CDN routing!

---

## 📝 License
This project is open-source and distributed under the [MIT License](LICENSE).
