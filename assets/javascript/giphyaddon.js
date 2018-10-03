

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
  console.log("Button clicked callGiphy function recoginzied")

  var moodGifs = $(this).attr("data-giphytrigger");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    moodGifs + "&api_key=6mwldFoAeaR4pL1gvMFM0z6qKW0T6gX3&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
      var results = response.data;
      console.log(response)
      for (var i = 0; i < results.length; i++) {
        
          var thingDiv = $("<div>");
          var rating = results[i].rating;
          console.log(rating)
          console.log(results[i]);
          var thingImg = $("<img>");    
          thingImg.attr("src", results[i].images.fixed_height.url);
          thingDiv.append(thingImg);

          $("#food").prepend(thingDiv);
        }
        })
      }
    
    
  

