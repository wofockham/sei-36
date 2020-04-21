// setTimeout(function () {
//   console.log('time has passed')
// }, 4000);

// wrap setTimeout in a Promise
// YOUR CODE HERE:
const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// Make this code work:
wait(4000).then(function () {
  console.log('time has passed');
}).then(function () {
  console.log('also this function runs');
});
