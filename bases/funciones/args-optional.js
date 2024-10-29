"use strict";
(() => {
    //                                Para que sea opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "---"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
