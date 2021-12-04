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


function getFormat(fileName) {
    let file = fileName.slice(fileName.indexOf('.'));
    return file
}

function findDifference(array1, array2) {
    let result = [];
    array2.forEach((element, index) => {
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
        return (element === element.toLowerCase());
    }
}

let password = 'Tu123456'.split('');

let uppercase = 'A';
let lowercase = 'a';

console.log(isLowerCase(password, 0));