function zomatoAPI() {
  console.log("Button clicked zomato function recognized")
  var coordinates;
  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {

      console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
      localStorage.setItem("coordinates", "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude);
      
      coordinates = localStorage.getItem("coordinates");
      console.log("coordinates=" + coordinates);
    }




    function error(error_message) {
      // for when getting location results in an error
      console.error('An error has occured while retrieving location', error_message)
    };
  } else {
    console.log('geolocation is not enabled on this browser')
    // if no geolocation is allowed, set "coordinates" = ipaddress location lookup value
  }




  var queryURL = "https://api.zomato.com/v1/search.json?" + coordinates + "&X-Zomato-API-Key=6mwldFoAeaR4pL1gvMFM0z6qKW0T6gX3&limit=5";

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
    })


};


$(".emoji").on("click", function () {
  zomatoAPI()
})