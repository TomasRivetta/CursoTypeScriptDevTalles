"use strict";
(() => {
    //Objeto literal
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
    /*
     El error sugiere que TypeScript detecta la posibilidad de que la propiedad getName podría ser undefined. Para solucionarlo, puedes verificar si getName existe antes de intentar invocarlo. Puedes hacerlo de la siguiente manera:
     */
    superman.getName ? console.log(superman.getName()) : "Name not available";
    /*
    Esto verifica si getName existe en el objeto flash antes de intentar llamarlo y proporciona una respuesta de respaldo si la propiedad está ausente. Esto debería evitar el error y mostrar "Name not available" en caso de que getName no esté definido en el objeto flash.
     */
})();
