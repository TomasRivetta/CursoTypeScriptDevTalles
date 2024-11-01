//import { Hero } from "./classes/Hero";
//import { Hero as SuperHero, Hero2 } from "./classes/Hero";
//import * as HeroClasses from "./classes/Hero";
//import powers, { Power } from "./data/powers";

// console.log("Hola Mundo!!!!!");

// const ironMan = new Hero("Toto", 1, 35);
//const ironMan = new SuperHero("Toto", 1500, 35);
//const ironMan = new HeroClasses.Hero("Toto", 1500, 35);

// console.log(ironMan);
// console.log(ironMan.power);

import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Hero, Villain } from "../interfaces";
// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2 });
// printObject([1, 2, 3, 4, 5, 5, 6, 7]);
// printObject("Hola mundo");
// const name: string = "Toto";
// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow(new Date()).getDate());
// console.log(genericFunctionArrow(name).toUpperCase());

const deadpool = {
  name: "DeadPool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
