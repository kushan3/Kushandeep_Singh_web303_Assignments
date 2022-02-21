/*
    Assignment #4
    Kushandeep Singh
*/

$(function () {

    // your code here
    navigator.geolocation.getCurrentPosition(success, () => {
         console.log("Please enable geolocation in order to see your coordinates");
    });

     function success(position) {

    console.log("Position object: ", position);
        console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
    let currentLatitude = position.coords.latitude
    let currentLongitude = position.coords.longitude

    localStorage.setItem("latitude" , currentLatitude)
    localStorage.setItem("longitude" , currentLongitude)

    const storedLatitude = localStorage.getItem("latitude");
    const storedLongitude = localStorage.getItem("longitude");

    if(storedLatitude && storedLongitude){
        distance = calcDistanceBetweenPoints(currentLatitude, currentLongitude, storedLatitude, storedLongitude)
        $('#locationhere').append("<h2>Your location is </h2>"+ "<br> Latitude: " + storedLatitude + "<br> Longitude : "+ storedLongitude + "<br> your Total distance " + distance);

    }
    else{
        $('#locationhere').append("<h2> Welcome to you first time</h2>" + "<br>Latitude : " + currentLatitude +"<br>longitude : " + currentLongitude   )    }
    }
    
    




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});