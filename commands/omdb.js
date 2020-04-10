var axios = require("./libs/axios.js");
var print = require("./libs/print.js");

var url = "https://omdbapi.com/?apikey=trilogy&type=movie&plot=short&t=";

function print_rating(rating) {
	switch (rating.Source) {
	case "Internet Movie Database":
		print("	IMDB", rating.Value, "N/A");
		break;

	case "Rotten Tomatoes":
		print("	ROTTEN TOMATOES", rating.Value, "N/A");
	}
}

function print_movie(response) {
	data = response.data
	print("TITLE", data.Title, "N/A");
	print("RELEASE YEAR", data.Year, "N/A");
	if (data.Ratings) {
		console.log("RATINGS:");
		data.Ratings.forEach(print_rating);
	}
	print("PRODUCED IN", data.Country, "N/A");
	print("PLOT", data.Plot, "N/A");
	print("STARRING", data.Actors, "N/A");
}

module.exports = function(title) {
	if (!title) {
		title = "Mr. Nobody";
	}

	axios(url + title, print_movie);
}
