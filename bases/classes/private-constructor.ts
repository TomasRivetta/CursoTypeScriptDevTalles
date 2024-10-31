(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy Apocalipsis");
      }

      return Apocalipsis.intance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  //   const apocalipsis = new Apocalipsis("Soy Apocalipsis..El unico");
  //   const apocalipsis2 = new Apocalipsis("Soy Apocalipsis 2..El unico");
  //   const apocalipsis3 = new Apocalipsis("Soy Apocalipsis 3..El unico");

  //   console.log(apocalipsis);
  //   console.log(apocalipsis2);
  //   console.log(apocalipsis3);
})();
