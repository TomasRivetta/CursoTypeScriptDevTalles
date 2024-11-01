(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Toto",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 126,
      zip: "5152A",
      city: "VCP",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

})();
