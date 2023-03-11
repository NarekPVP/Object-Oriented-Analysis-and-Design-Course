class Test {
    constructor() {
        this.elem  = 12;
    }

    static foo() {
        return this.elem;
    }

}

let t = new Test(14);
console.log(Test.foo());


