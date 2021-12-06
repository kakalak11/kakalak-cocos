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

var utilities = {
    check: function check() {
        return console.log('utilities has run');
    },
    passWordCheck: function passWordCheck(password) {
        var passwordArray = password.split('');
        var countUpper = 0;
        var countLower = 0;

        if (!isUpperCase(passwordArray) || !isLowerCase(passwordArray)) {
            cc.log('password needs to have at least 1 capital letter and 1 normal letter');
            return false;
        }

        function isUpperCase(password) {
            password.forEach(function (element) {
                if (parseInt(element)) return;
                if (element === element.toUpperCase()) countUpper++;
            });
            if (countUpper) return true;else return false;
        }

        function isLowerCase(password) {
            password.forEach(function (element) {
                if (parseInt(element)) return;
                if (element === element.toLowerCase()) countLower++;
            });
            if (countLower) return true;else return false;
        }

        return true;
    },
    userNameCheck: function userNameCheck(username) {
        // let userNameArray = username.split('');
        // let countSpecialLetter = 0

        var spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (spChars.test(username)) {
            return false;
        }
        return true;
    }

    // function passWordCheck(password) {
    //     let passwordArray = password.split('');
    //     let countUpper = 0;
    //     let countLower = 0;

    //     if (passwordArray.length < 8) {
    //         cc.log('at least 8 characters');
    //         return false;
    //     }

    //     if (!isUpperCase(passwordArray) || !isLowerCase(passwordArray)) {
    //         cc.log('at least 1 capital letter and 1 normal letter');
    //         return false;
    //     }

    //     function isUpperCase(password) {
    //         password.forEach(element => {
    //             if (parseInt(element)) return;
    //             if (element === element.toUpperCase()) countUpper++;
    //         });
    //         if (countUpper) return true;
    //         else return false;
    //     }

    //     function isLowerCase(password) {
    //         password.forEach(element => {
    //             if (parseInt(element)) return;
    //             if (element === element.toLowerCase()) countLower++;
    //         });
    //         if (countLower) return true;
    //         else return false;
    //     }

    //     return true;
    // }

};module.exports = utilities;

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
        