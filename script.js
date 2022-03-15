navigator.geolocation.getCurrentPosition(function(x){
    console.log("lat:"+x.coords.latitude+" long:"+x.coords.longitude )
    initMap(x.coords.latitude,x.coords.longitude);
})

let map;

function initMap(x,y) {
  // uluru={ lat: x, lng: y}
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: x, lng: y},
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: { lat: x, lng: y},
    map: map,
  });
}

