console.log('Utilities');

var utilities = {
    check: () => console.log('utilities has run'),
    passWordCheck: function (password) {
        let passwordArray = password.split('');
        let countUpper = 0;
        let countLower = 0;

        if (!isUpperCase(passwordArray) || !isLowerCase(passwordArray)) {
            return false;
        }

        function isUpperCase(password) {
            password.forEach(element => {
                if (parseInt(element)) return;
                if (element === element.toUpperCase()) countUpper++;
            });
            if (countUpper) return true;
            return false;
        }

        function isLowerCase(password) {
            password.forEach(element => {
                if (parseInt(element)) return;
                if (element === element.toLowerCase()) countLower++;
            });
            if (countLower) return true;
            else return false;
        }
        return true;
    },
    userNameCheck: function (username) {
        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (spChars.test(username)) {
            return false;
        }
        return true;
    },
    checkUserNameAvailable: function (username, userNameList) {
        let available = true;
        userNameList.forEach(function (element) {
            let usernameCheck = element.split(':')[0];
            if (usernameCheck === username) available = false;
        });
        if (available) return true;
        return false;
    },
    emailCheck: function (string) {
        let emailFormat = string.slice(string.indexOf('@'));
        let emailFormatList = ['@gmail.com', '@yahoo.com'];
        return emailFormatList.includes(emailFormat);
    },
    checkStringLength: function (string, limit) {
        if (string.length < limit) return false;
        return true;
    },
    displayError: function (labelNode, string) {
        labelNode.color = cc.Color.RED;
        labelNode.parent.active = true;
        let label = labelNode.getComponent('cc.Label');
        label.string = string;
        return;
    },
    displayCorrect: function (labelNode, string) {
        labelNode.color = cc.Color.GREEN;
        labelNode.parent.active = true;
        let label = labelNode.getComponent('cc.Label');
        label.string = string;
        return;
    },
    primeNumber: function (number) {
        let array = Array(number).fill(true);
        let primeArray = [];

        for (let i = 2; i < number; i++) {
            if (array[i] === true) {
                primeArray.push(i);
                for (let j = i * i; j < number; j += i) {
                    array[j] = 0
                }
            }
        }
        return primeArray;
    },
    factorial: function (number) {
        if (number === 0 || number === 1) return 1;

        return number * this.factorial(number - 1);
    },
    generateRainbowText: function (string) {
        let rainbowColor = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#ffff00', '#bfff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff', '#00bfff',
            '#0080ff', '#0040ff', '	#0000ff', '#4000ff', '#8000ff', '#bf00ff', '#ff00ff', '#ff00bf', '#ff0080', '#ff0040', '#ff0000'];
        let result = '';
        let stringArray = string.split('');
        stringArray.forEach((element, index) => {
            let color = rainbowColor[index % rainbowColor.length];
            let temp = `<color=${color}>${element}</c>`;
            result += temp;
        })
        return result;
    },
}

module.exports = utilities;