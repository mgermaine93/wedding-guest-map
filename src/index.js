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

// Loads in the specific Open Street Map map/"tile" to use
let osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 11,
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

// The Couple
let couple = guestsJson.features.filter(function (guest) {
  return guest.properties.is_groom || guest.properties.is_bride
})

// Everyone
let everyone = guestsJson.features.filter(function (guest) {
  return true
})

// Invited
let invited = guestsJson.features.filter(function (guest) {
  // unsure if the equivalent to "true" is needed...
  return guest.properties.invited == true
})

// Attended
let attended = guestsJson.features.filter(function (guest) {
  return guest.properties.attended_wedding
})

// Bride side
let bridesSide = guestsJson.features.filter(function (guest) {
  return guest.properties.inviter == "Eyre"
})

// Groom side
let groomsSide = guestsJson.features.filter(function (guest) {
  return guest.properties.inviter == "Germaine"
})

// Couple side (friends, etc.)
let couplesSide = guestsJson.features.filter(function (guest) {
  return guest.properties.inviter == "Couple"
})

// In wedding party
let weddingParty = guestsJson.features.filter(function (guest) {
  return guest.properties.in_wedding_party
})

// Is bride's family
let bridesFamily = guestsJson.features.filter(function (guest) {
  return guest.properties.is_family && guest.properties.inviter == "Eyre"
})

// Is groom's family
let groomsFamily = guestsJson.features.filter(function (guest) {
  return guest.properties.is_family && guest.properties.inviter == "Germaine"
})

// Heard from but not invited
let heardFrom = guestsJson.features.filter(function (guest) {
  return guest.properties.heardFrom == true && guest.properties.invited == false
})

// Family
let family = guestsJson.features.filter(function (guest) {
  return guest.properties.is_family == true
})

// Friends
let friends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_friend == true
})

// Family friends
let familyFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_family_friend == true
})

// Pre-College friends
let preCollegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_pre_college_friend == true
})

// College friends
let collegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_college_friend == true
})

// Post-College friends
let postCollegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_post_college_friend == true
})

// Attended rehearsal dinner
let rehearsalDinnerAttendees = guestsJson.features.filter(function (guest) {
  return guest.properties.attended_rehearsal_dinner == true
})

// Attended welcome party
let welcomePartyAttendees = guestsJson.features.filter(function (guest) {
  return guest.properties.attended_welcome_party == true
})

// Vendor
let vendors = guestsJson.features.filter(function (guest) {
  return guest.properties.is_vendor == true
})


// Defines the base open street map view that we see upon page load
let baseMaps = {
  "OpenStreetMap": osm,
}

// Defines the different layers we can select in the control
// These are all DUMMY values that will be updated with the real values later
let overlayMaps = {
  // Different groups of points go here
  "Church": L.geoJSON(),
  // "State Outlines": stateOutlines,
  "Everyone": L.geoJSON(),
  "Couple": L.geoJSON(),
  "Invitees": L.geoJSON(),
  "Attendees": L.geoJSON(),
  "Bride's Side": L.geoJSON(),
  "Groom's Side": L.geoJSON(),
  "Couple's Side": L.geoJSON(),
  "Wedding Party": L.geoJSON(),
  "Bride's Family": L.geoJSON(),
  "Groom's Family": L.geoJSON(),
  "Family": L.geoJSON(),
  "Friends": L.geoJSON(),
  "Family Friends": L.geoJSON(),
  "Pre-College Friends": L.geoJSON(),
  "College Friends": L.geoJSON(),
  "Post-College Friends": L.geoJSON(),
  "Rehearsal Dinner Attendees": L.geoJSON(),
  "Welcome Party Attendees": L.geoJSON(),
  "Vendors": L.geoJSON(),
  "Heard From (but not invited)": L.geoJSON()
}

