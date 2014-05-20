var fs = require('fs'),
    mime = require('mime');

function route(pathname, response) {
    console.log("About to route a request for " + pathname);

    if (pathname === "/") {
      response.setHeader('Content-Type', 'text/html');
      fs.readFile('public/index.html', function (err, data) {
        serve(err, data, response)
      });
    } else {
      response.setHeader('Content-Type', mime.lookup('public' + pathname));
      fs.readFile('public' + pathname, function (err, data) {
        console.log('serving ' + err)
        serve(err, data, response)
      });
    }
}

function serve(err, data, response) {
  if (err) {
    serveError(response);
  } else {
    serveData(data, response);
  }
}

function serveData(data, response) {
  response.writeHead(200);
  response.write(data);
  response.end();
}

function serveError(response) {
  response.writeHead(404);
  response.write("Content not found");
  response.end();
}

exports.route = route;