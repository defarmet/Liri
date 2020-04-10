var moment = require("moment");
var axios = require("./libs/axios.js");
var print = require("./libs/print.js");

var url = "https://rest.bandsintown.com/artists/"
var id = "/events?app_id=codingbootcamp"

function print_event(value) {
	var venue = value.venue;
	print("VENUE", venue.name, "");
	var loc = venue.city + ", " + venue.region + ", " + venue.country;
	print("LOCATION", loc, ", , ");
	var date = moment(value.datetime).format("MM/DD/YYYY");
	print("DATE", date, "");
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
	if (!artist) {
		console.log("USAGE: node ./liri.js concert-this <artist-name>");
	}
	artist = artist.replace(/\s+/g, '');
	axios(url + artist + id, print_events);
}
