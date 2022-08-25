import json from './guests.json';

// The Leaflet map object, centered to Wooster, OH
let map = L.map("map").setView([40.8051, -81.9351], 13);

// References the OpenStreetMap tile layer (the actual map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// First Pres
let church = L.marker([40.80592067927781, -81.93569411534408]).addTo(map);

for (let i = 0; i < json.length; i++) {
    marker = new L.marker(
        [
            json['latitude'],
            json['longitude']
        ]
    ).bindPopup(json['name']).addTo(map);
}


// map.setMaxBounds(maxBounds);
// map.fitBounds(maxBounds);
