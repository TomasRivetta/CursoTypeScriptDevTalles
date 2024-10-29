"use strict";
(() => {
    const fullName = (
    //Para que sea obligatorio
    firstName, 
    //Para que sea opcional
    lastName, 
    //Parametro por defecto
    upper = false) => {
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
