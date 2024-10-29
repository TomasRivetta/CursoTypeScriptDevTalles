"use strict";
(() => {
    //                                dos tipos de datos en uno
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
