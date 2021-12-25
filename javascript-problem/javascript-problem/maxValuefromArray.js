function randomMaxValue(n) {
    var array = [];
    for (let i = 0; i <= n; i++) {
        let element = Math.random() * i;
        element = Math.round(element);
        let arrayPosition = array[i];
        arrayPosition = array.push(element);
    }
    console.log(array);
    console.log("        ");
    // remove duplicate array
    var uniquarray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        var index = uniquarray.indexOf(element);
        if (index == -1) {
            uniquarray.push(element);
        }
    }
    console.log(uniquarray);
    console.log("        ");
    // large Number from array
    var largeNumber = uniquarray[0];
    for (let i = 0; i < uniquarray.length; i++) {
        if (uniquarray[i] > largeNumber) {
            largeNumber = uniquarray[i];
             
        }   
    }
    var indexOFLargeNumber = uniquarray.indexOf(largeNumber); 
    console.log("Index of Large Number :", indexOFLargeNumber + 1, ", Large Number :",largeNumber);
    console.log("        ");
    // sum of all array value
    var arraySum = 0;
    for (let i = 0; i < uniquarray.length; i++) {
        let element = uniquarray[i];
        arraySum = arraySum + element;
    }
    console.log("Sum of all array value :", arraySum);
}

randomMaxValue(100);
