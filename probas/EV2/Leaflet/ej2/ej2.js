'use strict';
import {
  LeafletMap,
  TileLayer,
  Marker,
  CircleMarker,
  Control,
  DomUtil,
  Popup,
  Circle,
  Polyline,
  Polygon,
} from 'leaflet';

const map = new LeafletMap('map').setView([42.87876, -8.547238], 15);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      const { latitude, longitude } = posicion.coords;
      map.setView([latitude, longitude], 16);
    },
    function (error) {
      console.log(error.message);
    },
  );
}

let popup3 = new Popup()
  .setLatLng([42.8773, -8.54665])
  .setContent('I am a standalone popup.')
  .openOn(map);
let legend = new Control({ position: 'bottomleft' });
legend.onAdd = function (map) {
  let div = new DomUtil.create('div', 'legend');
  div.innerHTML =
    '<p><b>Simple shapes in Leaflet</b></p><hr>' +
    'Created with the Leaflet library<br>';
  return div;
};
legend.addTo(map);

let popup = new Popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      'You clicked the map at -<br>' +
        '<b>lon:</b> ' +
        e.latlng.lng +
        '<br>' +
        '<b>lat:</b> ' +
        e.latlng.lat,
    )
    .openOn(map);
}
map.on('click', onMapClick);
