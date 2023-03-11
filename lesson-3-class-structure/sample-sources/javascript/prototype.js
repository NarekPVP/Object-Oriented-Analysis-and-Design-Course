function Range() {}

function Strange() {}

console.log(new Strange() instanceof Range);

Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range);


