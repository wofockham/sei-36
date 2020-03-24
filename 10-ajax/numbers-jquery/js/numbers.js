const fetchFact = function () {
  // new version (uses Deferreds):
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
    $('h1').after(`<p>${ result.text }</p>`);
  }).fail(function () {
    alert('We are sorry, something went wrong');
  });

  // old version:
  // $.ajax('http://numbersapi.com/random/trivia?json', {
  //   success: function (result) {
  //     $('h1').after(`<p>${ result.text }</p>`);
  //   }
  // });
};

$(document).ready(function () {
    $('#fetch').on('click', fetchFact);
    fetchFact();
});
