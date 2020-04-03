// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

L.circle([32.77, -96.8], {
  color: "red",
  fillColor: "",
  fillOpacity: 0.5,
  radius: 10000
}).addTo(myMap);

// Create a red circle over Dallas
var line = [
  [40.7128, -74.0060],
  [43.6532, -79.3832]
];

L.polyline(line, {
  color: "black"
  }).addTo(myMap);

// Connect a black line from NYC to Toronto

L.polygon ([
  [33.7490, -84.3880],
  [32.0809, -81.0912],
  [30.3322, -81.6557],
  [32.3792, -86.3077]
], {
  color: "black",
  fillColor: "",
  fillOpacity: 0.25
}).addTo(myMap);
// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
