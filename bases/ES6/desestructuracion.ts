(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robet Downey JR",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  //Desestructuracion
  //   const { poder, vision } = avengers;

  //   console.log(poder, vision.toUpperCase());

  //Desestructuracion y el resto
  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };

  //printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ["Cap. America", true, 150];

  //QUIRO EL SEGUNDO
  //ignoro el primero
  //Nombro la const
  //ignoro el tercero
  const [capi, ironman] = avengersArr;

  // console.log(capi, ironman);

  
})();
