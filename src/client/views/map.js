import { Template } from 'meteor/templating';

Template.map.onRendered(function bodyOnCreated() {
	mapboxgl.accessToken = 'pk.eyJ1IjoiYmdlaWxzIiwiYSI6ImNqOGQ2aWVzeDBrYTkycW44bnVqMXE4eXMifQ.mW_UzLO9RPsBRGAlsThGDA';
	
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9',
		center: [-95.36190, 29.76482], // starting position
	    zoom: 13 // starting zoom
	});

	map.addControl(new mapboxgl.FullscreenControl());

	map.on('click', function (e) {
	   let lng = Math.round(e.lngLat.lng * 1000) / 1000
	   let lat = Math.round(e.lngLat.lat * 1000) / 1000
	   console.log(lng + ", "+ lat);
	   let val = document.getElementById("overlay")
	   if(val.style.opacity == 0){
	   	document.getElementById("overlay").style.opacity = 1;	
	   }else{
	   	document.getElementById("overlay").style.opacity = 0;
	   }
	   

	});

	var geojson = {
	  type: 'FeatureCollection',
	  features: [{
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.358, 29.759]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'medic'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.362, 29.749]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'food'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.362, 29.749]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'food'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.366, 29.757]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'water'
	    }
	  },
	   {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.348, 29.77]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'water'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.369, 29.743]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'medic'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.38, 29.754]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'food'
	    }
	  },
	  {
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [-95.368, 29.763]
	    },
	    properties: {
	      title: 'Mapbox',
	      description: 'Washington, D.C.',
	      className: 'house'
	    }
	  }
	  ]
	};


	// add markers to map
	geojson.features.forEach(function(marker) {

	  // create a HTML element for each feature
	  var el = document.createElement('div');
	  console.log(marker.properties.className)
	  el.className = marker.properties.className;
	  // make a marker for each feature and add to the map
	  new mapboxgl.Marker(el)
	  .setLngLat(marker.geometry.coordinates)
	  .addTo(map);
	});

});




Template.map.helpers({

});