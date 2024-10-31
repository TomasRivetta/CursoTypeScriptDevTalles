(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironMan: Avenger = {
    name: "IronMan",
    weapon: "Armorsuit",
  };

  const capAmerica: Avenger = {
    name: "capAmerica",
    weapon: "Shield",
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironMan, capAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, " ", avenger.weapon);
  }
})();
