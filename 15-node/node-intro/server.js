const http = require('http'); // Node standard library

// req: request object (input), res: response object (output)
http.createServer((req, res) => {
  // This callback runs every time a request hits the server.
  console.log(`Serving request: ${ req.method } ${ req.url }`); // Budget logs

  res.writeHeader(200, {'Content-Type': 'text/plain'});

  // This is terribly tedious
  if (req.url === '/') {
    res.end('Hello world from the home page');
  } else if (req.url === '/groucho') {
    res.end('Hello world from Groucho');
  } else {
    res.end('Hello from ' + req.url);
  }

}).listen(1337); // chaining

console.log('Server is running at http://localhost:1337');
