// Geojson link to data
let URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Create map object.
// Set the longitude, latitude, and starting zoom level.
let myMap = L.map("map").setView([38.450, -96.5795], 4.5);

// Add a tile layer of US to map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Loop through data to pull lat lon and depth.
