function maxValue(n) {
    var array = [];
    for(var i = 0; i < n; i++) {
        var randomNumber = Math.random() * n;
        randomNumber = Math.ceil(randomNumber);
        array[i] = randomNumber;
    }
    console.log(array);
    
    var largeNuumber = array[0];
    for(var i = 0; i <= n; i++) {
        if(array[i] > largeNuumber) {
            largeNuumber = array[i];
        }
    }
    var largeNuumberPosition = array.indexOf(largeNuumber);
    largeNuumberPosition = largeNuumberPosition + 1; // because array index start 0 index
    console.log("Array index of large number :", largeNuumberPosition, "    Large Number Is :", largeNuumber);
}

maxValue(30);
