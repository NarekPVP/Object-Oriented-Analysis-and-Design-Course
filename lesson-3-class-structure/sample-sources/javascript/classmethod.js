class Test {
    "strange method"(x) { return x + 1; }
}

let t = new Test();
console.log(t["strange method"](12));


