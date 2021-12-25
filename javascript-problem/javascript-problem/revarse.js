function revarse(str) {
    var revaeseStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        revaeseStr = char + revaeseStr;
    }
    return revaeseStr;
}

var speace = "Hello, I am Hadiuzzaman Anik. I am 25 years old. I read in BSc in Software Engineering.";
var result =revarse(speace);
console.log(result);