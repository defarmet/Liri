var bands = require("./commands/bands.js");
var spotify = require("./commands/spotify.js");
var omdb = require("./commands/omdb.js");
var fs = require("fs");

function append(err) {
	if (err) {
		console.log(err);
	}
}

function run_file(err, data) {
	if (err) {
		console.log(err);
		return;
	}

	run(data.split(','));
}

function get_parameter(input) {
	var parameter = "";
	for (var i = 1; i < input.length; i++) {
		parameter += input[i] + ' ';
	}
	return parameter;
}

function run(input) {
	fs.appendFile("log.txt", input + "\n", append);
	switch(input[0]) {
	case "concert-this":
		bands(get_parameter(input));
		break;

	case "spotify-this-song":
		spotify(get_parameter(input));
		break;

	case "movie-this":
		omdb(get_parameter(input));
		break;

	case "do-what-it-says":
		fs.readFile("random.txt", "utf8", run_file);
		break;

	default:
		console.log("USAGE: node liri <command> [name]");
		console.log("COMMANDS:");
		console.log("	concert-this <artist-name>");
		console.log("	spotify-this-song [song-name]");
		console.log("	movie-this [movie-name]");
		console.log("	do-what-it-says");
	}
}

run(process.argv.splice(2));
