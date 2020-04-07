var axios = require("axios");

function error(err) {
	console.log(err);
}

module.exports = function(url, fun) {
	axios.get(url).then(fun).catch(error);
};
