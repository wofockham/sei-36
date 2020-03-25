const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change this to something else for different sizes (see docs)
  ].join('');
}

const showImages = function (results) {
  console.log( results.photos.photo );
  console.log( generateURL( results.photos.photo[0] )  );
};

const searchFlickr = function (words) {
  console.log('Searching Flickr for', words);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: words,
    format: 'json'
  }).done(showImages);
};

$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault(); // Don't go anywhere.

    const term = $('#query').val();
    searchFlickr( term );
  });
});
