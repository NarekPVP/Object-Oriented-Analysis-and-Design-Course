# Lesson 3. Class Structure

 - An object is an unordered collection of properties, each of which has a name and a value. Graduates should know that property names are usually strings, although they can also be Symbols. Objects, basically, map strings or Symbols to values. In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its “prototype.”
 - Know that JavaScript objects are dynamic - properties can usually be added and deleted.
 - Any value in JavaScript that is not a string, a number, a Symbol, or true, false, null, or undefined is an object. Objects are mutable and manipulated by reference rather than by value. 
 - A property name may be any string, including the empty string (or any Symbol). Each property has three property attributes:
 - The `writable` attribute specifies whether the value of the property can be set. 
 - The `enumerable` attribute specifies whether the property is enumerated by the `for/in` loop and the `Object.keys()` method.
 - The `configurable` attribute specifies whether the property can be deleted and whether its attributes can be altered. 
 - Object properties can be divided into data properties and accessor properties. The four attributes of a data property are value, writable, enumerable, and configurable. Accessor properties don’t have a value attribute or a writable attribute: their writability is determined by the presence or absence of a setter. So the four attributes of an accessor property are get, set, enumerable, and configurable.

Know how to use the `Object.getOwnPropertyDescriptor()` function.

```
// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({x: 1}, "x");
```

```
Object.getOwnPropertyDescriptor({}, "x"); // undefined; no such property
```

Know about Object.defineProperty() function. Takes three arguments: the object to be modified, the name of the property to be created or altered, and the property descriptor object.

```
let obj = {};
Object.defineProperty(obj, "test", {
 value: 42,
 writable: true,
 enumerable: false,
 configurable: true
});

obj.test; // 42
Object.keys(obj); // []
```

```
Object.defineProperty(obj, "test", { writable: false });

obj.test = 2; // fails silently or throws TypeError in strict mode
```

When we change the property from a data property to an accessor property, it loses the value attribute.

```
Object.defineProperty(obj, "test", { get: function() { return 0; } });
obj.test; // 0
```

We can define multiple properties using the Object.defineProperties() function.
An example from the Flanagan's book:

```
let p = Object.defineProperties({}, {
 x: { value: 1, writable: true, enumerable: true, configurable: true }
});
```

## Creating objects

Object literal

```
let sample = {};
let another = { a: 11, b: 22 };
```

The `new` operator creates and initializes a new object. The keyword must be followed by a function invocation. A function used in this way is called a constructor and initializes the newly created object. 

`Object.create()` creates a new object, using its first argument as the prototype of that object.

```
let obj = Object.create({a: 11, b: 22});
// obj inherits properties a and b
```

The syntax
```
Object.create(proto)
Object.create(proto, propertiesObject)
```

Returns a new object with the specified prototype object and properties.

## Accessing properties

Use the dot notation or bracket notation.
```
let obj = {};
obj.hello = "world";
obj['hello']; // world
```

Accessing non existing properties
```
let obj = {};
obj.prop; // undefined
obj.prop.nested; // TypeError: undefined doesn't have 'nested'
```

The `delete` operator removes a property from an object.
```
delete book.author;
```

```
let obj = { a: 11 };
"a" in obj; // true
"b" in obj; // false
obj.hasOwnProperty("x"); // true
obj.propertIsEnumerable("x"); // true
```

## Enumeration order

Object.keys(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Reflect.ownKeys(). and related methods such as JSON.stringify() all list properties in the following order.
1. String properties whose names are non-negative integers are listed first, in numeric order from smallest to largest. This rule means that arrays and array-like objects will have their properties enumerated in order.
2. After all properties that look like array indexes are listed, all remaining properties with string names are listed (including negative and floating-point numbers). These properties are listed in the order in which they were added to the object. For properties defined in a object literal, this order is the same order they appear in the literal.
3. Finally, the properties whose names are Symbol objects are listed in the order in which they were added to the object.

## Methods

- Know methods inherited from Object.prototype: hasOwnProperty(), propertyIsEnumerable(), toString(), toLocaleString(), valueOf(), toJSON(). The Object.prototype does not actually define a toJSON() method, but the JSON.stringify() looks for a toJSON() method on any object it is asked to serialize. 

To define a method for an object
```
let square = {
 area: function() { return this.side * this.side; },
 side: 10
};

// also using a shortcut
let square = {
 area() { return this.side * this.side; },
 side: 10
};
```

Also, note that when you write a method using the shorthand syntax, the property name can take any of the forms that are legal in an object literal: you can also use string literals and computed property names, which can include Symbol property names.

```
let weird = {
 "method with spaces"(x) { return 1; }
 [str](x) { return x; }
};

weird["method with spaces"](1);
```

## Classes

There are two ways to define classes in JS. Constructor invocations using new automatically create the new object, so the constructor itself only needs to initialize the state of that new object. The critical feature of constructor invocations is that the prototype property of the constructor is used as the prototype of the new object. While almost all objects have a prototype, only a few objects have a prototype property. It is function objects that have a prototype property. This means that all objects created with the same constructor function inherit from the same object and are therefore members of the same class. 

```
function Range(from, to) {
 this.from = from;
 this.to = to;
}

Range.prototype = {
 includes: function(x) { return this.from <= x && x <= this.to; },
};

let r = new Range(1, 3);
r.includes(2);
```

Using new.target and emulating the feature
```
function C() {
 if (!new.target) return new C();
}
```

Know the difference between factory functions and constructor functions. Basically, constructor functions are those invoked with the new keyword. The new object is automatically created and is accessible as the this value. Constructor invocation automatically creates a new object, invokes the constructor as a method of that object, and returns the new object. 

Know about the new.target expression. If the value of that expression is defined, then you know that the function was invoked as a constructor, with the new keyword. If new.target is undefined, then the containing function was invoked as a function, without the new keyword. 

Know to use the instanceof operator: returns true if the left hand side object is of an instance of the right hand side class.

To test the prototype chain of an object for a specific prototype and do not want to use the constructor function as an intermediary, you can use the isPrototypeOf() method, parent.isPrototypeOf(obj)


### Constructors and prototypes

Every regular JavaScript function automatically has a prototype property. The value of this property is an object that has a single, non-enumerable constructor property. The value of the constructor property is the function object:

```
let F = function() {}
let p = F.prototype;
let c = p.constructor;

console.log(c === F);
```

This means that objects typically inherit a constructor property that refers to their constructor. Since constructors serve as the public identity of a class, this constructor property gives the class of an object.

```
let o = new F();
o.constructor === F; // true
```

A need to explicitly set the constructor:
```
Range.prototype = {
 constructor: Range
}
```

Know the ES6 syntax to create classes, constructor, and methods. Note that omitting the constructor will make the engine implicitly create an empty one.
Know the important things for the class syntax: all code within the body of a class declaration is implicitly in strict mode, even if no “use strict” directive appears. This means, for example, that you can’t use octal integer literals or the with statement within class bodies and that you are more likely to get syntax errors if you forget to declare a variable before using it. Class declarations are not hoisted: you cannot instantiate a class before you declare it.

Static methods are defined as properties of the constructor function rather than properties of the prototype object.
Remember that all of the shorthand method definition syntaxes allowed in object literals are also allowed in class bodies.
Consider using the field declarations inside the class body. Also, note that the static keyword can be used with fields to make them class variables.

```
class Test {
 static #x = 12;
 nonstatic = "hello"
 #privVar = 14;
 
 foo() {
  // accessing 
  this.#privVar = 1;
  this.nonstatic = 14;
 }
 
 static foo() {
  Test.#x = 2;
 }
}
```





