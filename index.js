(function() {
  console.log(
    "02",
    [
      ...(function*(b = 1, e = 50) {
        while (b <= e) {
          yield b++;
        }
      })()
    ]
      .filter(n => n % 3 === 0)
      .filter(n =>
        ((
          x = n
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b)
        ) => x > 4 && x < 8)()
      )
      .filter(n => n % 2 !== 0)
      .filter(n =>
        ((
          x = n
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a * b)
        ) => x > 4 && x < 8)()
      )
      .reduce(String)
  );
})();
