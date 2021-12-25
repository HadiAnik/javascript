function factorial(n) {
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial = factorial  * i;
        i++;
    }
    return factorial;
}

var result = factorial(3);
console.log(result);