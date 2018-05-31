"use strict";var fib=function(r){var n={};return function r(t){if(0===t)return 0;if(1===t)return 1;if(n[t])return n[t];var i=r(t-1)+r(t-2);return n[t]=i}(r)};module.exports={fib:fib};
