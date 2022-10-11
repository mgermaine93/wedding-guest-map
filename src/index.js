// Creates the custom church icon.
let churchIcon = L.icon({
  iconUrl: './img/church.png',
  iconSize: [36, 36], // size of the icon
  iconAnchor: [18, 18], // point of the icon which will correspond with the marker's actual location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor,
});

// Defines the church marker and makes it its own layer so that it shows when the page initially loads.
let church = L.marker(
  [40.805270, -81.935620], {
    icon: churchIcon,
    alt: 'First Presbyterian Church of Wooster'
  }
).bindPopup('This is where we got married!');

let churchGroup = L.layerGroup([church]);

// Uses the helper functions (defined elsewhere) to create the different groups of guests based on criteria.
let stateOutlines = L.geoJson(usStatesData, {
  style: style,
  onEachFeature: onEachFeature
})
let everyone = L.geoJSON(guestsJson, {
  filter: everyoneFilter,
  onEachFeature: onEachFeature
})
let couple = L.geoJSON(guestsJson, {
  filter: coupleFilter,
  onEachFeature: onEachFeature
})
let invited = L.geoJSON(guestsJson, {
  filter: invitedFilter,
  onEachFeature: onEachFeature
})
let attended = L.geoJSON(guestsJson, {
  filter: attendedFilter,
  onEachFeature: onEachFeature
})
let bridesSide = L.geoJSON(guestsJson, {
  filter: bridesSideFilter,
  onEachFeature: onEachFeature
})
let groomsSide = L.geoJSON(guestsJson, {
  filter: groomsSideFilter,
  onEachFeature: onEachFeature
})
let couplesSide = L.geoJSON(guestsJson, {
  filter: couplesSideFilter,
  onEachFeature: onEachFeature
})
let weddingParty = L.geoJSON(guestsJson, {
  filter: weddingPartyFilter,
  onEachFeature: onEachFeature
})
let bridesFamily = L.geoJSON(guestsJson, {
  filter: isBridesFamilyFilter,
  onEachFeature: onEachFeature
})
let groomsFamily = L.geoJSON(guestsJson, {
  filter: isGroomsFamilyFilter,
  onEachFeature: onEachFeature
})
let heardFrom = L.geoJSON(guestsJson, {
  filter: heardFromFilter,
  onEachFeature: onEachFeature
})
let family = L.geoJSON(guestsJson, {
  filter: isFamilyFilter,
  onEachFeature: onEachFeature
})
let friends = L.geoJSON(guestsJson, {
  filter: isFriendFilter,
  onEachFeature: onEachFeature
})
let familyFriends = L.geoJSON(guestsJson, {
  filter: isFamilyFriendFilter,
  onEachFeature: onEachFeature
})
let preCollegeFriends = L.geoJSON(guestsJson, {
  filter: isPreCollegeFriendFilter,
  onEachFeature: onEachFeature
})
let collegeFriends = L.geoJSON(guestsJson, {
  filter: isCollegeFriendFilter,
  onEachFeature: onEachFeature
})
let postCollegeFriends = L.geoJSON(guestsJson, {
  filter: isPostCollegeFriendFilter,
  onEachFeature: onEachFeature
})
let rehearsalDinnerAttendees = L.geoJSON(guestsJson, {
  filter: attendedRehearsalDinnerFilter,
  onEachFeature: onEachFeature
})
let welcomePartyAttendees = L.geoJSON(guestsJson, {
  filter: attendedWelcomePartyFilter,
  onEachFeature: onEachFeature
})
let vendors = L.geoJSON(guestsJson, {
  filter: isVendorFilter,
  onEachFeature: onEachFeature
})

// Loads in the specific Open Street Map map/"tile" to use
let osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
});

// Set the center onto the geographic center of the USA
let map = L.map('map', {
  center: [39.8283, -98.5795],
  // Thanks to https://leafletjs.com/examples/zoom-levels/
  zoomSnap: 0.25,
  zoom: 4.75,
  layers: [osm, churchGroup] // These load when the page is initially loaded
});

// Defines the base open street map view that we see upon page load
let baseMaps = {
  "OpenStreetMap": osm,
}

// Defines the different layers we can select in the control
let overlayMaps = {
  // Different groups of points go here
  "Church": churchGroup,
  "State Outlines": stateOutlines,
  "Everyone": everyone,
  "Couple": couple,
  "Invitees": invited,
  "Attendees": attended,
  "Bride's Side": bridesSide,
  "Groom's Side": groomsSide,
  "Couple's Side": couplesSide,
  "Wedding Party": weddingParty,
  "Bride's Family": bridesFamily,
  "Groom's Family": groomsFamily,
  "Family": family,
  "Friends": friends,
  "Family Friends": familyFriends,
  "Pre-College Friends": preCollegeFriends,
  "College Friends": collegeFriends,
  "Post-College Friends": postCollegeFriends,
  "Rehearsal Dinner Attendees": rehearsalDinnerAttendees,
  "Welcome Party Attendees": welcomePartyAttendees,
  "Vendors": vendors,
  "Heard From (but not invited)": heardFrom 
}

// Basically sets the control menu in the upper right of the map
let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// HELPER FUNCTIONS THAT PARSE GUESTS INTO DIFFERENT GROUPS BASED ON CRITERIA
function onEachFeature(feature, layer) {
  // checks if the feature has a property called "popupContent"
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    // click: zoomToFeature,
  })
}

// The Couple
function coupleFilter(feature) {
  if (feature.properties.is_groom || feature.properties.is_bride) {
    return true;
  }
}

// Everyone
function everyoneFilter(feature) {
  return true;
}

