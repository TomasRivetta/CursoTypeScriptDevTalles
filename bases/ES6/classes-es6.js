(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No hay nombre", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    //Los parametros para el constructor super
    constructor(name, power) {
      //Llamo al constructor del padre (Avenger)
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("hULK", 9001);

  const falcon = new FlyingAvenger("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
