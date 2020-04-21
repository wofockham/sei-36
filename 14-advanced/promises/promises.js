// Javascript is asynchronous:
// 1. Callbacks
// 2. Promises -- .then()
// 3. (async/await)

const fs = require('fs');

// readFile is async
// fs.readFile('simpsons.txt', 'utf-8', function (err, content) {
//   if (err) {
//     throw err; // dramatic exit
//   }
//
//   console.log( content );
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject( err );
        return;
      }

      resolve( content );
    });
  });
};

const fileReaderPromise = readFile('simpsons.txt');

// fileReaderPromise contains an object:
// {
//  then: function (resolve) {},
//  catch: function (reject) {}
// }

fileReaderPromise.then((content) => {
  console.log(content);
});

fileReaderPromise.catch((err) => {
  console.error('SOMETHING BAD HAPPEN', err);
});

fileReaderPromise.then(() => {
  console.log('Thank you for using this program');
});
