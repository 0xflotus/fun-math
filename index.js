(function(): void {
  console.log(
    "02",
    [
      ...(function*(b: number = 1, e: number = 50): Iterable<number> {
        while (b <= e) yield b++;
      })()
    ]
      .filter((n: number): boolean => n % 3 === 0)
      .filter(
        (n: number): boolean =>
          ((
            x: number = n
              .toString()
              .split("")
              .map(Number)
              .reduce((a: number, b: number): number => a + b)
          ) => x > 4 && x < 8)()
      )
      .filter((n: number): boolean => n % 2 !== 0)
      .filter(
        (n: number): boolean =>
          ((
            x: number = n
              .toString()
              .split("")
              .map(Number)
              .reduce((a: number, b: number): number => a * b)
          ): boolean => x > 4 && x < 8)()
      )
      .reduce(String)
  );
})();
