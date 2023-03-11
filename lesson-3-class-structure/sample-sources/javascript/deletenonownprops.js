let obj = Object.create(Object.prototype, {p: {value: 42, configurable: false}});
delete obj.toString;
delete obj.p;
console.log(obj.toString() + obj.p);


