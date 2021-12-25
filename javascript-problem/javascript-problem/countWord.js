var speace = "Hello, I am Hadiuzzaman Anik. I am 25 years old. I read in BSc in Software Engineering.";
var sumOfAllWord = speace.length;
var blankSpace = 0;
for (let i = 0; i < speace.length; i++) {
    let char = speace[i];
    if (char == " ") {
        blankSpace++;
    }
}
console.log(blankSpace);
sumOfAllWord = sumOfAllWord - blankSpace;
console.log(sumOfAllWord);