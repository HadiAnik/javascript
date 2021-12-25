function feetToMile(feet) {
    var mile = 0;
    mile = (1/5280) * feet;
    return mile;
}

var result = feetToMile(1000);
var fixResult = result.toFixed(3);
console.log("1000 feet a to Mile :", fixResult);