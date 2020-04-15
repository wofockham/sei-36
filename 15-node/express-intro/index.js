const express = require('express');

const PORT = 1337;

const server = express(); // more commonly called "app"

server.get('/', (req, res) => {
  res.end('Goodbye cruel world from express');
});

server.get('/faq', (req, res) => {
  res.end('FAQ coming soon');
});

server.listen(PORT, function () {
  console.log(`Now serving on http://localhost:${ PORT }`);
});
