var friendsAge = [15, 17, 14, 16];

// index thake akti value variable a anar jonno
var sonaliAge = friendsAge[2];
// index a value change korar jonno
friendsAge[1] = 21;

console.log(friendsAge);

// sesh a element add korar jonno
friendsAge.push(15);
friendsAge.push(19);

console.log(friendsAge);

// sesh a element Delete korar jonno
console.log("Array te sesh element delete kora hoyce");
friendsAge.pop();
console.log(friendsAge);


// Length dekhar jonno
console.log(friendsAge.length)


// Array index ar first a element add korar jonno
console.log("Array te first element add kora hoyce");
friendsAge.unshift(5);
console.log(friendsAge);
console.log(friendsAge.length);

//  Array index ar first a element delete korar jonno
console.log("Array thake first element delete kora hoyce");
friendsAge.shift();
console.log(friendsAge);
console.log(friendsAge.length);