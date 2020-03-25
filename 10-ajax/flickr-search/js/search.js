const searchFlickr = function (words) {
  console.log('Searching Flickr for', words);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: words,
    format: 'json'
  }).done(function (results) {
    console.log( results );
  });
};

$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault(); // Don't go anywhere.

    const term = $('#query').val();
    searchFlickr( term );
  });
});
