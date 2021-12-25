function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) {
        // console.log(i, n % i);
        if (n % i == 0) {
            return "This is not prime Number";
        }
    }
    return 'This is Prime Number';
}

var result = isPrimeNumber(73);
console.log(result);