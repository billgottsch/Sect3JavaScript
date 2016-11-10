// 3.1 Palindrome                                               -----DONE-----


// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(string){
  return string === string.split('').reverse().join('');  //I DID IT BY MYSELF!!
}
// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )



// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// ---- 3.1 ----                                             ------DONE------
// write a function on the Array prototype
// called groupBy(callback) that takes a callback
// function. For each item in groupBy, callback's
// arguments will be (value, index, array).
//
// The value returned by the callback becomes the
// key for the original value in a new collection.
//
// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

Array.prototype.groupBy = function(callback) {
  var sortingNumbers = {even: [], odd: []};
  this.forEach(function(v, i, array){
    var bucket = callback(v, i, array)
    sortingNumbers[bucket].push(v)
  });
  return sortingNumbers
};

[1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, array) {
      return (v%2 === 0) ? 'even' : 'odd'
})


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------


// WHAT IS THIS ASSIGNMENT (seriously...)                 -----DONE-----


// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}
/**
 * THE PROBLEMS
 */

console.assert(whatIsThis('hello', 'world') === '[object Window],hello,world')
// The context of the function, which is Window, is what the assert is referring to.

console.assert(window.whatIsThis('hello', 'world') === '[object Window],hello,world')
// This is basically the same thing as the one above, only it's being implicit to Window.

console.assert(inAnObject.test1('face', 'book') === '[object Object],face,book')
//I have what I feel is the correct answer, but I'm still confused as to why it is the correct answer. the object Object thing is confusing because I get lost in all the identical names.

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === '[object Object],twitter,book')
// besides passing two parameters into the object, I don't know why it shows as object Object. Is it because it's an object inside the scope of another object?

console.assert(whatIsThis.call() === '[object Window],,')
// we have nothing in the function so it's empty. As with problem one, whatIsThis is in the global/window scope.

console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')
// We are giving the argument trickyTricky, but we did not specify arguments (a,b) for trickyTricky, so it runs nothing.

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')
// As stated right above, it's calling upon the current argument trickyTricky and giving it two arguments 'nice' and 'job'.

console.assert(whatIsThis.call(confusing) === '[object Object],,')
//Again, we're giving the call the current argument(confusing), but not giving confusing the a,b arguments, so it returns nothing.


console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')
// We're calling on the whatIsThis and giving it an argument of (confusing), but returning only the 'a' argument. So the second comma is to represent 'b'

console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')
// We're using apply on whatIsThis and using the argument trickyTricky, but apply requires the arguement's argument to be an array. We have not give one, so it will return nothing.

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')
//Passing in an array of two strings, nice and job, into the confusing argument of apply.




//console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// It doesn't work because 'nice' and 'job' are not in an array. It just tried to run a pile of stuff.




console.assert(inAFunction('what will', 'happen?') === FILL_ME_IN)
// Once you've figured out what the output is, answer here in a comment: Why is this so?


// try{
//     console.assert(inAFunction.test3('A', 'B') === FILL_ME_IN)
// } catch(e){
//     log(e)
// }
// Once you've figured out what the output/result is, answer here in a comment: Why is this so?


var newObject = new inAFunction('what will', 'happen?')
console.assert(newObject.name === 'Sally')
// We've created an instanceof a inAFunction and they all have a name of Sally.

var newObject2 = new inAFunction('what will', 'happen?')
console.assert(newObject2.test3('C', 'D') === '[object Object],C,D')
// We've created a new instance of a inAFunction and given it two parameters (C, D)

console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === '[object Object],face,book')
//We are calling on test1 and giving it an argument of trickyTricky. trickyTricky is then given two arguments, face and book.

console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === '[object Object],foo,bar')
// We're using the apply function on test2 and giving it the argument of confusing, confusing is given the array of ['foo', 'bar'].


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------



// 1. Create a simple constructor function called `Foo` and create a new instance from it called `foo`.
//                                                              -----DONE-----

function Foo(){
}

var foo = new Foo();


// assertions
console.assert(foo instanceof Foo)

//--------------------

// 2. Create a constructor function called `Dog` that sets a property on itself within the constructor. The property should be called `says` and the value should be `life is ruff`
//                                                              -----DONE-----

function Dog(){
  this.says = 'life is ruff'
}
// assertions
console.assert(new Dog().says === "life is ruff")

//-------------------

// 3. Create a constructor function called `Cat` that has a method on it's prototype called `growl` that returns the string `meow`; create an instance of this called `cat`
//                                                               -----DONE-----
function Cat(){
}

Cat.prototype.growl = function(){
  return "meow"
}
var cat = new Cat();

// assertions
console.assert(cat instanceof Cat)
console.assert(cat.growl() === "meow")

// 4. Create a constructor called `KeepSecret`. The constructor function itself should accept a parameter called `secret` it should store this in a private variable (use a closure). Add a method to the prototype that is called `squeal` that returns the secret string.
//                                                               -----DONE-----
function KeepSecret(secret) {
  this.secret = secret;
  };


KeepSecret.prototype.squeal = function() {
  return this.secret;
}
// assertions
var mySecret = "My class rocks!"
var dontTellNobody = new KeepSecret(mySecret)
console.assert(dontTellNobody.squeal() === mySecret)

// 5. Create a constructor called `Key`. Create another constructor called `Safe`. Make the Safe constructor take 2 arguments. The first argument can be any piece if data to keep safe. This must be stored using a private variable like you did with KeepSecret. The 2nd param to the `Safe` constructor needs to be an instance of `Key` you need to store it privately as well. Add a function to the Safe prototype called `unlock` that accepts a key. If the key matches the key that was used to create the Safe; then return the secret data.
//                                                              -----DONE-----
function Key(){
}

function Safe(keepme, keyInstance){
  this.keepme = keepme;
  this.keyInstance = keyInstance;
  };

Safe.prototype.unlock = function(key) {
  if(key === this.keyInstance) {
    return this.keepme;
  }
}
// assertions
var sensitive = "shhhhh!"
var rightKey  = new Key()
var wrongKey  = new Key()
var safe      = new Safe(sensitive, rightKey)

console.assert(safe.unlock(wrongKey) !== sensitive)
console.assert(safe.unlock(rightKey) === sensitive)

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////                  ___                                        ////
////                 / _ )___  ___  __ _____                     ////
////                / _  / _ \/ _ \/ // (_-<                     ////
////               /____/\___/_//_/\_,_/___/                     ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Bonus. -------------------------------------------------------- //

// Create a constructor called `Validator`. Give it a method on it's
// prototype called `email` that takes a string and returns true if
// the string is a valid email address and false if it is not.



// assertions

if (typeof Validator === "function") {
  var valid = new Validator()
  console.assert(valid.email("name@theironyard.com"))
  console.assert(!valid.email("name-at-theironyard.com"))
}
