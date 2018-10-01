

// (The function to split off between giphy or pot)

// $(".giphyOrPot").on("click", function){}

// if >21 button clicked {

// "callGiphy"
// [function name of function to call spotify]
// [function name of function to call food]
// }
//if 21+ button clicked {
//  [function name of function to call otreeba]
// [function name of function to call spotify]
// [function name of function to call food]


function callGiphy() {
  console.log("Button clicked")

  var moodGifs = $(this).attr("data-giphytrigger");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    moodgifs + "&api_key=6mwldFoAeaR4pL1gvMFM0z6qKW0T6gX3&limit=10";

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
