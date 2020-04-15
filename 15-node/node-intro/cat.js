// recreate the cat program but in JS (which means: callback city)
const fs = require('fs'); // fs: filesystem library provided by Node.js

// WRONG WAY: sync
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8'); // sync
// console.log( fileData );

// "RIGHT" WAY: async -- callbacks
// Many asychronous Node.js functions implement the Error First Pattern.
fs.readFile('flintstones.txt', 'utf-8', function (error, data) {
  if (error) {
    return console.error( error ); // bit wanky.
  }

  console.log( data );
});

// TODO: Try to rewrite this using Promises.
