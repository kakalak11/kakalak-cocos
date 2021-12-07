(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/utils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2e803qp/LtJy4tr7EeUToWy', 'utils', __filename);
// Script/utils.js

'use strict';

console.log('Utilities');

var utilities = {
    check: function check() {
        return console.log('utilities has run');
    },
    passWordCheck: function passWordCheck(password) {
        var passwordArray = password.split('');
        var countUpper = 0;
        var countLower = 0;

        if (!isUpperCase(passwordArray) || !isLowerCase(passwordArray)) {
            return false;
        }

        function isUpperCase(password) {
            password.forEach(function (element) {
                if (parseInt(element)) return;
                if (element === element.toUpperCase()) countUpper++;
            });
            if (countUpper) return true;
            return false;
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
        var spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (spChars.test(username)) {
            return false;
        }
        return true;
    },
    emailCheck: function emailCheck(string) {
        var emailFormat = string.slice(string.indexOf('@'));
        var emailFormatList = ['@gmail.com', '@yahoo.com'];
        return emailFormatList.includes(emailFormat);
    },
    checkStringLength: function checkStringLength(string, limit) {
        if (string.length < limit) return false;
        return true;
    },
    displayError: function displayError(labelNode, string) {
        labelNode.color = cc.Color.RED;
        labelNode.parent.active = true;
        var label = labelNode.getComponent('cc.Label');
        label.string = string;
        return;
    },
    displayCorrect: function displayCorrect(labelNode, string) {
        labelNode.color = cc.Color.GREEN;
        labelNode.parent.active = true;
        var label = labelNode.getComponent('cc.Label');
        label.string = string;
        return;
    },
    primeNumber: function primeNumber(number) {
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
    },
    factorial: function factorial(number) {
        if (number === 0 || number === 1) return 1;

        return number * this.factorial(number - 1);
    },
    generateRainbowText: function generateRainbowText(string) {
        var rainbowColor = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff', '#0080ff', '#0040ff', '	#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'];
        var result = '';
        var stringArray = string.split('');
        stringArray.forEach(function (element, index) {
            var color = rainbowColor[index % rainbowColor.length];
            var temp = '<color=' + color + '>' + element + '</c>';
            result += temp;
        });
        return result;
    }
};

module.exports = utilities;

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
        