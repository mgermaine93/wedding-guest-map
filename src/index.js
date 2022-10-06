// defines where the church is
let church = L.marker([-81.935620, 40.805270]).bindPopup('This is where we got married!');
let churchGroup = L.layerGroup([church]);

// actually adds the points to the map
let couple = L.layerGroup(guestsJson, {filter: coupleFilter})
let invited = L.layerGroup(guestsJson, {filter: invitedFilter})
let attended = L.layerGroup(guestsJson, {filter: attendedFilter})
let bridesSide = L.layerGroup(guestsJson, {filter: bridesSideFilter})
let groomsSide = L.layerGroup(guestsJson, {filter: groomsSideFilter})
let couplesSide = L.layerGroup(guestsJson, {filter: couplesSideFilter})
let weddingParty = L.layerGroup(guestsJson, {filter: weddingPartyFilter})
let bridesFamily = L.layerGroup(guestsJson, {filter: isBridesFamilyFilter})
let groomsFamily = L.layerGroup(guestsJson, {filter: isGroomsFamilyFilter})
let family = L.layerGroup(guestsJson, {filter: isFamilyFilter})
let friends = L.layerGroup(guestsJson, {filter: isFriendFilter})
let familyFriends = L.layerGroup(guestsJson, {filter: isFamilyFriendFilter})
let preCollegeFriends = L.layerGroup(guestsJson, {filter: isPreCollegeFriendFilter})
let collegeFriends = L.layerGroup(guestsJson, {filter: isCollegeFriendFilter})
let postCollegeFriends = L.layerGroup(guestsJson, {filter: isPostCollegeFriendFilter})
let rehearsalDinnerAttendees = L.layerGroup(guestsJson, {filter: attendedRehearsalDinnerFilter})
let welcomePartyAttendees = L.layerGroup(guestsJson, {filter: attendedWelcomePartyFilter})
let vendors = L.layerGroup(guestsJson, {filter: isVendorFilter})

// loads in the specific Open Street Map map/"tile" to use
let osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
});

// set to center onto the geographic center of the USA
let map = L.map('map', {
  center: [39.8283, -98.5795],
  zoom: 5,
  layers: [osm, churchGroup]
});
// .setView([39.8283, -98.5795], 5);

let baseMaps = {
  "OpenStreetMap": osm
}

let overlayMaps = {
  // different groups of points go here
  "Church": churchGroup,
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
  "Vendors": vendors
}

let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
let couplePoints = L.geoJson(guestsJson, {filter: coupleFilter}).addTo(map);


// // trying to create a textbox over the map
// L.Control.textbox = L.Control.extend({

// 		onAdd: function(map) {
			
//       let text = L.DomUtil.create('div');
//       text.id = "info_text";
//       text.innerHTML = "<strong>Wedding Map 2022</strong>"
//       return text;

// 		},

// 		onRemove: function(map) {
// 			// Nothing to do here
// 		}
// 	});

// 	L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
// 	L.control.textbox({ position: 'topleft' }).addTo(map);


// HELPER FUNCTIONS THAT PARSE GUESTS INTO DIFFERENT GROUPS BASED ON CRITERIA
function coupleFilter(feature) {
  if (feature.properties.is_groom || feature.properties.is_bride) {
    return true;
  }
}

// Invited
function invitedFilter(feature) {
  if (feature.properties.invited == true) {
    return true;
  }
}

// Attended
function attendedFilter(feature) {
  if (feature.properties.attended == true) {
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

// Heard from but not invited (?)
let heardFrom = null;

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
