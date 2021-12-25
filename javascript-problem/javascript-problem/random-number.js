function randomNumberCreate(n) {
    for (let i = 1; i < n; i++) {
        const element = Math.random() * 6;
        var randomNumber = Math.round(element);
        console.log(randomNumber);
    }
    return randomNumber;
}

var result = randomNumberCreate(6);
console.log(result);