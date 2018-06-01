import test from 'ava';

const { fib } = require('../dist/fib-o');

test(`it shouldn't allow to calculate without the required parameter`, t => {
  const error = t.throws(() => fib(), Error);
  t.is(
    error.message,
    `Fibonacci function takes one parameter for the calculations.`
  );
});

test(`it shouldn't allow to calculate without a number as the parameter`, t => {
  const error = t.throws(() => fib('10'), Error);
  t.is(
    error.message,
    `Fibonacci function takes a natural number as the single parameter for the calculations.`
  );
});

test(`it shouldn't allow to calculate with a negative number as the parameter`, t => {
  const error = t.throws(() => fib(-10), Error);
  t.is(
    error.message,
    `The fibonacci calculations require a non-negative (natural) number. >= 0`
  );
});

test(`it shouldn't allow to calculate without a natural number as the parameter`, t => {
  const error = t.throws(() => fib(10.2), Error);
  t.is(error.message, `The fibonacci sequence requires natural numbers.`);
});

test('it should return 0 when the number is 0', t => {
  t.is(fib(0), 0);
});

test('it should return 1 when the number is 1', t => {
  t.is(fib(1), 1);
});

test('it should calculate the fibonacci of 50', t => {
  t.is(fib(50), 12586269025);
});
