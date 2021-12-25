function randomArray(n) {
    var array = [];
    for(var i = 0; i < n; i++) {
        var randomNumber = Math.random() * n;
        randomNumber = Math.ceil(randomNumber);
        array[i] = randomNumber;
    }
    return array;
}

// var result = randomArray(10);
// console.log(result);

/**
var array = [3, 53, 29, 100, 59];
console.log(array);
array.push(2000000000000);
console.log(array);
array.pop();
console.log(array);
array.unshift(99999999999999999990);
console.log(array);
array.shift();
console.log(array);
var arraySlice = array.slice(1, 4);
console.log(arraySlice); 

var arraySplice = array.splice(1, 3);
console.log(array);
*/

/** 
function whileLoop(n) {
    var newArray = [0, 1];
    var i = 2;
    while (i < n) {
        newArray[i] = newArray.push(i);
        i++;
    }
    return newArray;
}
var loop = whileLoop(30);
console.log(loop);
*/

function forLoop(n) {
    var nums = [55, 10];
    for(var i = 2; i < n; i++) {
        // var element = nums[i];
        nums[i] = nums.push(i);
    }
    return nums;
}

var loop = forLoop(30);
console.log(loop);