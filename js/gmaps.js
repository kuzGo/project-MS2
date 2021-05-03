const festivals = [
    
    {lat :51.5941, lng : 0.1298,},  //Alexandra Palace
    {lat :51.4597, lng : 0.0640,},  //Peckham Rye Park
    {lat :51.4240, lng : 0.0691,},  //Crystal Palace Bowl
    {lat :51.6577, lng : 0.1365,},  //Trent Park
    {lat :51.4036, lng : 0.3378,},  //Hampton Court Palace 
    {lat :51.5366, lng : 0.0390,},  //Victoria Park
    {lat :51.4589, lng : 0.1493,},  //Clapham Common  Tobacco Dock, Wapping
    {lat :51.5082, lng : 0.0596,},  //Tobacco Dock, Wapping  Brockwell Park, Brixton
    {lat :51.4506, lng : 0.1069,},  // Brockwell Park, Brixton
    
];

console.log(festivals);
let markers = [];
// Google maps documentation for references of how to initialize map: https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript
let map;

function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
        zoom : 8,
        center : {
            lat:51.5941 , 
            lng:0.1298},
        
    });
}