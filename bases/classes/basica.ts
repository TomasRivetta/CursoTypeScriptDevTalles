(() => {
  class Avenger {
    //Solo tengo acceso en getter y setter
    //Vista afuera de la clase

    //Como es static no la vamos a mandar por argunento
    static avgAge: number = 35;

    //Metodo static
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    //Metodos publico
    bio() {
      return `${this.name} (${this.team})`;
    }

    //Metodo privado
    // private bio() {
    //   return `${this.name} (${this.team})`;
    // }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");

  // console.log(antman);

  // console.log(antman.bio());

  // console.log(Avenger.getAvgAge());
})();
