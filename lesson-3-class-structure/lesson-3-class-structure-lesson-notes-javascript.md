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

