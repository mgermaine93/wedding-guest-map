// let maxBounds = [
//     [5.499550, -167.276413], //Southwest
//     [83.162102, -52.233040]  //Northeast
// ];


// The Leaflet map object, centered to Wooster, OH
let map = L.map("map").setView([40.8051, -81.9351], 13);

// References the OpenStreetMap tile layer (the actual map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// First Pres
let marker = L.marker([40.80592067927781, -81.93569411534408]).addTo(map);



// map.setMaxBounds(maxBounds);
// map.fitBounds(maxBounds);
