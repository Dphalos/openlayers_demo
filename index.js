import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import LayerGroup from 'ol/layer/Group';


var control, controls = [];


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
  new TileLayer({
    source: new OSM(),
  }),
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
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/geo_test1/wms',
        params: {'LAYERS': 'geo_test1:gis_osm_transport_free_1', 'TILED': true},
        serverType: 'geoserver',
        transition: 0,
      })
    }) ]
  });

  
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
});



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


var myFunction = function() {
  var x = document.getElementById("mySelect").value;
  if(x == 'Transport') {
    //map.setLayerGroup(layersTransport);
    //map.render();
    console.log("transport_selected");
    console.log(x);
} else if (x == 'Roads') {
    //map.setLayerGroup(layersRoads);
    console.log("roads_selected");
}
  else if(x =='None'){
    //map.setLayerGroup(new ol.layer.Group());
    console.log("empty_map");
  }
}

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