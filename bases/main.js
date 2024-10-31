"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robet Downey JR",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision, resto);
    };
    const avengersArr = ["Cap. America", true, 150];
    const [capi, ironman] = avengersArr;
})();
(() => {
    const ironMan = {
        name: "IronMan",
        weapon: "Armorsuit",
    };
    const capAmerica = {
        name: "capAmerica",
        weapon: "Shield",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironMan, capAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, " ", avenger.weapon);
    }
})();
(() => {
    const nombre = "Fernando";
    const getName = () => {
        console.log("viejo getName");
    };
})();
//# sourceMappingURL=main.js.map