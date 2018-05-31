const fib = number => {
  const cache = {};

  function f(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (cache[number]) return cache[number];
    const result = f(number - 1) + f(number - 2);
    cache[number] = result;
    return result;
  }

  return f(number);
};

module.exports = { fib };
