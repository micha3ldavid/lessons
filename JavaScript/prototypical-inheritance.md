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

Today we're going to look at one of my favorite subjects: Inheritance in JavaScript. We'll be looking at the existing JavaScript objects String and Array, and how they make use of what's called a `prototype`. We'll be inheriting from the Array object to build our own List object, and finally, we'll be creating objects from scratch.

## What is Prototypical Inheritance ?

While that word combination sounds technical and scary, prototypical inheritance is just a fancy way of saying "inheritance." And what is inheritance? Inheritance is a programming term to describe when one object is based on another.

Still kind of fuzzy, right? 

Let's look at inheritance in the real world first, then we'll apply it to JavaScript.

I inherited my early gray hair from my father. In that scenario, my father is a `base` object [or, the object that is passing on its properties] and I am a `derived` object [or, the object that is recieving/inheriting]. Characteristics, or `properties`, from him have been passed on to me, which is exactly what happens with inheritance in the programming world.

The reason why it's called "Prototypical Inheritance" is because JavaScript uses something called a `prototype` to achieve this ability to inherit.

### Everything is an Object... Almost

Before we get our hands dirty I want to mention that in JavaScript, almost everything is an object. And all but one [primative] JavaScript objects have a prototype. This is really fantastic for us, because once we understand how an object works, we can apply it to virtually all other areas of the language. Here's a list of a few commonly used objects in JavaScript:

1. String
2. Date
3. Array
4. Number
5. Function

So let's take a look at the prototype of these objects to get a feel for what's going on.

*Try it (I do, you follow along)*: Open up a Codepen and go to the JavaScript console. You'll also want to open up Developer Tools, preferably in Chrome. View the below code in the console with the students. Have the students follow along on their machines so they can poke around.

```javascript
  console.info('String.prototype', String.prototype);
  console.info('Date.prototype', Date.prototype);
  console.info('Array.prototype', Array.prototype);
```

## A Look into String.prototype

Now that we've looked at a few different JavaScript objects and seen they all have a prototype, which consists of a variety of different properties, let's shift our focus onto String and go a little deeper.

*Try it (I do, you follow along)*: Have students locate the toUpperCase method on the prototype. Once everybody has found it, walk through an example of using that method, first on the prototype, then on a String instance:

```javascript
  var greeting = "hello, world";
  console.info(greeting.toUpperCase()); 
  // => "HELLO, WORLD"
```

Now these two scenarios produces different results. The first, we are calling `toUpperCase` where it has actually been defined and the second, we created a new string and were able to call `toUpperCase` without referencing the word `prototype`. The reason for this is because the prototype is almost like the "DNA" of an object. In order to put it to good use, we first must create an living version of that object.

## Why is Inheritance Important ?

The main benefit of using inheritance is code reuse.  

Inheritance is important for a few reasons. First let's go back to our last example - we created the `string` "hello, world" and called its `toUpperCase()` method. Now imagine if we had 50 different strings. Because of the prototype, all 50 of our string have the same `toUpperCase()` method along with any other properties defined on the prototype.

 1. code reuse
 2. instances (many copies of the same object)

### String.prototype.reverse

1. add method to prototype
2. Demo
3. adding to native prototype, not so good. why?
4. segueway into inheriting from, rather than adding to, prototype 

### Let's Make a List

1. Object.create (inherit from Array)
2. Add simple method (isEmpty)
3. Demo - compare Array and List (use push, and isEmpty)

## The 'new' Keyword

### Scope

## Creature

### Vampire

### Zombie

### insanceof

## Recap

## Homework


