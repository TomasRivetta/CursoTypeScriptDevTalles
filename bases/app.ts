const msg: string = "Hola mundo";

const hero = { name: "iron man", age: 45 };

console.log(hero);

hero.age = 20;

console.log(hero.age + 1);

// Tipos de datos basicos

//Funcion anonima autoinvocada
(() => {
  const a: number = 10;
  console.log(a);
})();

let b: string;
b = 3.1416;
b = {};
b = [];
b = true;
b = "hola";

function sayHello(msg: string) {
  console.log(msg) + " " + "Toto";
}
