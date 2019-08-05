/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {}

/*
  This function received an object and returns the value for the given key
*/
function get(object, key) {}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object) {}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {}

/*
  NB: This one's harder!!
  This function will receive two objects, and will return true if all the key-value pairs are the same, and false if not.
*/
function isEqual(object1, object2) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.invert = invert;
  Object.sum = sum;
  Object.isEqual = isEqual;
}

module.exports = setUpGlobalObject;