const festivals = [
    
    {lat :51.5941, lng : -0.1298,},  //Alexandra Palace
    {lat :51.4597, lng : -0.0640,},  //Peckham Rye Park
    {lat :51.4240, lng : -0.0691,},  //Crystal Palace Bowl
    {lat :51.6577, lng : -0.1365,},  //Trent Park
    {lat :51.4036, lng : -0.3378,},  //Hampton Court Palace 
    {lat :51.5366, lng : -0.0390,},  //Victoria Park
    {lat :51.4589, lng : -0.1493,},  //Clapham Common  Tobacco Dock, Wapping
    {lat :51.5082, lng : -0.0596,},  //Tobacco Dock, Wapping  Brockwell Park, Brixton
    {lat :51.4506, lng : -0.1069,},  // Brockwell Park, Brixton
    
];
const bars =[
    {lat :51.5138, lng : 0.0900,},
];

let markers = [];

// Google maps documentation for references of how to initialize map: https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"),{
        zoom : 10,
        center : {
            lat:51.5941 , 
            lng:0.1298},
    });
}

function dropFestival() {
    clearMarkers();
  
    for (let i = 0; i < festivals.length; i++) {
      addMarker(festivals[i], i * 500);
    }
  }
  function dropBars() {
    clearMarkers();
  
    for (let i = 0; i < bars.length; i++) {
      addMarker(bars[i], i * 500);
    }
  }
  
  function addMarker(position, timeout) {
    window.setTimeout(() => {
      markers.push(
        new google.maps.Marker({
          position: position,
          map,
          animation: google.maps.Animation.DROP,
        })
      );
    }, timeout);
  }
  
  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }