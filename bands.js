var moment = require("moment");
var axios = require("./axios.js");

var url = "https://rest.bandsintown.com/artists/"
var id = "/events?app_id=codingbootcamp"

function print(data) {
	if (data && data !== "" && data !== ", , ") {
		console.log(data);
		console.log("");
	}
}

function print_event(value) {
	var venue = value.venue;
	print(venue.name);
	var loc = venue.city + ", " + venue.region + ", " + venue.country;
	print(loc);
	var date = moment(value.datetime).format("MM/DD/YYYY");
	print(date);
	console.log("");
}

function print_events(response) {
	var data = response.data;
	if (data.length === 0) {
		console.log("NO UPCOMING EVENTS");
		return;
	}

	data.forEach(print_event);
}

module.exports = function(artist) {
	artist = artist.replace(/\s+/g, '');
	axios(url + artist + id, print_events);
}
