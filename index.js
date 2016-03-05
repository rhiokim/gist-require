var Promise = require('bluebird');
var gist = require('./gist');

module.exports = function(url) {

	return new Promise(function(resolve, reject) {
		gist(url, function(err, res) {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
}