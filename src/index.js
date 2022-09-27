// set to center onto the geographic center of the USA
let map = L.map('map').setView([39.8283, -98.5795], 5);

// loads in the specific Open Street Map map/"tile" to use
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// make a bunch of these that correspond to each of the guests
let guests = [
    {
        "type": "Feature",
        "properties": {
            "name": "First Presbyterian Church of Wooster",
            "amenity": "Church",
            "popupContent": "This is where I was married!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-81.93569, 40.80592]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Matt",
            "attended": true,
            "is_officiant": false,
            "in_wedding_party": true,
            "is_groom": true,
            "is_bride": false,
            "inviter": "Germaine"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -79.89294,
                40.438918
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Meredith",
            "attended": true,
            "is_officiant": false,
            "in_wedding_party": true,
            "is_groom": false,
            "is_bride": true,
            "inviter": "Eyre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -79.89294,
                40.438918
            ]
        }
    }
];

// actually adds the points to the map
L.geoJSON(guests).addTo(map);
