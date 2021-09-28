// This array contains the coordinates for breweries in the South Slope Brewing District of Asheville, NC
const breweryLocations = [
  [-82.55212789645736, 35.59155763916114],
  [-82.55317395788164, 35.589145266165055],
  [-82.55280381306765, 35.58866976273582],
  [-82.55372649289383, 35.588120094702205],
  [-82.5552070721704, 35.589302312541264],
  [-82.55452579113596, 35.58947244577604],
  [-82.55612920859164, 35.59131620535884],
  [-82.55496177773819, 35.59180384400719],
  [-82.55572092675227, 35.594356117014534],
];

/*
    This array contains the names for each brewery in breweryLocations based on the same index as the coordinates.
    I want to change this to a single array called 'breweries' and access the elements within appropriately
    based on what I need, but I'm not sure how to do that yet.
*/

const breweryNames = [
    'Bhramari Brewing Company',
    'Catawba Brewing Company',
    'Green Man Brewing',
    'Burial Beer Co.',
    'Wicked Weed Funkatorium',
    'Twin Leaf Brewery',
    'High-Wire Brewing',
    'Asheville Brewing Company',
    'Thirsty Monk',
]

mapboxgl.accessToken =
  'INSERT YOUR TOKEN HERE';

//creates the Mapbox map object 
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-82.553803, 35.591112],
  zoom: 16,
});

//initializes a popup object to be used later 
//can be clicked to show text, but I can't figure out how to show the popup on load
let popup = new mapboxgl.Popup({ offset: [0, -15] }).setText(
    'South Slope Brewing District - Asheville, NC'
);

// creates a marker object and adds it to the map with a starting point
let marker = new mapboxgl.Marker().setLngLat([-82.553803, 35.591112]).setPopup(popup).addTo(map);

// increment through the list of brewery locations
let counter = 0;

function move() {
  setTimeout(() => {
    if (counter >= breweryLocations.length) return;
    const name = breweryNames[counter];

    marker.setLngLat(breweryLocations[counter]);
    popup.setLngLat(breweryLocations[counter])
    .setText(name)
    .addTo(map);

    counter++;
    move();
  }, 1000);
  showAll();
}

if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, breweryLocations, breweryNames };
}
