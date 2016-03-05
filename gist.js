'use strict';
var http = require('https');
var url = require('url');

module.exports = function(gist, cb) {
    var gistUrl = url.parse(gist).path.split('/').pop();
    var options = {
        host: 'api.github.com', port: 443,
        method: 'GET', path: '/gists/'+ gistUrl,
        headers: {'User-Agent': 'Mozilla/5.0 (compatible; Gist-require/1.0.0)'}
    }

    var req = http.request(options, function(res) {
        var data = '';
        if (res.statusCode > 200) {
            cb(new Error('HTTP status is '+ res.statusCode))
        }
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            var gist = JSON.parse(data)
            var file, files = [];
            for (file in gist.files) {
                files.push(gist.files[file])
            }
            cb(null, files)
        });
        res.on('error', function(err) {cb(err)})
    })
    req.end();
}
