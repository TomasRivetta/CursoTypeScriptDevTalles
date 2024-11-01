(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  //Objeto literal
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: ["Super velocidad"],
    getName() {
      return this.name;
    },
  };
})();
