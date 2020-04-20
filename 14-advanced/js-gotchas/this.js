// this.js

const groucho = {
  fullname: 'Groucho Julius Marx',
  greeting() {
    return 'Good evening, my name is ' + this.fullname
  }
};

console.log( groucho.greeting() );
// Good evening, my name is Groucho Julius Marx

const name = groucho.fullname; // copying a string from the object
console.log( name );

// unbound greeting:
// the function has been taken from its original object
// and no longer has `this` defined.
const greeting = groucho.greeting; // copying a function from the object
console.log( greeting() );
// Good evening, my name is undefined

// .bind() /////////////////////////////////////////////////////////////////////
// Permanently define a `this` for the function.
const boundGreeting = groucho.greeting.bind( groucho );
console.log( boundGreeting() );
// Good evening, my name is Groucho Julius Marx

// .call()
// Call a function with a given this, just one time.
greeting.call( { fullname: 'Dame Edna' } )

const numbers = [99, 88, 77, 66];
// .apply()
Math.max.apply( Math, numbers ); // es5
Math.max( ...numbers ); // es6
