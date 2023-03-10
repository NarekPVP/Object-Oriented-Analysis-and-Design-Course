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

