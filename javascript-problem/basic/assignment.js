function feetToMile(feet) {
    var mile = 0;
    mile = (1 / 5280) * feet;
    return mile;
}


function woodCalculator(chear, table, bed) {
    var totalWood = 0;
    var totalChear = 1;
    totalChear = totalChear * chear;
    var totalTable = 3;
    totalTable = totalTable * table;
    var totalBed = 5;
    totalBed = totalBed * bed;
    totalWood = totalChear + totalTable + totalBed;
    return totalWood;
}

function brickCalculator(totalFloorNumber) {
    var totalBrick = 0;
    if (totalFloorNumber <= 10) {
        totalBrick = totalFloorNumber * 15 * 1000;
    }
    else if (totalFloorNumber <= 20) {
        let first10Floor = 10 * 15 * 1000;
        let remainder = totalFloorNumber - 10;
        totalBrick = first10Floor + remainder * 12 * 1000;
    }
    else {
        let first10Floor = 10 * 15 * 1000;
        let second10Floor = 10 * 12 * 1000;
        let remainder = totalFloorNumber - 20;
        totalBrick = first10Floor + second10Floor + remainder * 10 * 1000;
    }
    return totalBrick;
}




var result = feetToMile(1000);
var fixResult = result.toFixed(3);
console.log("1000 feet a to Mile :", fixResult);


var wood = woodCalculator(1, 5, 1);
console.log("Total wood neew :", wood ," QBick");

var totalBric = brickCalculator(23);
console.log("Total need :", totalBric, " brick");