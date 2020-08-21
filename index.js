import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';


var control, controls = [];


var layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/geo_test1/wms',
      params: {'LAYERS': 'geo_test1:gis_osm_transport_free_1', 'TILED': true},
      serverType: 'geoserver',
      transition: 0,
    }),
  }) ];
  
var map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
});



function setMapType(newType) {
  if(newType == 'OSM') {
      map.setLayerGroup(layersOSM);
  } else if (newType == 'MAPQUEST_OSM') {
      map.setLayerGroup(layersMQ);
  }
}
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