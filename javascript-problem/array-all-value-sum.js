function arrayAllValueSum(n) {
    var array = [];
    for(var i = 0; i < n; i++) {
        var randomNumber = Math.random() * n;
        randomNumber = Math.ceil(randomNumber);
        array[i] = randomNumber;
    }
    console.log(array);

    var arrayValueSum = 0;
    for(var i = 0; i < array.length; i++) {
        arrayValueSum = arrayValueSum + array[i];
    }
    return arrayValueSum;
    
}
var result = arrayAllValueSum(100);
console.log(result);





