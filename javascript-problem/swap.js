// Swap with Temp variable 
console.log("Swap with Temp variable");
var a = 5;
var b = 7;
console.log("Before swap: a =", a, ", b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ", b =", b);


//  Swap with math Somikoron
console.log("Swap with math Somikoron");
var x = 5;
var y = 7;
console.log("Before swap: x =", x, ", y =", y);
x = y + x;
y = x - y;
x = x - y;
console.log("After swap: x =", x, ", y =", y);


// JavaScript mathode
console.log("JavaScript mathode");
var p = 5;
var q = 7;
console.log("Before swap: p =", p, ", q =", q);
[p, q] = [q, p];
console.log("After swap: p =", p, ", q =", q);


