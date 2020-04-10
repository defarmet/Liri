module.exports = function(tag, data, nil) {
	if (data && data !== nil) {
		var colon = ": ";
		if (tag === "	") {
			colon = '';
		}
		console.log(tag + colon + data);
	}
}
