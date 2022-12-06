var accessToken = ''
var mapboxUrl = `https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`;

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

// // somehow add these in... need mapbox token, etc.
// let streets = L.tileLayer(
//   mapboxUrl, {
//     id: 'mapbox-streets-v8', 
//     tileSize: 512, 
//     zoomOffset: -1, 
//     attribution: 'Mapbox'
//   }
// );

// let satellite = L.tileLayer(
//   mapboxUrl, {
//     id: 'mapbox-streets-v8', 
//     tileSize: 512, 
//     zoomOffset: -1, 
//     attribution: 'Mapbox'
//   }
// );


// Set the center onto the geographic center of the USA
let map = L.map('map', {
  center: [39.8283, -98.5795],
  // Thanks to https://leafletjs.com/examples/zoom-levels/
  zoomSnap: 0.25,
  zoom: 4.75,
  layers: [osm, churchGroup] // These load when the page is initially loaded
});

// the title of the project
L.Control.textbox = L.Control.extend({
		onAdd: function(map) {
      var text = L.DomUtil.create('div');
      text.id = "map_title";
      text.innerHTML = "Matt and Meredith's<br/>Wedding Guest Map"
      return text;
		},

		onRemove: function(map) {
			// Nothing to do here
		}
	});
L.control.textbox = function(opts) { 
  return new L.Control.textbox(opts);
}
L.control.textbox({ 
  position: 'topright' 
}).addTo(map);

// The Couple
let couple = guestsJson.features.filter(function (guest) {
  return guest.properties.is_groom || guest.properties.is_bride
})

// Everyone
let everyone = guestsJson.features.filter(function (guest) {
  return guest
})

// Invited
let invited = guestsJson.features.filter(function (guest) {
  // unsure if the equivalent to "true" is needed...
  return guest.properties.invited
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
  return guest.properties.is_family
})

// Friends
let friends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_friend
})

// Family friends
let familyFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_family_friend
})

// Pre-College friends
let preCollegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_pre_college_friend
})

// College friends
let collegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_college_friend
})

// Post-College friends
let postCollegeFriends = guestsJson.features.filter(function (guest) {
  return guest.properties.is_post_college_friend
})

// Attended rehearsal dinner
let rehearsalDinnerAttendees = guestsJson.features.filter(function (guest) {
  return guest.properties.attended_rehearsal_dinner
})

// Attended welcome party
let welcomePartyAttendees = guestsJson.features.filter(function (guest) {
  return guest.properties.attended_welcome_party
})

// Vendor
let vendors = guestsJson.features.filter(function (guest) {
  return guest.properties.is_vendor
})

// Defines the base open street map view that we see upon page load
let baseMaps = {
  "OpenStreetMap": osm,
  // "Streets": streets,
  // "Satellite": satellite
}

// Defines the different layers we can select in the control
// These are all DUMMY values that will be updated with the real values later
let overlayMaps = {
  // Different groups of points go here
  "Church": L.geoJSON(),
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


let layerLegend = L.control({
  position: 'bottomright',
  collapsed: false
});

layerLegend.onAdd = function () {
  let div = L.DomUtil.create('div');
  div.innerHTML = '<span class="layer_legend">blah<br/></span>';
  return div;
};

layerLegend.addTo(map);

// sets the control menu in the upper right of the map
let layerControl = L.control.layers(
  baseMaps, 
  overlayMaps, {
    position: 'bottomright',
    collapsed: false
}).addTo(map);

// cool part
let layerControlDiv = layerControl.getContainer();
layerControlDiv.insertBefore(layerLegend.getContainer(), layerControlDiv.firstChild);


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
    
    keys = Object.keys(layers)
    
    let activeLayers = keys.filter(function(key) {
      // factors out the layers that don't have any people associated with them
      if (key !== "Church" && key !== "State Outlines") {
        return layers[key]
      }
    })
    return activeLayers;
  }
})

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

  // binds each popup and adds the entire layer to the markercluster
  parentGroup.eachLayer(function(layer) {
    layer.bindPopup(layer.feature.properties.popupContent)
    markerCluster.addLayer(layer)
  })
  // parentGroup.addTo(map);
  map.addLayer(markerCluster)
}