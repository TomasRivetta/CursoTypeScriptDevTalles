"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
