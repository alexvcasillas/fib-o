var fib=function(r){var i={};return function r(n){if(0===n)return 0;if(1===n)return 1;if(i[n])return i[n];var f=r(n-1)+r(n-2);return i[n]=f}(r)};module.exports={fib:fib};
