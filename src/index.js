// set to center onto the geographic center of the USA
let map = L.map('map').setView([39.8283, -98.5795], 5);

// loads in the specific Open Street Map map/"tile" to use
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let guests = [
  {
    "type": "Feature",
    "properties": {
      "name": "Matt Germaine",
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
      "name": "Meredith Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": true,
      "is_groom": false,
      "is_bride": true,
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
      "name": "John Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.933406,
        41.449996
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lee Ann Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.933406,
        41.449996
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Peter Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": true,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.127501,
        33.75808
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jack Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": true,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.781703,
        36.173032
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Annie Hornung",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.781703,
        36.173032
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Morgan Jenkins",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.618038,
        33.425427
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Patricia Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.505245,
        41.143255
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Joseph Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.104914,
        37.381187
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Terri Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.104914,
        37.381187
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Nick Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.198622,
        37.484539
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Stephanie Eyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.249716,
        37.838099
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "James Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.210969,
        33.944461
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Paula Volino",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.210969,
        33.944461
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Patrick Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -98.377344,
        29.469866
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Katie Volino",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.264028,
        33.804845
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jeffrey Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.324618,
        35.799064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Linda Eyre",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.324618,
        35.799064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Allyson Avila",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.324618,
        35.799064
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Glen Fitzjerrell",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -87.806721,
        41.860179
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jane Fitzjerrell",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -87.806721,
        41.860179
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Barbara Everett",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.943385,
        37.321326
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Richard Eyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.448117,
        41.121477
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Cara Eyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -87.806721,
        41.860179
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Trish Rucker",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.393071,
        41.034336
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ms. Carolyn Naso",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.341082,
        40.931661
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Rich Eyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.405818,
        41.085152
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kathy Eyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.405818,
        41.085152
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Michael Bloom",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.3876,
        40.951448
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Anela Bloom",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.3876,
        40.951448
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mr. Shane Stewart",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.524019,
        36.395295
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Shane Stewart",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.524019,
        36.395295
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Wayne Koide",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.381799,
        37.909767
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Susan Koide",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.381799,
        37.909767
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Janet Sheffler",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.837309,
        41.466473
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lynne Megerian",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.512693,
        41.48066
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Cliff Megerian",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.512693,
        41.48066
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Caroline Megerian",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": true,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.512693,
        41.48066
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Andrew Megerian",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.985413,
        40.761885
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mark Megerian",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.596917,
        41.497582
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tom McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        "-81.42802",
        "41.540836"
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.42802,
        41.540836
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Michael McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.455024,
        41.562172
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Julie McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.455024,
        41.562172
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mackenzie McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.455024,
        41.562172
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ellie McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.455024,
        41.562172
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Logan McClave",
      "attended": true,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.455024,
        41.562172
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "John Elliott",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.364011,
        41.567419
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lauren Elliott",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.364011,
        41.567419
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lindsey Elliott",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.364011,
        41.567419
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Johnny Elliott",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.364011,
        41.567419
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gary McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.724406,
        35.649074
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Sandi McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.724406,
        35.649074
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jim McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.742698,
        38.333042
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Jim McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.742698,
        38.333042
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Peyton McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.742698,
        38.333042
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Steven McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510644,
        41.129048
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Maggie McClave",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510644,
        41.129048
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Eileen Moran",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.007593,
        41.462537
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Chris Essig",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.9326,
        41.450182
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mary Essig",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.9326,
        41.450182
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "John Wanhainen",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.892602,
        41.467344
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. John Wanhainen",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.892602,
        41.467344
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Chris Alibeckoff",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.838891,
        41.489092
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Dominique Alibeckoff",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.838891,
        41.489092
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Rick Lehtinen",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94282,
        40.810283
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Marcy Campbell",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94282,
        40.810283
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Whitaker Campbell-Lehtinen",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94282,
        40.810283
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lily Campbell-Lehtinen",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94282,
        40.810283
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jeff Roche",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.943171,
        40.810317
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Jeff Roche",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.943171,
        40.810317
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Dale Jarvis",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94257,
        40.810072
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Janet Jarvis",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.94257,
        40.810072
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "The McCusker-Johnson Family",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.942677,
        40.810071
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jim Pyers",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.942878,
        40.810103
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Jim Pyers",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.942878,
        40.810103
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jorge Scheirer",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.841368,
        40.306257
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tracy Scheirer",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.841368,
        40.306257
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "The Sterling Family",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.789812,
        35.985783
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Greg Runser",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.18109,
        40.021158
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Greg Runser",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.18109,
        40.021158
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jeff Peterson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -101.420182,
        48.25428
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Diana Peterson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -101.420182,
        48.25428
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Rhett Weaver",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.563859,
        34.653225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tammy Weaver",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.563859,
        34.653225
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Leslie Weaver",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.740369,
        36.174426
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Manuel Steffas",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.939381,
        41.455551
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Maggie Steffas",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.939381,
        41.455551
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Cindy McArdle",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.966038,
        41.456043
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kent Murphy",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.943024,
        40.810119
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Joyce Murphy",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.943024,
        40.810119
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Rose Marie Baab",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.943798,
        40.809867
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Matthew Bednarczyk",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.187314,
        42.506646
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Donna Bednarczyk",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.187314,
        42.506646
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Roger Blake",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.167306,
        42.492168
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jen Blake",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.167306,
        42.492168
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kevin Brener",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.584997,
        38.99499
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jennifer Brener",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.584997,
        38.99499
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kendall Brener",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.584997,
        38.99499
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kayleigh Brener",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.584997,
        38.99499
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Robert Brus",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.179307,
        42.496843
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Diane Brus",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.179307,
        42.496843
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Linda Conway",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.149532,
        39.924151
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Henry Cook",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.896896,
        35.413615
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Susan Cook",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.896896,
        35.413615
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gabrielle Gubernat",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.654131,
        40.707876
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Peter Costales",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.654131,
        40.707876
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Peter DeMarois",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.196501,
        42.572941
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Amy DeMarois",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.196501,
        42.572941
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Christine Germaine",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.991359,
        35.90718
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "David Germaine",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.409965,
        42.341952
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Frank Gubernat",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.54301,
        40.661899
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Blair Harrold",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.857901,
        35.968721
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alice Harrold",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.857901,
        35.968721
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Robert Holbrook",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.441918,
        35.688884
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Robert Holbrook",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.441918,
        35.688884
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Harry Holloway",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.135485,
        39.163293
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Harry Holloway",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.135485,
        39.163293
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Fred Hrinuk",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.316927,
        40.715111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Fred Hrinuk",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.316927,
        40.715111
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Arlene Lofgren",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.46097,
        39.045236
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Courtney Lofgren",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.117943,
        38.884812
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Daniel Moran",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.192814,
        42.496606
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mrs. Daniel Moran",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.192814,
        42.496606
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "JuanLuis Periche-Feliz and Family",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.791429,
        35.069581
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Marianne Quigley",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.223356,
        42.629474
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "David Dubay",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.223356,
        42.629474
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Scott Reese",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.748435,
        36.234483
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kim Reese",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.748435,
        36.234483
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Catherine Ronan",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.955835,
        42.461488
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Timothy Saunders",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.201952,
        42.497652
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lori Saunders",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.201952,
        42.497652
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Elizabeth Spainhour",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.86981,
        36.142802
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Stacy Street",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.86981,
        36.142802
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gregory Swerdlow",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.649346,
        40.426256
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Adrienne Swerdlow",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.649346,
        40.426256
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alexis Swerdlow",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.649346,
        40.426256
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Justin Swerdlow",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.649346,
        40.426256
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jeffrey Thomasson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.961754,
        36.133484
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Beth Thomasson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.961754,
        36.133484
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Flo Todd",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.481026,
        27.645144
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Barbara Wujciak",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.020357,
        35.91855
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Edwin Wujciak",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.157254,
        26.605269
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alice Wujciak",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.157254,
        26.605269
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "James Wujciak",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.246492,
        40.921692
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Linda Wujciak",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.765606,
        35.148801
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Martine Gubernat",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.616254,
        40.603666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ms. Susan A. Zega",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.616254,
        40.603666
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tom McKarns",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.772993,
        42.223011
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Lisa McKarns",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.772993,
        42.223011
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Andrew Badger",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -97.250075,
        32.845952
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jake Boca",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.948811,
        40.459991
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Derrick Callahan",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.948811,
        40.459991
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Joey Smerud",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -91.224185,
        43.804889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jenni Smerud",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -91.224185,
        43.804889
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alex Chabraja",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -97.736477,
        30.320725
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gabi Berrios",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -97.736477,
        30.320725
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "James Coddington",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.956267,
        39.403528
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Gwen Coddington",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.956267,
        39.403528
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Emily Corwin",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.19802,
        42.546329
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Joe Thornton",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.19802,
        42.546329
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jacob Duchan",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.178658,
        42.481369
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Aimon Dwan",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -93.141799,
        44.937071
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Rafa Auqui",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -93.141799,
        44.937071
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Anna Easterday",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.177962,
        41.094632
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Melanie Fraser",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.49582,
        42.447629
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Tim Fraser",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.49582,
        42.447629
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Umberto Gordon",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.397508,
        38.362899
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Colleen Gordon",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.397508,
        38.362899
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Fiona Gordon",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.397508,
        38.362899
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ed Hebb",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.958041,
        40.784741
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Linda Hebb",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.958041,
        40.784741
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jeremy Hernandez-Hermann",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -85.626543,
        42.289176
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Dalia Hernandez-Hermann",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -85.626543,
        42.289176
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kirstin Holm",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -93.294867,
        44.944439
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Adrienne James",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.657427,
        41.395957
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kelsey Jandrey",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -87.911931,
        43.138828
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Emily Lanzola Mariner",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.045915,
        41.36023
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Charles Kammer",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.895377,
        40.830699
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ryan Kish",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.924684,
        40.473002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Taylor Thorp",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.924684,
        40.473002
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Susan Kuecker",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.998391,
        44.533998
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jim Grahm",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.998391,
        44.533998
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Grace Kramer",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -93.283865,
        44.956737
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Max Kramer",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -93.283865,
        44.956737
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Blake Larson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510945,
        41.476022
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Miles Larson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510945,
        41.476022
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Amy Larson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510945,
        41.476022
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Matt Larson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.510945,
        41.476022
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kati McArdle",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.080394,
        35.914176
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Michael Jones",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.080394,
        35.914176
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "David McConnell",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.971713,
        40.843143
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Cathy McConnell",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.971713,
        40.843143
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Bri McIntyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.368852,
        40.819357
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Shane McIntyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.368852,
        40.819357
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Noelle McIntyre",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.368852,
        40.819357
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Wes Myers",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -85.804639,
        40.187232
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Jonell Myers",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -85.804639,
        40.187232
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Keely Pearce",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -82.593532,
        39.714287
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Bob Randall",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.947456,
        40.831847
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Bobbie Randall",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.947456,
        40.831847
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Ben Robertson",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.061768,
        43.174827
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alea Safier",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.14965,
        42.376977
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "David Freund",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.14965,
        42.376977
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kelsey Scott",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.018517,
        40.026996
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Andy Patt",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.018517,
        40.026996
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Edmund Shi",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.116438,
        40.89522
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Kate Sickles",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.775547,
        42.220214
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Michael Sickles",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.775547,
        42.220214
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Eliza Sickles",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.775547,
        42.220214
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Whitney Sims",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.540702,
        41.466132
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Maria Steffas",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.858075,
        41.463629
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Cindy Tran",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.035414,
        37.534154
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Stephen Tryban",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.760607,
        43.59557
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Brian Tucker",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.067854,
        36.120617
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Elliott Valentine",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -89.361001,
        43.083665
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Katelyn French",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -89.361001,
        43.083665
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Alejandra Vargas",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -90.890464,
        33.402866
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Amilcar Vargas",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -90.890464,
        33.402866
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Dan Vedda",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -81.905003,
        41.339548
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Steve Voelker",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.25314,
        40.828479
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Samantha Voelker",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Germaine"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.25314,
        40.828479
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Linda Morgan-Clement",
      "attended": true,
      "is_officiant": true,
      "in_wedding_party": true,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Couple"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -88.408801,
        44.284978
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Mike Clement",
      "attended": false,
      "is_officiant": false,
      "in_wedding_party": false,
      "is_groom": false,
      "is_bride": false,
      "inviter": "Couple"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -88.408801,
        44.284978
      ]
    }
  }
];

// actually adds the points to the map
L.geoJSON(guests).addTo(map);
