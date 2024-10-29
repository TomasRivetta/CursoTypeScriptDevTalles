(() => {
  const fullName = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullName("Clark", "Joseph", "kent");

  console.log({ superman });
})();
