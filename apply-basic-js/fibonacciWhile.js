function fibonacci(n) {
    var fibo = [0, 1];
    var i = 2;
    while (i <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]; 
        i++;
    }
    return fibo;
}

var result = fibonacci(11);
console.log(result);