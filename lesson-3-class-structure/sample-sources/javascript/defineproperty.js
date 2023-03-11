let obj = {};

Object.defineProperty(obj, "test", {
    value: 42,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(obj, "test", { get: function() { return 0; } });

console.log(Object.getOwnPropertyDescriptor(obj, "test"));


