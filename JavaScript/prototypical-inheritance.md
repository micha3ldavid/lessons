---
title: Prototypical Inheritance
tags: JavaScript, prototype, inheritance
length: 90
---

## Learning Goals

* define inheritance
* articulate the main purpose of inheritance
* create primitive objects
* define object members, properties, and methods
* create a List object, which inherits from Array
* use the 'new' keyword to create object instances
* use scope to reference object members
* create a custom Creature object
* create a Supernatural creature, which inherits our Creature
* use instanceof to compare objects

## Intro

Today we're going to look at one of my favorite subjects: Inheritance in JavaScript. We'll be looking at the existing JavaScript objects String and Array, and how they make use of what's called a "prototype." We'll be inheriting from the Array object to build our own custom implementation, and finally, we'll be creating prototypical objects from scratch.

## What is Prototypical Inheritance ?

While that word combination sounds technical and scary, prototypical inheritance is just a fancy way of saying "inheritance." And what is inheritance? Inheritance is a programming term to describe when one object is based on another.

Still kind of fuzzy, right? 

Let's look at inheritance in the real world first, then we'll apply it to JavaScript.

I inherited my early gray hair from my mother. In that scenario, my mother is the base object and I am the child object. Characteristics from her have been passed on to me, which is the same as what programming inheritance is.

The reason why it's called "Prototypical Inheritance" is because JavaScript uses something called a "prototype" to achieve this inheritance type of behavior.

### Everything is an Object... Almost

Before we get our hands dirty I want to mention that in JavaScript, almost everything is an object. And all but one (primative) have a prototype. This is really fantastic for us, because once we understand how one object works, we can apply it to virtually all other areas of the language. Here's a list of a few commonly used objects in JavaScript:

1. String
2. Date
3. Array
4. Number

*Try it*: Open up a Codepen and go to the JavaScript console. You'll also want to open up Developer Tools, preferably in Chrome. View the below code in the console with the students. Have the students follow along on their machines so they can poke around.

```javascript
  console.info('String.prototype', String.prototype);
```
*Try it*: Have students locate the toUpperCase method on the prototype. Once everybody has found it, walk through an example of using that method (and the prototype) on a String instance:

```javascript
  var greeting = "hello, world";
  console.info(greeting.toUpperCase());
```

## Let's Make a List

```javascript
  function List() {
  
  }
  
  List.prototype = Object.create(Array.prototype);
  
  List.prototype.isEmpty = function () {
    return this.length < 1;
  };
  
```

```javascript
  var colors = new List();
  console.info(colors.isEmpty());
```

```javascript
  var colors = new List();
  colors.push("red");
  console.info(myList.isEmpty());
```

