console.log( _.VERSION );

// .each()
// es5 or greater: .forEach
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
_( nums ).each( function (n) { console.log(n) } );

// Alternative syntax:
// _.each(nums, function (n) { console.log(n) });

_( nums ).each(function (number, index, entireArray) {
  console.log( 'number:', number );
  console.log( 'index:', index );
  console.log( 'entireArray', entireArray );
});

// Also works with objects
const obj = {
  4: 'four',
  5: 'five',
  'six': 6
};

_( obj ).each(function (value, key, entireObject) {
  console.count('iteration');
  console.log('value', value);
  console.log('key', key);
  console.log('entireObject', entireObject);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'guitar',
  vice: 'cigars'
};

_( groucho ).each(function (v, k) {
  console.log(`${ k.toUpperCase() } is ${ v }`);
});

// .map() //////////////////////////////////////////////////////////////////////
console.log( nums );

const byFive = function (n) {
  return n * 5
};

const multiplesOfFive = _( nums ).map( byFive );

// Also for objects
const grouchoFacts = _( groucho ).map(function (v, k) {
  return `${ k } is ${ v }`;
});
console.log( grouchoFacts );

// .reduce() ///////////////////////////////////////////////////////////////////
const sum = function (runningTotal, n) {
  console.log( 'runningTotal', runningTotal, 'n', n);
  return runningTotal + n;
};

const total = _( nums ).reduce( sum );
console.log('The total is', total);

// .find() /////////////////////////////////////////////////////////////////////
const multipleOfFive = function (n) {
  console.log('considering', n, n % 5 === 0);
  return n % 5 === 0;
};

const firstMultipleOfFive = _( nums ).find( multipleOfFive );
// .find() also works for objects and if you .find() a use for that, I will buy you a beer.

// .select() ///////////////////////////////////////////////////////////////////
const allFives = _( nums ).select( multipleOfFive );
console.log( allFives );

// .reject() ///////////////////////////////////////////////////////////////////
const notFives = _( nums ).reject( multipleOfFive );
console.log( notFives );

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 45},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 45},
  {name: 'Chico', instrument: 'piano', vice: 'infidelity', age: 45},
];

console.log( _( bros ).pluck( 'name' ) );

// .max() / .min() /////////////////////////////////////////////////////////////
console.log( _(nums).max() );

// .sortBy()
_(bros).sortBy('name'); // non-destructive.
