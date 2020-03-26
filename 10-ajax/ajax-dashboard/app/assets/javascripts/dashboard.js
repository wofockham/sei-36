$(document).ready(function () {
  setInterval(function () {
    $.getJSON('/info').done(function (info) {
      $('#brother').text( info.brother );
      $('#time').text( info.time );
      $('#uptime').text( info.uptime );
    });
  }, 2000);

  // polling
  // setInterval(function () {
  //   $.get('/brother').done(function (name) {
  //     $('#brother').text(name);
  //   });
  // }, 4000);
  //
  // setInterval(function () {
  //   $.get('/time').done(function (output) {
  //     $('#time').text(output);
  //   });
  // }, 1000);
  //
  // setInterval(function () {
  //   $.get('/uptime').done(function (output) {
  //     $('#uptime').text(output);
  //   });
  // }, 3000);
});
