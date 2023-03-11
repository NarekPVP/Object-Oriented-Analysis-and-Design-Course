let obj = {};
let res;
if (obj.prop) {
    if (obj.prop.nested) {
        res = obj.prop.nested;
    }
}

let res = obj?.prop?.nested;

console.log(res);


