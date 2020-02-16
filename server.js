const http = require('http'),
	https = require('https'),
    server = http.createServer().listen(8124);

const baseUrl = 'dojo.nplusplus.ninja';

server.on('request', (req, res) => {
	
	var newheaders = req.headers;
	newheaders['host'] = 'dojo.nplusplus.ninja';
	
  var connector = https.request({
    host: baseUrl,
    path: req.url,
    method: req.method,
    headers: newheaders
  }, (resp) => {
	  console.log(' ---- SREVER RESPONSE');
	console.log(res);
    resp.pipe(res);
  });
	console.log(req.url);
	console.log(req.headers);
  req.pipe(connector);
});

