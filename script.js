var map = L.map("mapid").on("load", onMapLoad).setView([41.4, 2.206], 9);
map.locate({ setView: true, maxZoom: 15 });

var tiles = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {}
).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];
var kindFood = [];
var foto = [];

// fase 3.1

function onMapLoad() {
  $.getJSON("http://localhost/mapa/api/apiRestaurants.php", function (data) {
    for (let i = 0; i < data.length; i++) {
      data_markers.push(data[i]);
    }

    console.log(data_markers);
    $.each(data, function (key, val) {
      kindFood.push(val.Kind_food);
    });
    console.log(kindFood);

    kindFood = kindFood.toString();
    kindFood = kindFood.split(",");
    kindFood.unshift("Todos");
    console.log(kindFood);

    Array.prototype.unique = (function (a) {
      return function () {
        return this.filter(a);
      };
    })(function (a, b, c) {
      return c.indexOf(a, b + 1) < 0;
    });
    kindFood = kindFood.unique();
    console.log(kindFood);

    for (let j = 0; j < kindFood.length; j++) {
      $("#kind_food_selector").append("<option>" + kindFood[j] + "</option>");
    }

    //photo
    console.log(data_markers);
    $.each(data, function (key, val) {
      foto.push(val.photo);
    });
    console.log(foto);

    for (let p = 0; p < foto.length; p++) {
      $("#foto_selector").append("<option>" + foto[p] + "</option>");
    }

    //photo

    for (let marker of data_markers) {
      markers.addLayer(
        L.marker([marker.lat, marker.lng]).bindPopup(
          "<strong>" +
            marker.name +
            "</strong><br>" +
            marker.address +
            "<br><i>" +
            marker.Kind_food +
            "</i><br>" +
            marker.photo
        )
      );
    }
    map.addLayer(markers);
  });
}

//set selector bucle data_marker de kind_food to array eliminan repetits

/*
data.forEach(function(value){
  let kindFoodList = value.kind_food.split(",");
  for(i=0;i<kindFoodList.length; i++){
							//nos indexa toda la lista de tipos de cocina dentro de la array. Nos muestra la lista
							if(kind_food.indexOf(kindFoodList[i])==-1){
								kind_food.push(kindFoodList[i]);
							}
						}

})*/

/*  render_to_map(data_markers, "all");
  });*/

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
    if (
      filter == "Todos" ||
      data_markers[i].Kind_food.split(",").includes(filter)
    ) {
      var marker = L.marker(
        [data_markers[i].lat, data_markers[i].lng],
        data_markers[i].name
      ).bindPopup(
        "<b>" +
          data_markers[i].name +
          "</b>" +
          "<br>" +
          data_markers[i].address +
          "<br><i>" +
          data_markers[i].Kind_food +
          "</i>"
      );
      markers.addLayer(marker);
    }
  });
  map.addLayer(markers);
}

//nivell 02




function swapImage() {
  var image = document.getElementById("imageToSwap");
  var dropd = document.getElementById("foto_selector");
  image.src = dropd.value;
}



//nivell 03

function geolocalizador() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      var marker = L.marker([
        position.coords.latitude,
        position.coords.longitude,
      ]).addTo(map);
      marker.bindPopup("<b>Usted esta aquí</b>").openPopup();
    },
    function (error) {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
    }
  );
}

function geolocalizadorNoMostrar() {
  location.reload();
}

function cleanMarkers() {
  navigator.geolocation.getCurrentPosition(function () {
    markers.clearLayers();
  });
}

var flag = true;
function showOrNot() {
  if (flag) {
    geolocalizador();
    console.log("on");
    flag = false;
  } else {
    geolocalizadorNoMostrar();
    console.log("off");
    flag = true;
  }
}


(function() {
  var allimgs = document.images;
  for (var i = 0; i < allimgs.length; i++) {
      allimgs[i].onerror = function() {
          this.style.visibility = "hidden"; // Other elements aren't affected. 
      }
  }
})();


