$(document).ready(function () {
  // Parallax //////////////////////////////////////////////////////////////////
  // Cache frequently used DOM nodes:
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop / 5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    // Destructure with renaming
    const { pageX:x, pageY:y } = e;

    const size = Math.random() * 10;

    // TODO: random colours
    const $bubble = $('<div class="bubble" />').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo($body);

    $bubble.animate({top: -200}, 3000, function () {
      $bubble.remove(); // clean up after ourselves
    });
  });
});
