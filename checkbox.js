/*
import LayerGroup from 'ol/layer/Group';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import TileWMS from 'ol/source/TileWMS';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import map  from './index.js';


var layersRoads = new LayerGroup({
    layers: [

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
        source: new TileWMS({
          url: 'http://localhost:8080/geoserver/geo_test1/wms',
          params: {'LAYERS': 'geo_test1:gis_osm_transport_free_1', 'TILED': true},
          serverType: 'geoserver',
          transition: 0,
        })
      }) ]
    });
  
  
    var layersPlaces = new LayerGroup({
      name: 'PlacesLayer',
      layers: [
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
      name: 'PointofInterestsLayer',
      layers: [
      new TileLayer({
        source: new TileWMS({
          url: 'http://localhost:8080/geoserver/geo_test1/wms',
          params: {'LAYERS': 'geo_test1:gis_osm_pois_free_1', 'TILED': true},
          serverType: 'geoserver',
          transition: 0
        })
      }) ]
    });


var transportCheckbox = document.querySelector("input[name=transportCheck]");
var roadsCheckbox = document.querySelector("input[name=roadsCheck]");
var placesCheckbox = document.querySelector("input[name=placesCheck]");
var poisCheckbox = document.querySelector("input[name=poisCheck]");

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

*/