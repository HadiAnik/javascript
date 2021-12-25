function brickCalculator(totalFloor) {
    var totalBrick = 0;
    if (totalFloor <= 10) {
        totalBrick = totalFloor * 15 * 1000;
    }
    else if (totalFloor <= 20) {
        let remainder = totalFloor - 10;
        totalBrick = ((10 * 15) + (remainder * 12)) * 1000;
    }
    else {
        let remainder = totalFloor - 20;
        totalBrick = ((10 * 15) + (10 * 12) + (remainder * 10)) * 1000;
    }
    return totalBrick;
}
var totalBric = brickCalculator(22);
console.log(totalBric);