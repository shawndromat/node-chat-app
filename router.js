var fs = require('fs');

function route(pathname, response) {
    console.log("About to route a request for " + pathname);

    if (pathname === "/") {
      fs.readFile('public/index.html', function (err, data) {
        serve(err, data, response)
      });
    } else {
      fs.readFile(pathname,function (err, data) {
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
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(data);
  response.end();
}

function serveError(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Content not found");
  response.end();
}

exports.route = route;