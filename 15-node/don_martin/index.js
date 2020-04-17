const axios = require('axios');
const $ = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

axios.get( sourceURL ).then(( response ) => {
  const html = response.data;
  const $rows = $('table table tr:nth-child(n+2)', html);
});
