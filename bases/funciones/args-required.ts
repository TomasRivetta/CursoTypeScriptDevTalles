(() => {
  //                                dos tipos de datos en uno
  const fullName = (firstName: string, lastName: string | boolean): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
})();
