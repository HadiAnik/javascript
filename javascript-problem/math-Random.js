var num = 2.3548;
// Math floor korar jonno
var result = Math.floor(num);
console.log("2.3548 prospective floor :", result);

// Math ceil korar jonno
result = Math.ceil(num);
console.log("2.3548 prospective ceil :", result);

// Math round korar jonno
result = Math.round(num);
var num2 = 2.536;
var result2 = Math.round(num2);
console.log("2.3548 prospective round :", result, ", 2.536 prospective round :", result2);

// Math Random korar jonno
function randomNumber(n) {

    // // Multiple random number chaile ai ta
    // for (var i = 1; i <= n; i++) {
    //     var randomNumber = Math.random() * n;
    //     random = Math.ceil(randomNumber);
    //     console.log("Random Number :", random);
    // }
    
    {
        // Single random number chaile ai ta
        var randomNumber = Math.random() * n;
        random = Math.ceil(randomNumber);
        console.log("Random Number :", random);
        return random;
    }
}

randomNumber(60);