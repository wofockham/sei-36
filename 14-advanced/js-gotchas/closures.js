// Bad: id can be overwritten by someone else's code:
// let id = 0;
// const nextID = function () {
//   return id++; // Post increment
// };

// Higher Order Function
// const helloMaker = function () {
//   const greeting = 'Hello'; // greeting will still exist via a closure.
//   return function () {
//     console.log(greeting);
//   }
// };

// const hello = helloMaker();

const nextIDMaker = function () {
  // set up an ID variable:
  let id = 0;
  return function () {
    return id++;
  };
};

const nextID = nextIDMaker(); // Returns a function

// nextID(); // 0
// nextID(); // 1
// nextID(); // 2
// nextID(); // 3
// nextID(); // 4

// HTML tags
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>'
// }

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  }
};

const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');
console.log( h2('hello world') );
