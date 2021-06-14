var map = L.map("mapid").on("load", onMapLoad).setView([41.4, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});

var tiles = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {}
).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];
const api_url = "http://localhost/mapa/api/apiRestaurants.php";

// fase 3.1

function onMapLoad() {
  /*fetch('http://localhost/mapa/api/apiRestaurants.php')
    .then(res => res.json())
    .then(data => {
        console.log("response", data);
       // for (let i = 0; i < response.length; i++) {
          //  data_markers.push(response[i]);
        });
	//console.log("--------------");
	//console.log(data_markers);
	//console.log(response);*/

  $.getJSON("http://localhost/mapa/api/apiRestaurants.php", function (data) {
    for (let i = 0; i < data.length; i++) {
      data_markers.push(data[i]);
    }
    console.log(data_markers);

    for (let marker of data_markers) {
      markers.addLayer(
        L.marker([marker.lat, marker.lng]).bindPopup(
          "<strong>" +
            marker.name +
            "</strong><br>" +
            marker.address +
            "<br><i>"
        )
      );
    }
    map.addLayer(markers);
  });

  /*async function onMapLoad(datos){
		let joke = await fetch(datos);
		let jokeJSON = await joke.json();
	  
		console.log(jokeJSON.value);
		$display.innerHTML = `"${jokeJSON.value.joke}"`;
	  }
	  */

  $("#kind_food_selector").on("change", function () {
    console.log(this.value);
    render_to_map(data_markers, this.value);
  });

  //FASE 3.2

  function render_to_map(data_markers, filter) {
    markers.clearLayers();

    $.each(data_markers, function (i) {
      map.addLayer(markers);
    });
  }
}


//nivell 03



navigator.geolocation.getCurrentPosition(
	function(position){
		console.log(position);
		var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
		marker.bindPopup("<b>GEOLOCALIZACION</b>").openPopup();

	
	},
	function (error) {
		console.log(error);
	},
	{
		enableHighAccuracy: true
	}
);

