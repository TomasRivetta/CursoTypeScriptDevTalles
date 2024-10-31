(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
    //   console.log("Constructor Avenger llamado");
    }

    private getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
    //   console.log("Constructor Xmen llamado");
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
      return;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  wolverine.fullName = "Toto";
//   console.log(wolverine.fullName);
})();
