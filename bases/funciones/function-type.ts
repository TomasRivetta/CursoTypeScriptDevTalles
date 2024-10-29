(() => {
  const addNumbers = (a: number, b: number) => a + b;

  const greet = (name: string) => `Hola ${name}`;

  const saveTheWorld = () => `El mundo esta salvado`;

  //   myFunction = 10;
  //   console.log(myFunction);

  //   let myFunction: (y: number, z: number) => number;
  //   myFunction = addNumbers;
  //   console.log(myFunction(1, 2));

  let myFunction: (y: string) => string;
  myFunction = greet;
  console.log(myFunction("Toto"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
