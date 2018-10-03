$(document).ready(function () {
  console.log("mapaddon.js has loaded");
  Zomato.init("050d7c78c8ecb450b7884fc01f6b4e87")
});

function zomatoAPI() {
  console.log("Button clicked zomato function recognized")
  var coordinates;
  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {

      console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
      console.log("position coordinates", position.coords);

      zomatoAjax(position.coords);
    }




    function error(error_message) {
      // for when getting location results in an error
      console.error('An error has occured while retrieving location', error_message);
      getIPgeolocation()
    };
  } else {
    console.log('geolocation is not enabled on this browser');
    // if no geolocation is allowed, set "coordinates" = ipaddress location lookup value
    getIPgeolocation();

  }


  function zomatoAjax(coordinates) {

    console.log(coordinates.latitude);


    var queryURL = "https://developers.zomato.com/api/v2.1/geocode?lat=" + coordinates.latitude + "&lon=" + coordinates.longitude;
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
          "user-key": "050d7c78c8ecb450b7884fc01f6b4e87"
        }
      })
      .then(function (response) {
        var results = response.data;
        console.log(response)
      })
    for (var i = 0; i < results.length; i++) {
        var restaurantDiv = $("<div>");

    //     var rating = results[i].rating;

    //     console.log(rating)

    //     var p = $("<p>").text("Rating: " + rating);

    //     console.log(results[i]);

    //     var thingImg = $("<img>");
    //     thingImg.attr("src", results[i].images.fixed_height.url);
    //     thingDiv.append(p);
    //     thingDiv.append(thingImg);

    //     $("#gifs-appear-here").prepend(thingDiv);
    //   }
  }

  function getIPgeolocation() {
    console.log("getIPgeolocation function triggered");
    queryURL = "http://api.ipstack.com/check?access_key=7ee44dd1caa2533906f7ed1bc758b9d2"
  
    $.ajax({
        url: queryURL,
        method: "GET",
  
      })
      .then(function (response) {
        var results = response.data;
        console.log(response);
  
        zomatoAjax(response);
      })
  }
}



// };
// }


$("#happy").on("click", function () {
  console.log("emoji is being clicked");
  zomatoAPI();
})