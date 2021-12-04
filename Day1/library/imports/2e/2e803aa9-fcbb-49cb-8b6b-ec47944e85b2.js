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

function getFormat(fileName) {
    var file = fileName.slice(fileName.indexOf('.'));
    return file;
}

function findDifference(array1, array2) {
    var result = [];
    array2.forEach(function (element, index) {
        array1.indexOf(element) === -1 ? result.push(element) : console.log(index);
    });
    return result;
}

function isLowerCase(passwordArray, countUpper) {

    passwordArray.forEach(function (element) {
        if (check(element)) countUpper++;
    });

    if (countUpper > 0) {
        cc.log(countUpper);
        return true;
    } else {
        cc.log(countUpper);
        return false;
    }

    function check(element) {
        if (Number.isInteger(parseInt(element))) return false;
        return element === element.toLowerCase();
    }
}

var password = 'Tu123456'.split('');

var uppercase = 'A';
var lowercase = 'a';

console.log(isLowerCase(password, 0));

cc._RF.pop();