// Defines the different layers we can select in the control
// THESE ARE THE REAL VALUES FOR THE CONTROL
let geoJsonGroupObject = {
  // Different groups of points go here
  "Church": churchGroup,
  // "State Outlines": stateOutlines,
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

// thanks to https://stackoverflow.com/questions/44322326/how-to-get-selected-layers-in-control-layers
// this helps to tell which overlay layers are checked/plotted on the map
L.Control.Layers.include({
  getActiveOverlays: function() {
    // create a hash to hold all the layers
    let layers = {};
    let control = this;
    // loop through all the layers in the control
    control._layers.forEach(function(obj) {
      let layerName;
      // check if the layer is an overlay
      if (obj.overlay) {
        // get the name of the overlay
        layerName = obj.name;
        // store whether it's present on the map or not
        return layers[layerName] = control._map.hasLayer(obj.layer);
      }
    });
    
    // console.log(layers)
    keys = Object.keys(layers)
    
    let activeLayers = keys.filter(function(key) {
      return layers[key]
    })
    return activeLayers;
  }
})

// sets the control menu in the upper right of the map
let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

// these values are what are ultimately plotted/used on the map
let markerCluster = L.markerClusterGroup()
let parentGroup = L.geoJSON()

// every time an overlay is added or removed, do something
map.on('overlayadd', constructListOfPeopleThatWillBePlottedOnTheMap)
map.on('overlayremove', constructListOfPeopleThatWillBePlottedOnTheMap)

// OKAY, so this function creates a DUPLICATE-FREE list of people features that are ready to be plotted on the map. 
function constructListOfPeopleThatWillBePlottedOnTheMap() {
  
  // removes any existing layers from the predefined markercluster group so that duplicate layers are not plotted
  markerCluster.eachLayer(function(layer) {
    markerCluster.removeLayer(layer)
  })

  // removes any existing layers from the predefined parent group so that duplicate layers are not plotted
  parentGroup.eachLayer(function(layer) {
    parentGroup.removeLayer(layer)
  })

  // constants
  let peopleWhoAreSelectedToBePlotted = []
  let activeLayerNames = layerControl.getActiveOverlays()

  // iterates through the STRING values
  activeLayerNames.forEach(function(layerName) {
    // gets the actual array of objects
    let actualLayerOfPeople = geoJsonGroupObject[layerName]
    // console.log(actualLayerOfPeople)
    actualLayerOfPeople.forEach(function(person) {
      // capture the names that are already in the list to be plotted
      let namesOfPeopleToBePlotted = peopleWhoAreSelectedToBePlotted.map(element => element.properties.name)
      if (namesOfPeopleToBePlotted.includes(person.properties.name)) {
        console.log(person.properties.name)
        console.log("Duplicate detected!")
      }
      else {
        peopleWhoAreSelectedToBePlotted.push(person)
      }
    })
  })
  // adds each feature (each feature represents a person) to the list defined above
  peopleWhoAreSelectedToBePlotted.forEach(function(personFeature) {
    parentGroup.addData(personFeature)
  })
  parentGroup.eachLayer(function(layer) {
    layer.bindPopup(layer.feature.properties.popupContent)
    markerCluster.addLayer(layer)
  })
  // parentGroup.addTo(map);
  map.addLayer(markerCluster)
}

// // HELPER FUNCTIONS THAT PARSE GUESTS INTO DIFFERENT GROUPS BASED ON CRITERIA
// function onEachFeature(feature, layer) {
//   // checks if the feature has a property called "popupContent"
//   if (feature.properties && feature.properties.popupContent) {
//     layer.bindPopup(feature.properties.popupContent);
//   }
  // if (map.hasLayer(layer)) {
  //   console.log(feature)
  //   console.log("Hi")
  // }
  // if (! map.hasLayer(layer)) {
  //   map.addLayer(layer)
  // }
  // else if (map.hasLayer(layer)) {
  //   map.removeLayer(layer)
  // }
  
  // console.log(feature);
  // console.log(layer);
  // let activeLayers = layerControl.getActiveOverlayLayers()
  // for (let layer in activeLayers) {
  //   console.log(layer)
  // }
  // layer.on({
  //   mouseover: printLayers, // highlightFeature
  //   mouseout: resetHighlight,
  //   click: zoomToFeature,
  // })
// }

// // Get colors based on population density
// function getColor(dataPoint) {
//   return dataPoint > 50 ? '#b10026' :
//          dataPoint > 20 ? '#e31a1c' :
//          dataPoint > 10  ? '#fc4e2a' :
//          dataPoint > 5  ? '#fd8d3c' :
//          dataPoint > 3  ? '#feb24c' :
//          dataPoint > 2   ? '#fed976' :
//          dataPoint > 1   ? '#ffeda0' :
//          dataPoint > 0   ? '#ffffcc' :
//                            'white'; 
// }


// // Styles the colors based on the density determined above
// function style(feature) {
//   return {
//     fillColor: getColor(feature.properties.density),
//     weight: 2,
//     opacity: 1,
//     color: 'white',
//     dashArray: '3',
//     fillOpacity: 0.7
//   };
// }

// // Outlines a state in a dark grey border when the user hovers over it with a mouse.
// function highlightFeature(e) {
//   if (map.hasLayer(stateOutlines)) {
//     console.log('booger')
//     let layer = e.target;

//     layer.setStyle({
//         weight: 5,
//         color: '#666',  // dark grey
//         dashArray: '',
//         fillOpacity: 0.7
//     });

//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//     }
//     info.update(layer.feature.properties);
//   }
// }

// // Removes the dark grey border (defined immediately above) when the user removes their mouse cursor from over the state.
// function resetHighlight(e) {
//   if (map.hasLayer(stateOutlines)) {
//     // Important to reset the highlights of the states data, NOT the guests data!
//     stateOutlines.resetStyle(e.target);
//     info.update();
//   }
// }

// // Enables a user to click on a state to zoom in and see points in more detail.
// function zoomToFeature(e) {
//   if (map.hasLayer(stateOutlines)) {
//     map.fitBounds(e.target.getBounds());
//   }
// }

// // Creates the map title
// let title = L.control({position: 'topleft'});

// title.onAdd = function (map) {
//   let div = L.DomUtil.create('div', 'info title')
//   div.innerHTML += '<h1>Wedding Map</h1>';
// }

// // Creates the Info menu that dynamically populates with state and guest number data whenever states are hovered over
// let info = L.control({position: 'bottomleft'});

// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
//     this.update();
//     return this._div;
// };

// // Method that we will use to update the control based on feature properties passed
// // Basically just updates the density control section when the state outlines are plotted)
// info.update = function (props) {

//     // Adjusts the text that the user sees to be grammatically correct
//     function returnGuestValue(density) {
//       if (density == 1) {
//         return "guest"
//       }
//       return "guests"
//     }
//     this._div.innerHTML = '<h4>Matt and Meredith\'s Wedding Guests</h4>' +  (props ?
//         '<b>' + props.name + '</b><br />' + props.density + ' ' + returnGuestValue(props.density) + ''
//         : 'Hover over a state');
// };


// // Creates the legend for the heatmap/chloropleth diagram
// let legend = L.control({position: 'bottomright'});

// legend.onAdd = function (map) {
//   let div = L.DomUtil.create('div', 'info legend')
//   let grades = [0, 1, 2, 3, 5, 10, 20, 50]

//   div.innerHTML += '<h3>Legend</h3>';

//   // Loop through the density intervals and generate a corresponding colored label square for each interval
//   for (let i = 0; i < grades.length; i++) {
//     if (i == 1) {
//       div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + ' person<br>';
//     }
//     // First element should just be zero
//     else if (i < 4) {
//       div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + ' people<br>';
//     }
//     // Last element should just be 50+
//     else if (i == grades.length - 1) {
//       div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + '+ people';
//     }
//     // Other elements should present a range
//     else {
//       div.innerHTML += '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' people<br>' : '+');
//     }
//   }
//   return div;
// }

// // Thanks to https://stackoverflow.com/questions/60563661/leaflet-how-can-i-display-a-marker-or-legend-only-on-one-layer
// stateOutlines.on('add', function(e) {
//   if (map.hasLayer(stateOutlines)) {
//     info.addTo(map);
//     legend.addTo(map);
//   }
// });

// // Thanks to https://gis.stackexchange.com/questions/244844/how-to-remove-the-leaflet-l-control-layers
// stateOutlines.on('remove', function(e) {
//   if (! map.hasLayer(stateOutlines)) {
//     info.remove(map);
//     legend.remove(map);
//   }
// });

// UNDER CONSTRUCTION //

// okay, some pseudo-code...

// when a layer is selected to be ADDED, what do we want to do?
// we want to first iterate over all the other layers of markers (map.eachLayer...)...

// let alreadyExists = false
// let 



// function printLayer() {
//   defaultCluster.getLayers().forEach((layer) => {
//     if (map.hasLayer()) {
//       markers = layer.getAllChildMarkers()
//       console.log(markers)
//     }
//   })
// }
// check if any other layers of markers have already been selected to be added (e.g., checked) (map.hasLayer...)...
// compare the markers in the layers that have already been added with the points in the layer that will be added...
// see if any of those markers are duplicates...
// if so, don't add duplicates of those markers.
// if not, add the marker.

// the opposite is basically true for REMOVING layers...
// when a layer is selected to be REMOVED...
// first, iterate over all the other layers of markers...
// check to see if any other layers have been added...
// check to see if the layer to be removed contains markers that are in another plotted layer (e.g., markers that should remain on the map)
// if there are such markers, somehow skip them and DON'T remove them from the map.
// if there aren't any such markers, proceed with removing them from the map.

//// DOCUMENTATION for eachLayer() and hasLayer() is probably a good place to start.
//// Need to also figure out how to iterate over markers and find points/properties of markers.
// https://leafletjs.com/reference.html#map-methods-for-layers-and-controls