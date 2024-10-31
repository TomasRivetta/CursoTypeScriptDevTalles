(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbersWithString: (string | number)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];

  const villans = ['Omega','Duende Verde']

  villans.forEach(v => console.log(v.toUpperCase()))

  numbers.forEach(v => console.log(v))

})();
