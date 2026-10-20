"""
HostelMatch – Production Flask Backend & API
Zero-config Vercel, Render, and Local Python Server.
"""

import os
import json
from flask import Flask, jsonify, request, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "data", "hostels.json")

# Top-level Flask application instance required by Vercel
app = Flask(__name__, static_folder=".", static_url_path="")

# -----------------------------------------------------------------------------
# Database / Data Helpers
# -----------------------------------------------------------------------------
def get_hostels_data():
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Error] Failed to read {DATA_FILE}: {e}")
    return []

def save_hostels_data(data):
    try:
        os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"[Error] Failed to write {DATA_FILE}: {e}")
        return False

# -----------------------------------------------------------------------------
# Web & Static Asset Routes
# -----------------------------------------------------------------------------
@app.route("/")
def home():
    """Serve the main Single Page Application."""
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/admin")
def admin_page():
    """Serve the Admin Dashboard view."""
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/<path:filename>")
def static_proxy(filename):
    """Serve styles, scripts, images, and data assets."""
    target = os.path.join(BASE_DIR, filename)
    if os.path.isfile(target):
        return send_from_directory(BASE_DIR, filename)
    # Default fallback to index.html for SPA client-side routes
    return send_from_directory(BASE_DIR, "index.html")

# -----------------------------------------------------------------------------
# RESTful API Endpoints
# -----------------------------------------------------------------------------
@app.route("/api/hostels", methods=["GET", "POST"])
@app.route("/api/hostels/<int:hid>", methods=["GET", "PUT", "DELETE"])
def api_hostels(hid=None):
    """REST API for hostel listings: List, Create, Update, Delete."""
    hostels = get_hostels_data()

    if request.method == "GET":
        if hid is not None:
            match = next((h for h in hostels if h.get("id") == hid), None)
            if match:
                return jsonify(match)
            return jsonify({"error": "Hostel not found"}), 404
        
        q = request.args.get("q", "").strip().lower()
        gender = request.args.get("gender")
        food = request.args.get("food")
        category = request.args.get("category")
        max_price = request.args.get("max_price", type=float)

        results = hostels
        if q:
            results = [h for h in results if q in h.get("name", "").lower() or q in h.get("area", "").lower()]
        if gender:
            results = [h for h in results if h.get("gender") == gender or h.get("gender") == "coed"]
        if food:
            results = [h for h in results if h.get("food") == food]
        if category:
            results = [h for h in results if h.get("category") == category]
        if max_price:
            results = [h for h in results if float(h.get("price", 0)) <= max_price]

        return jsonify({"results": results, "count": len(results)})

    if request.method == "POST":
        payload = request.get_json(silent=True) or {}
        if not payload.get("name") or not payload.get("price"):
            return jsonify({"error": "Name and Price are required"}), 400
        
        new_id = max([h.get("id", 0) for h in hostels], default=0) + 1
        payload["id"] = new_id
        payload["verified"] = bool(payload.get("verified", True))
        hostels.append(payload)
        save_hostels_data(hostels)
        return jsonify({"status": "created", "hostel": payload}), 201

    if request.method == "PUT":
        payload = request.get_json(silent=True) or {}
        index = next((i for i, h in enumerate(hostels) if h.get("id") == hid), None)
        if index is None:
            return jsonify({"error": "Hostel not found"}), 404
        
        payload["id"] = hid
        hostels[index] = {**hostels[index], **payload}
        save_hostels_data(hostels)
        return jsonify({"status": "updated", "hostel": hostels[index]}), 200

    if request.method == "DELETE":
        index = next((i for i, h in enumerate(hostels) if h.get("id") == hid), None)
        if index is None:
            return jsonify({"error": "Hostel not found"}), 404
        
        removed = hostels.pop(index)
        save_hostels_data(hostels)
        return jsonify({"status": "deleted", "hostel": removed}), 200

@app.route("/api/health")
def health():
    return jsonify({"status": "healthy", "service": "HostelMatch Platform", "version": "1.0.0"})

# -----------------------------------------------------------------------------
# Local Development Execution
# -----------------------------------------------------------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    print(f"🏠 [HostelMatch] Flask server running at http://localhost:{port}")
    app.run(host="0.0.0.0", port=port, debug=True)
