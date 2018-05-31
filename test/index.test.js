import test from 'ava';

const { fib } = require('../dist/fib-o');

test('it should calculate the fibonacci of 50', t => {
  t.is(fib(50), 12586269025);
});
