let point = {
    x: 1,
    y: 2,
    toJSON: function() { return "hi"; }
};

console.log(JSON.stringify(point));


