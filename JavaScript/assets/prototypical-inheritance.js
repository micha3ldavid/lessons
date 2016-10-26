
//
// Using Codepen.io and Chrome Web Developer
// ------------------------------------------------

//
// Live Visual 1
// All objects have prototypes
// Let's look at the native String and Array for examples

console.info('String.prototype:', String.prototype);
console.info('Array.prototype:', Array.prototype);

// Live Visual 2
// Looking at Object.create using String.prototype

 Object.create(existingObject [, newObjectDescriptors]);

 existingObject is the object you would like to copy
 newObjectDescriptors is an object of new members you would like to add in the form of descriptors

//
// Live Visual 2
// Create a List object

function List () {}

List.prototype = Object.create(Array.prototype, {
  
  get isEmpty() {
    return this.length < 1;
  }
  
});
