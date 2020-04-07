require("dotenv").config();
var key = require("./keys.js").spotify;
var Spotify = require("node-spotify-api");
var spotify = new Spotify(key);

function print_name(value) {
	console.log(value.name);
}

function get_data(err, data) {
	if (err) {
		console.log(err);
		return;
	}

	var song = data.tracks.items[0];
	song.artists.forEach(print_name);
	console.log("");
	print_name(song);
	console.log("");
	print_name(song.album);
	if (song.preview_url) {
		console.log("");
		console.log(song.preview_url);
	}
}

module.exports = function(title) {
	if (!title) {
		title = "The Sign"
	}

	var track = {
		type: "track",
		query: title,
	}

	spotify.search(track, get_data);
}
