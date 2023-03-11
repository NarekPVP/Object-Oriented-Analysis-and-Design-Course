class Test {
    static #priv = 12;
    #size = 12;
    
    static foo() {
        Test.#priv = 14;
        return Test.#priv;
    }
}

let t = new Test();
console.log(Test.foo());


