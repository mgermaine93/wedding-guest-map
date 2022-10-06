// set to center onto the geographic center of the USA
let map = L.map('map').setView([39.8283, -98.5795], 5);

// loads in the specific Open Street Map map/"tile" to use
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// trying to create a textbox over the map
L.Control.textbox = L.Control.extend({

		onAdd: function(map) {
			
      let text = L.DomUtil.create('div');
      text.id = "info_text";
      text.innerHTML = "<strong>Wedding Map 2022</strong>"
      return text;

		},

		onRemove: function(map) {
			// Nothing to do here
		}
	});

	L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
	L.control.textbox({ position: 'topleft' }).addTo(map);

// actually adds the points to the map
let invited = L.geoJson(guestsJson, {filter: attendedFilter}).addTo(map);

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

// Heard from but not invited (?)
let heardFrom = null;

// Family
let family = null;

// Friends
let friends = null;

// Pre-College friends
let preCollegeFriends = null;

// College friends
let collegeFriends = null;

// Post-College friends
let postCollegeFriends = null;

// Attended rehearsal dinner
let attendedRehearsalDinner = null;

// Attended welcome party
let attendedWelcomeParty = null;

// Vendor
let isVendor = null;


// // attempting to create a legend (static for now)
// let legend = L.control({ position: "bottomright" });

// legend.onAdd = function(map) {

//   let div = L.DomUtil.create("div", "legend");

//   div.innerHTML += "<h4>Type of Guest:</h4>";
//   div.innerHTML += '<input type="checkbox" id="germaine" name="germaine" value="germaine"><label for="germaine"> Germaine</label><br>';
//   div.innerHTML += '<input type="checkbox" id="eyre" name="eyre" value="eyre"><label for="eyre"> Eyre</label><br>';
//   div.innerHTML += '<input type="checkbox" id="couple" name="couple" value="couple"><label for="couple"> Couple</label><br>';
//   div.innerHTML += '<input type="checkbox" id="attended" name="attended" value="attended"><label for="attended"> Attended</label><br>';
//   div.innerHTML += '<input type="checkbox" id="in-wedding-party" name="in-wedding-party" value="in-wedding-party"><label for="in-wedding-party"> In Wedding Party</label><br>';
//   div.innerHTML += '<input type="checkbox" id="sent-gift" name="sent-gift" value="sent-gift"><label for="sent-gift"> Sent Gift</label><br>';
//   div.innerHTML += '<input type="checkbox" id="heard-from" name="heard-from" value="heard-from"><label for="heard-from"> Heard From</label><br>';

  
//   return div;
// };

// legend.addTo(map);
