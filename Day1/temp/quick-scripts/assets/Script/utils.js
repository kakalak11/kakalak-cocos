(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/utils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2e803qp/LtJy4tr7EeUToWy', 'utils', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=utils.js.map
        