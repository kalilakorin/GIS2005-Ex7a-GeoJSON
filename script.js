// Below are data values you can use in the dictionary

// boulder sunshine fire
// lat, lon = 40.028, -105.291

// Story link - https://www.denverpost.com/2017/03/19/sunshine-fire-boulder-updates/
//

// wonderland fire
// lat, lon = 40.05, -105.314
// Story link - https://www.dailycamera.com/2017/04/19/fire-burning-west-of-boulder-holding-at-2-acres/
//

// old stage fire
// lat, lon = 40.069, -105.289

// Story link - https://www.denverpost.com/2009/01/14/arcing-wires-caused-olde-stage-fire/
//

function createGeoJson() {
    // A dictionary object is a way of storing information as key value pairs in JavaScript
    var dict1 = {name: "Sunshine Fire", lat: 40.028, lng: -105.291, link: "https://www.denverpost.com/2017/03/19/sunshine-fire-boulder-updates/"};
   
    // Add dict2 and dict3 based on the information at the top of this package
    // Specifically dic2 should represent the wonderland fire
    var dict2 = {name: "Wonderland Fire", lat: 40.05, lng: -105.314, link: "https://www.dailycamera.com/2017/04/19/fire-burning-west-of-boulder-holding-at-2-acres/"};
    
    // dict3 should represent the old stage fire
    var dict3 = {name: "Old Stage Fire", lat: 40.069, lng: -105.289, link: "https://www.denverpost.com/2009/01/14/arcing-wires-caused-olde-stage-fire/"};

    // Put into a list as geojson package from node expects
    var data = [dict1, dict2, dict3];
    console.log(data);

    // Use the GeoJSON.parse function to convert the data from an array or dictionaries to GeoJSON
    var myGeoJson = GeoJSON.parse(data, { Point: ['lat', 'lng'] });
  
    // Create a string representation of the GeoJSON
    var myGeoJsonStr = JSON.stringify(myGeoJson);

    // log myGeoJsonStr to the console
    console.log(myGeoJsonStr);
    
    // Write out the GeoJSON here by getting the myGeoJson div (hint: use getElementById on the document object)
    // set innerHTML = myGeoJsonStr
    document.getElementById("myJson").innerHTML = myGeoJsonStr;
  
  }