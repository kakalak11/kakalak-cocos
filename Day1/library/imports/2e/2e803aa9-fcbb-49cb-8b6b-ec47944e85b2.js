"use strict";
cc._RF.push(module, '2e803qp/LtJy4tr7EeUToWy', 'utils');
// Script/utils.js

'use strict';

console.log('Hello world');

function primeNumber(number) {
    var array = Array(number).fill(true);
    var primeArray = [];

    for (var i = 2; i < number; i++) {
        if (array[i] === true) {
            primeArray.push(i);
            for (var j = i * i; j < number; j += i) {
                array[j] = 0;
            }
        }
    }
    return primeArray;
}

cc._RF.pop();