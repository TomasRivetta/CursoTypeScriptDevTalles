"use strict";
const msg = "Hola mundo";
const hero = { name: "iron man", age: 45 };
console.log(hero);
hero.age = 20;
console.log(hero.age + 1);
(() => {
    const a = 10;
    console.log(a);
})();
let b;
b = 3.1416;
b = {};
b = [];
b = true;
b = "hola";
function sayHello(msg) {
    console.log(msg) + " " + "Toto";
}
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "---"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "---"}`;
        }
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "---"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = greet;
    console.log(myFunction("Toto"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada";
    };
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Super velocidad"],
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };
    superman.getName ? console.log(superman.getName()) : "Name not available";
})();
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.123;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbersWithString = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
    const villans = ['Omega', 'Duende Verde'];
    villans.forEach(v => console.log(v.toUpperCase()));
    numbers.forEach(v => console.log(v));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio");
    console.log('Hola mundo');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 20;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}, ${abc}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ["Dr strange", 100];
    hero[0] = 50;
    hero[1] = "Iron man";
    console.log(hero);
})();
(() => {
    function callBatman() { }
    const callSuperMan = () => { };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map