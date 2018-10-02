
 function locate(){
if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition()
   function success(position) {
     // possibly send this to firebase for use in the restaurant add-on
     console.log('latitude', position.coords.latitude, 
                 'longitude', position.coords.longitude);
   },
  function error(error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving location', error_message)
  }  
}
 else {
  console.log('geolocation is not enabled on this browser')
 }}



 function zomatoAPI(){
    console.log("Button clicked zomato function")
  
    var zomatoInfo = $(this).attr("location");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      ZomatoInfo + "&api_key=6mwldFoAeaR4pL1gvMFM0z6qKW0T6gX3&limit=10";
  
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function (response) {
        var results = response.data;
        console.log(response)
        for (var i = 0; i < results.length; i++) {
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  
            var thingDiv = $("<div>");
  
            var rating = results[i].rating;
  
            console.log(rating)
  
            var p = $("<p>").text("Rating: " + rating);
  
            console.log(results[i]);
  
            var thingImg = $("<img>");    
            thingImg.attr("src", results[i].images.fixed_height.url);
            thingDiv.append(p);
            thingDiv.append(thingImg);
  
            $("#gifs-appear-here").prepend(thingDiv);
          }  
        
      };
 }