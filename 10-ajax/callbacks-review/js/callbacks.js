// Callbacks Review /////////////////////////////////////////////////

// A callback function is a function provided to another function
// which calls your function for you, at some later point in time.

// Timers: A, C, B
console.log('A');
setTimeout(function () {
  console.log('B');
}, 4000);
console.log('C');

// jQuery's document ready: I, III, II
console.log('I: before the document ready');
$(document).ready(function () {
  console.log('II: the document is now ready');
});
console.log('III: after the document ready');

// Event handlers: Groucho, Chico AND THEN MAYBE HARPO
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

// colors.each do |c|
//   puts c
// end

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log( c );
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log( brother.toUpperCase() );
});

colors.forEach(function (anything) {
  console.log( anything );
});
