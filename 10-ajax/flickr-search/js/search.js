$(document).ready(function () {
  $('form#search').on('submit', function (event) {
    event.preventDefault(); // Don't go anywhere.

    const term = $('#query').val();
    // search Flickr for that term
    // .done(): display the results
  });
});
