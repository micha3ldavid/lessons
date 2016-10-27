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

I inherited my early gray hair from my father. In that scenario, my father is the `base` object [or, the object that is passing on its properties] and I am the `derived` object [or, the object that is recieving/inheriting]. Characteristics, or `properties`, from him have been passed on to me, which is exactly what happens in the programming world.

The reason why it's called "Prototypical Inheritance" is because JavaScript uses something called a `prototype` to achieve this ability to inherit.

### Everything is an Object... Almost

Before we get our hands dirty I want to mention that in JavaScript, almost everything is an object. And all but one [primative] JavaScript objects have a prototype. This is really fantastic for us, because once we understand how an object works, we can apply it to virtually all other areas of the language. Here's a list of a few commonly used objects in JavaScript:

1. String
2. Date
3. Array
4. Number
5. Function

So let's take a look at the prototype of these objects to get a feel for what's going on.

*Try it (I do, you follow along)*: Open up a Codepen and go to the JavaScript console. You'll also want to open up Developer Tools, preferably in Chrome as the console output is the easiest to read. View the below code in the console with the students. Have the students follow along on their machines so they can poke around.

```javascript
  console.info('String.prototype', String.prototype);
  console.info('Date.prototype', Date.prototype);
  console.info('Array.prototype', Array.prototype);
```

## A Look into String.prototype

Now that we've looked at a few different JavaScript objects and seen they all have a `prototype`, which consists of a variety of different `properties`, let's shift our focus onto String and go a little deeper.

*Try it (I do, you follow along)*: Have students locate the toUpperCase method on the prototype. Once everybody has found it, walk through an example of using that method on a String instance:

```javascript
  var greeting = "hello, world";
  console.info(greeting.toUpperCase()); 
  // => "HELLO, WORLD"
```
What we can see here is that each time we create a new string, we have access to those properties we saw earlier on the prototype. Knowing that, let's take this a step further and ADD to the prototype.

## String.prototype.reverse

As we just saw, there is a LOT on the prototype of String. However, one thing it doesn't have is the ability to reverse itself. So let's go ahead and add that. Then we'll have another look at the String prototype.

*Try it (I do, you follow along)*: Hop back into Codepen and write the following, together.

*Lesson Notes: There are a number of ways to write a reverse() method. For the sake of keeping studends level of understanding at a maximum, use a more fundamental way of achieving the result, such as a basic for-loop, rather than advanced alternatives.*

```javascript
String.prototype.reverse = function () {
  
  var result = "";
	
	for (var i = this.length - 1; i >= 0; i--) {
		result += this.charAt(i);
	}
	return result;
};

console.info(String.prototype.reverse);
```
Magic! We can see here our `reverse` method has been added to the String prototype. This is exactly what we want. So now let's use it the same way we used `toUpperCase` a few minutes ago.

*Try it (I do, you follow along):*

```javascript
var greeting = "hello, world";
console.info(greeting.reverse());
// => "dlrow ,olleh"
```

*Questions*: The learning curve for prototype can be rather steep, now is a great time for questions in case anybody has fallen beind or is having a more difficult time understanding the material and what is taking place.

*Try it (You do)*: Now before we move on let's have a little individual fun with this. Each of you (students) create a property like we did with reverse, only this time let's call it `isEmpty`. I want the function to either return `false` if the string has characters, or return `true` if the string has no characters.

```javascript
String.prototype.isEmpty = function () {
  return this.length > 0;
};
```

Review one or two of the students solutions as a class.

## Inheriting from Array

Now String is a native JavaScript object, which means it is a built in part of the language. Because of that, it's not the best idea to go altering the prototypes of these native objects, as they will affect these objects accross the board and in some cases can actually cause harm. 

The good news is, there is an alternative. Instead off adding to the `prototype` we are going to inherit from it. Let's move away from String right now and have a look at Array. Array is an awesome object, which already comes with a ton of cool features on the prototype.

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

FIT in where? TBD

#### Properties, Methods, Members

## Why is Inheritance Important ?
