const isInt = number => Number(number) === number && number % 1 === 0;

const fib = number => {
  if (typeof number === 'undefined')
    throw new Error(
      `Fibonacci function takes one parameter for the calculations.`
    );
  if (typeof number !== 'number')
    throw new Error(
      `Fibonacci function takes a natural number as the single parameter for the calculations.`
    );
  if (number < 0)
    throw new Error(
      `The fibonacci calculations require a non-negative (natural) number. >= 0`
    );
  if (!isInt(number))
    throw new Error(`The fibonacci sequence requires natural numbers.`);
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
