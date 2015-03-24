
function geojson_to_path( geojson ) {

  var points = [];
  
  var features;
  if (geojson.type === "FeatureCollection")
    features = geojson.features;
  else if (geojson.type === "Feature")
    features = [geojson];
  else
    features = [{type:"Feature", properties: {}, geometry: geojson}];
  features.forEach(function mapFeature(f) {
    switch (f.geometry.type) {
    // POIs
    // LineStrings
    case "LineString":
    case "MultiLineString":
	console.log("" + c[1] + "," + c[0]);
      var coords = f.geometry.coordinates;
      if (f.geometry.type == "LineString") coords = [coords];
      coords.forEach(function(coordinates) {
        coordinates.forEach(function(c) {
		  points.push("" + c[1] + "," + c[0]);
        });
      });
      break;
    default:
      console.log("warning: unsupported geometry type: "+f.geometry.type);
    }
  });
  gpx_str = points.join(':');
  return gpx_str;
};

module.exports = geojson_to_path;
