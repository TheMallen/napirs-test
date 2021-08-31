const { fibonacci } = require("./swcify.node");

test("executes fibonacci", () => {
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(3)).toBe(2);
});

test("is faster than equivalent JS", () => {
  const jsReturn = withTiming(() => slowFibonacci(10));
  const rsReturn = withTiming(() => fibonacci(10));

  expect(rsReturn.elapsedMs).toBeLessThan(jsReturn.elapsedMs);
});

function slowFibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
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
