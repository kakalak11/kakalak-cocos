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
