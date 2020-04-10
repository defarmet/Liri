require("dotenv").config();
var print = require("./libs/print.js");
var key = require("./data/keys.js").spotify;
var Spotify = require("node-spotify-api");
var spotify = new Spotify(key);

function print_name(value) {
	print("	", value.name, null);
}

function get_data(err, data) {
	if (err) {
		console.log(err);
		return;
	}

	data.tracks.items.forEach(print_song);
}

function print_song(song, index) {
	console.log("SONG " + (index + 1) + ':');
	if (song.artists) {
		console.log("ARTISTS:");
		song.artists.forEach(print_name);
	}
	print("TITLE", song.name, null);
	print("ALBUM", song.album.name, null);
	print("PREVIEW", song.preview_url, null);
	console.log("");
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
