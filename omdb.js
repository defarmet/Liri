var axios = require("./axios.js");

var url = "https://omdbapi.com/?apikey=trilogy&type=movie&plot=short&t=";

function print(data) {
	if (data && data !== "N/A") {
		if (data.Value) {
			data = data.Value;
		}

		console.log(data);
	}
}

function print_movie(response) {
	data = response.data
	print(data.Title);
	print(data.Year);
	if (data.Ratings) {
		print(data.Ratings[0]);
		print(data.Ratings[1]);
	}
	print(data.Country);
	console.log("");
	print(data.Plot);
	console.log("");
	print(data.Actors);
}

module.exports = function(title) {
	if (!title) {
		title = "Mr. Nobody";
	}

	axios(url + title, print_movie);
}
