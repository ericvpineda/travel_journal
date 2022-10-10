// js to show mapbox map onto show.ejs
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: travel.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: "globe", // display the map as a 3D globe
  style: 'mapbox://styles/mapbox/outdoors-v11'
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

const marker = new mapboxgl.Marker()
  .setLngLat(travel.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({offset : 25})
    .setHTML(
      `<h5>${travel.title}</h5>
      <p>${travel.location}</p>
      `
    )
  )
  .addTo(map);