// Invited
function invitedFilter(feature) {
  if (feature.properties.invited == true) {
    return true;
  }
}

// Attended
function attendedFilter(feature) {
  if (feature.properties.attended_wedding == true) {
    return true;
  }
}

// Bride side
function bridesSideFilter(feature) {
  if (feature.properties.inviter == "Eyre") {
    return true;
  }
}

// Groom side
function groomsSideFilter(feature) {
  if (feature.properties.inviter == "Germaine") {
    return true;
  }
}

// Couple side (friends, etc.)
function couplesSideFilter(feature) {
  if (feature.properties.inviter == "Couple") {
    return true;
  }
}

// In wedding party
function weddingPartyFilter(feature) {
  if (feature.properties.in_wedding_party == true) {
    return true;
  }
}

// Is bride's family
function isBridesFamilyFilter(feature) {
  if (feature.properties.is_family == true && feature.properties.inviter == "Eyre") {
    return true;
  }
}

// Is groom's family
function isGroomsFamilyFilter(feature) {
  if (feature.properties.is_family == true && feature.properties.inviter == "Germaine") {
    return true;
  }
}

// Heard from but not invited
function heardFromFilter(feature) {
  if (feature.properties.heardFrom == true && feature.properties.invited == false) {
    return true;
  }
}

// Family
function isFamilyFilter(feature) {
  if (feature.properties.is_family == true) {
    return true;
  }
}

// Friends
function isFriendFilter(feature) {
  if (feature.properties.is_friend == true) {
    return true;
  }
}

// Family friends
function isFamilyFriendFilter(feature) {
  if (feature.properties.is_family_friend == true) {
    return true;
  }
}

// Pre-College friends
function isPreCollegeFriendFilter(feature) {
  if (feature.properties.is_pre_college_friend == true) {
    return true;
  }
}

// College friends
function isCollegeFriendFilter(feature) {
  if (feature.properties.is_college_friend == true) {
    return true;
  }
}
// Post-College friends
function isPostCollegeFriendFilter(feature) {
  if (feature.properties.is_post_college_friend == true) {
    return true;
  }
}

// Attended rehearsal dinner
function attendedRehearsalDinnerFilter(feature) {
  if (feature.properties.attended_rehearsal_dinner == true) {
    return true;
  }
}

// Attended welcome party
function attendedWelcomePartyFilter(feature) {
  if (feature.properties.attended_welcome_party == true) {
    return true;
  }
}

// Vendor
function isVendorFilter(feature) {
  if (feature.properties.is_vendor == true) {
    return true;
  }
}

// Get colors based on population density
function getColor(dataPoint) {
  return dataPoint > 50 ? '#b10026' :
         dataPoint > 20 ? '#e31a1c' :
         dataPoint > 10  ? '#fc4e2a' :
         dataPoint > 5  ? '#fd8d3c' :
         dataPoint > 3  ? '#feb24c' :
         dataPoint > 2   ? '#fed976' :
         dataPoint > 1   ? '#ffeda0' :
         dataPoint > 0   ? '#ffffcc' :
                           'white'; 
}

// Styles the colors based on the density determined above
function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

// Outlines a state in a dark grey border when the user hovers over it with a mouse.
function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',  // dark grey
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

// Removes the dark grey border (defined immediately above) when the user removes their mouse cursor from over the state.
function resetHighlight(e) {
  // Important to reset the highlights of the states data, NOT the guests data!
  stateOutlines.resetStyle(e.target);
  info.update();
}

// Enables a user to click on a state to zoom in and see points in more detail.
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Creates the map title
let title = L.control({position: 'topleft'});

title.onAdd = function (map) {
  let div = L.DomUtil.create('div', 'info title')
  div.innerHTML += '<h1>Wedding Map</h1>';
}

// Creates the Info menu that dynamically populates with state and guest number data whenever states are hovered over
let info = L.control({position: 'bottomleft'});

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// Method that we will use to update the control based on feature properties passed
info.update = function (props) {

    // Adjusts the text that the user sees to be grammatically correct
    function returnGuestValue(density) {
      if (density == 1) {
        return "guest"
      }
      return "guests"
    }
    this._div.innerHTML = '<h4>Matt and Meredith\'s Wedding Guests</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' ' + returnGuestValue(props.density) + ''
        : 'Hover over a state');
};


// Creates the legend for the heatmap/chloropleth diagram
let legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  let div = L.DomUtil.create('div', 'info legend')
  let grades = [0, 1, 2, 3, 5, 10, 20, 50]

  div.innerHTML += '<h3>Legend</h3>';

  // Loop through the density intervals and generate a corresponding colored label square for each interval
  for (let i = 0; i < grades.length; i++) {
    if (i == 1) {
      div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + ' person<br>';
    }
    // First element should just be zero
    else if (i < 4) {
      div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + ' people<br>';
    }
    // Last element should just be 50+
    else if (i == grades.length - 1) {
      div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + '+ people';
    }
    // Other elements should present a range
    else {
      div.innerHTML += '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' people<br>' : '+');
    }
  }
  return div;
}

// Thanks to https://stackoverflow.com/questions/60563661/leaflet-how-can-i-display-a-marker-or-legend-only-on-one-layer
stateOutlines.on('add', function(e) {
  if (map.hasLayer(stateOutlines)) {
    info.addTo(map);
    legend.addTo(map);
  }
});

// Thanks to https://gis.stackexchange.com/questions/244844/how-to-remove-the-leaflet-l-control-layers
stateOutlines.on('remove', function(e) {
  if (! map.hasLayer(stateOutlines)) {
    info.remove(map);
    legend.remove(map);
  }
});