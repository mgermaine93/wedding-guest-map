let maxBounds = [
    [5.499550, -167.276413], //Southwest
    [83.162102, -52.233040]  //Northeast
];

let map = L.map("map").setView([40.8051, -81.9351], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

map.setMaxBounds(maxBounds);
map.fitBounds(maxBounds);
