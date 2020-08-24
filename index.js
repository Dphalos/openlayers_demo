import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import LayerGroup from 'ol/layer/Group';


var control, controls = [];

//CREATING LAYER GROUPS
var layers = [
  new TileLayer({
    source: new OSM(),
  })
];

var layersDefault = new LayerGroup({
  layers: [
  new TileLayer({
    source: new OSM(),
  }) ]
});

var layersRoads = new LayerGroup({
  layers: [
 /* new TileLayer({
    source: new OSM(),
  }), */
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/geo_test1/wms',
      params: {'LAYERS': '	geo_test1:gis_osm_roads_free_1', 'TILED': true},
      serverType: 'geoserver',
      transition: 0,
    })
  }) ]
});




  var layersTransport = new LayerGroup({
    name: 'PublicTransportLayer',
    layers: [
    /*new TileLayer({
      source: new OSM(),
    }), */
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/geo_test1/wms',
        params: {'LAYERS': 'geo_test1:gis_osm_transport_free_1', 'TILED': true},
        serverType: 'geoserver',
        transition: 0,
      })
    }) ]
  });


  var layersPlaces = new LayerGroup({
    name: 'PublicTransportLayer',
    layers: [
    /*new TileLayer({
      source: new OSM(),
    }), */
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/geo_test1/wms',
        params: {'LAYERS': 'geo_test1:gis_osm_places_free_1', 'TILED': true},
        serverType: 'geoserver',
        transition: 0,
      })
    }) ]
  });


  var layersPois = new LayerGroup({
    name: 'PublicTransportLayer',
    layers: [
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/geo_test1/wms',
        params: {'LAYERS': 'geo_test1:gis_osm_pois_free_1', 'TILED': true},
        serverType: 'geoserver',
        transition: 0,
      })
    }) ]
  });
//CREATING LAYER GROUPS END
  
//Creating the map.
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
});


//BUTTON TYPE LAYER CHANGE
/*
//document.getElementById("mySelect").addEventListener("Transport", console.log("a"));
document.getElementById("transportMap").addEventListener("click", function() {
  map.setLayerGroup(layersTransport);
});

document.getElementById("roadsMap").addEventListener("click", function() {
  map.setLayerGroup(layersRoads);
});

document.getElementById("defaultMap").addEventListener("click", function() {
  map.setLayerGroup(layersDefault);
});
*/

//CHECKBOX TYPE LAYER CHANGE
var transportCheckbox = document.querySelector("input[name=transportCheck]");
var roadsCheckbox = document.querySelector("input[name=roadsCheck]");
var placesCheckbox = document.querySelector("input[name=placesCheck]");
var poisCheckbox = document.querySelector("input[name=poisCheck]");
//var checkbox = document.querySelector("input[name=vehicle1]");

transportCheckbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        console.log("checked");
        map.addLayer(layersTransport);
    } else {
        // Checkbox is not checked..
        console.log("not checked");
        map.removeLayer(layersTransport);
    }
});

roadsCheckbox.addEventListener( 'change', function() {
  if(this.checked) {
      // Checkbox is checked..
      console.log("checked");
      map.addLayer(layersRoads);
  } else {
      // Checkbox is not checked..
      console.log("not checked");
      map.removeLayer(layersRoads);
  }
});

placesCheckbox.addEventListener( 'change', function() {
  if(this.checked) {
      // Checkbox is checked..
      console.log("checked");
      map.addLayer(layersPlaces);
  } else {
      // Checkbox is not checked..
      console.log("not checked");
      map.removeLayer(layersPlaces);
  }
});

poisCheckbox.addEventListener( 'change', function() {
  if(this.checked) {
      // Checkbox is checked..
      console.log("checked");
      map.addLayer(layersPois);
  } else {
      // Checkbox is not checked..
      console.log("not checked");
      map.removeLayer(layersPois);
  }
});

//LAYER CHANGE END








//layers.setVisible(true);

/*
var public_transport=new ol.layer.Image({
  source:new ol.source.ImageWMS({
   
      url:'http://localhost:8080/geoserver/geo_test1/wms',
      params:{'LAYERS':'geo_test1:gis_osm_transport_free_1'},
      serverType:'geoserver'
  })
  });
        var roads=new ol.layer.Image({
  source:new ol.source.ImageWMS({
   
      url:'http://localhost:8080/geoserver/geo_test1/wms',
      params:{'LAYERS':'geo_test1:gis_osm_roads_free_1'},
      serverType:'geoserver'
  })
  });

map.addLayer(public_transport);
map.addControl(new ol.control.LayerSwitcher());

*/