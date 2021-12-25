function checkPrimeNumber(n) {
    for (var i = 2; i < n; i++) {
        console.log(i, ", This a Number :", n, ", This is modulas :", n%i);
        if (n%i == 0) {
            return "This number NOT a prime number";
        }
    }
    return "This number is Prime Number";
}

var result = checkPrimeNumber(10);
console.log(result);