"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //   myFunction = 10;
    //   console.log(myFunction);
    //   let myFunction: (y: number, z: number) => number;
    //   myFunction = addNumbers;
    //   console.log(myFunction(1, 2));
    let myFunction;
    myFunction = greet;
    console.log(myFunction("Toto"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
