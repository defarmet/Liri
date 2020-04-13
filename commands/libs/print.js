var fs = require("fs");

function append(err) {
	if (err) {
		console.log(err);
	}
}

module.exports = function(tag, data, nil) {
	if (data && data !== nil) {
		var colon = ": ";
		if (tag === "	") {
			colon = '';
		}
		fs.appendFile("log.txt", tag + colon + data + "\n", append);
		console.log(tag + colon + data);
	}
}
