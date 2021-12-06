console.log('Hello world');

function primeNumber(number) {
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
}

var utilities = {
    check: () => console.log('utilities has run'),
    passWordCheck: function (password) {
        let passwordArray = password.split('');
        let countUpper = 0;
        let countLower = 0;

        if (!isUpperCase(passwordArray) || !isLowerCase(passwordArray)) {
            cc.log('password needs to have at least 1 capital letter and 1 normal letter');
            return false;
        }

        function isUpperCase(password) {
            password.forEach(element => {
                if (parseInt(element)) return;
                if (element === element.toUpperCase()) countUpper++;
            });
            if (countUpper) return true;
            else return false;
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
        // let userNameArray = username.split('');
        // let countSpecialLetter = 0

        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (spChars.test(username)) {
            return false;
        }
        return true;
    }
}

module.exports = utilities;