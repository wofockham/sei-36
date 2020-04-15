const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const PORT = 1337;

const server = express(); // more commonly called "app"
server.set('view-engine', ejs);

server.get('/', (req, res) => {
  const brothers = 'Groucho Harpo Chico Zeppo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', { brother: randomBrother }); // Like instance variables
});

server.get('/faq', (req, res) => {
  res.end('FAQ coming soon');
});

server.get('/hello/:firstName', (req, res) => {
  console.log( req.params );
  res.send(`Hello ${ req.params.firstName }`)
});

server.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }

  res.render('calculator.ejs', {result: answer});
});

server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// We can still use Axios for network request
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { trivia: response.data });
  });
});

server.listen(PORT, function () {
  console.log(`Now serving on http://localhost:${ PORT }`);
});
