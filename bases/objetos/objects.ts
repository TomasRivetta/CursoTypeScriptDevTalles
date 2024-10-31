(() => {
  //Objeto literal
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    //Creamos esta propiedad con el signo de pregunta ya que va a ser opcional y va a retornar un string
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    //Creamos esta propiedad con el signo de pregunta ya que va a ser opcional y va a retornar un string
    getName?: () => string;
  } = {
    name: "Clark kent",
    age: 60,
    powers: ["Super velocidad"],
  };

  console.log(flash);
})();
