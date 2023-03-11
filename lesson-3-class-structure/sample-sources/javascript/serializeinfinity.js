let obj = {
    p1: 27,
    p2: 'text',
    p3: NaN,
    p4: Infinity
};

let des = JSON.parse(JSON.stringify(obj));
console.log(des.p3);



