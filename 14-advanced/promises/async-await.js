const axios = require('axios');

axios.get('http://numbersapi.com/69?json').then((response) => {
  console.log(response.data);
  console.log('Thank you and goodbye');
});

// async and await /////////////////////////////////////////////////////////////

// 1. await only works with Promises ("Thennables")
// 2. await only works inside a function AND that function must be marked as async

const getNumberFact = async function () {
  const response = await axios.get('http://numbersapi.com/70?json');
  console.log(response.data);
  console.log('Thank you and goodbye');
};

getNumberFact();
