const { fibonacci } = require("./");

test("executes fibonacci", () => {
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(3)).toBe(2);
});

test("is faster than equivalent JS", () => {
  const jsReturn = withTiming(() => slowFibonacci(10));
  const rsReturn = withTiming(() => fibonacci(10));

  console.log("JS Time:", jsReturn.elapsedMs);
  console.log("RS Time:", rsReturn.elapsedMs);
  expect(rsReturn.elapsedMs).toBeLessThan(jsReturn.elapsedMs);
});

function slowFibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

function withTiming(operation) {
  const start = process.hrtime();
  const result = operation();
  const after = process.hrtime(start);
  return {
    result,
    elapsedMs: (after[0] * 1000000000 + after[1]) / 1000000,
  };
}
