// Coordinates and infowindow details which will be displayed to the user
const festivals = [
  {
    position: { lat: 51.5941, lng: -0.1298 },
    content: {
      html:
        '<h4>Kaleidoscope Festival</h4><p>Kaleidoscope Festival is Londons highest festivals,set atop a hill within 196 acres of parkland offering the best panoramic views across the city.</p><a href="https://kaleidoscope-festival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.4597, lng: -0.064 },
    content: {
      html:
        '<h4>Gala Festival</h4><p>Independent South London festival nestled in a woodland corner of Peckham Rye Park.</p><a href="https://thisisgala.co.uk/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.424, lng: -0.0691 },
    content: {
      html:
        '<h4>South Facing Festival</h4><p>South Facing Festival is a brand new outdoor concert series coming to Crystal Palace Park.</p><a href="https://southfacingfestival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.6577, lng: -0.1365 },
    content: {
      html:
        '<h4>51st State</h4><p>Since 2015, 51st State Festival has been joining the dots between seminal figures of dance music culture and the new generation of artists pushing the movement forward today.</p><a href="https://www.51ststatefestival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.4036, lng: -0.3378 },
    content: {
      html:
        '<h4>Hampton Court Palace Festival</h4><p>Summer festival at Hampton Court Palace.</p><a href="https://hamptoncourtpalacefestival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.5366, lng: -0.039 },
    content: {
      html:
        '<h4>All Points East Festival</h4><p>All Points East is a festival in London’s Victoria Park.</p><a href="https://www.allpointseastfestival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.4589, lng: -0.1493 },
    content: {
      html:
        '<h4>YAM Carnival</h4><p>Summer festival at Clapham Common, London.</p><a href="https://yamcarnival.com/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.5082, lng: -0.0596 },
    content: {
      html:
        '<h4>Junction 2</h4><p>Summer festival taking place at Tobacco Dock, Wapping.</p><a href="https://www.junction2.london/" target="_blank">See official website</a>',
    },
  },
  {
    position: { lat: 51.4506, lng: -0.1069 },
    content: {
      html:
        '<h4>Wide Awake</h4><p>Bringing together notes from the underground, Wide Awake, is a festival for music fans looking for something different.</p><a href="https://wideawakelondon.co.uk/" target="_blank">See official website</a>',
    },
  },
];
// Coordinates and infowindow details which will be displayed to the user
const bars = [
  {
    position: { lat: 51.5121, lng: -0.1186 },
    content: {
      html:
        '<h4>Radio Rooftop Bar</h4><p>Radio Rooftop is one of London’s most iconic venues.</p><a href="https://radiorooftop.com/" target="_blank">See official website</a>',
    },
  },
];
// Declaring variables
let mapId = document.getElementById("map");
// icon used from : https://freeicons.io/
let icon = {url:'assets/images/icon.webp'};
let markers = [];
let map;
let infowindow;
// Google maps documentation for references of how to initialize map: https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 51.5941, lng: -0.1298 },
    scrollwheel:false,
    draggable:true,
  });
  //  }
  infowindow = new google.maps.InfoWindow({
    content: "",
  });
}
// This function clears markers and adds new markers with infowindow when called
function dropFestival() {
  clearMarkers();
  for (let i = 0; i < festivals.length; i++) {
    addMarker(festivals[i].position, i * 100, festivals[i].content.html);
  }
}
// This function clears marker and adds new markers with infowindow when called
function dropBars() {
  clearMarkers();
  for (let j = 0; j < bars.length; j++) {
    addMarker(bars[j].position, j * 500, bars[j].content.html);
  }
}
// Used for reference of how to add timeout to markers https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration#maps_marker_animations_iteration-html
function addMarker(position, timeout, content) {
  let marker;
  window.setTimeout(() => {
    marker = new google.maps.Marker({
      position: position,
      title: "Click for info",
      map: map,
      animation: google.maps.Animation.DROP,
      icon:icon,
    });
    google.maps.event.addListener(marker, "click", () => {
      infowindow.open(map, marker);
      infowindow.setContent(content);
    });
    markers.push(marker);
  }, timeout);
}
// When invoked this function clears any markers from the map
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// This code invokes function which drops markers when button "Off Season"is clicked
let barMarkers = document.getElementById("drop-season");
barMarkers.addEventListener("click", (event) => {
  dropBars();
  mapId.scrollIntoView();
});
// This code invokes function which drops markers when button "Music Festivals"is clicked
let festivalMarkers = document.getElementById("drop");
festivalMarkers.addEventListener("click", (event) => {
  dropFestival();
  mapId.scrollIntoView();
});
