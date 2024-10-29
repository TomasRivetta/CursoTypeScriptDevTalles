(() => {
  const fullName = (
    //Para que sea obligatorio
    firstName: string,
    //Para que sea opcional
    lastName?: string,
    //Parametro por defecto
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "---"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "---"}`;
    }
  };

  const name = fullName("Tony", "Stark");

  console.log({ name });
})();
