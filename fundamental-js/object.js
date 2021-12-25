var student = { id: 121, phone:12345, name:"Hadi"};
var student2 = { id:122, phone:235468, name:"Khalid"};

var phoneNo = student.phone;  //First mathode
var phoneNo1 = student["phone"]; //Second Mathode

var phoneProNo = "phone"; //Third Mathode
var phoneNo2 = student[phoneProNo];





console.log(student);
console.log(phoneNo); //First mathode
console.log(phoneNo1); //Second Mathode
console.log(phoneNo2); //Third Mathode

console.log(student2);

// kno proparty ar information update korte hole 3 ta mathode follow korte pari
student2.phone = 1111111111111; //update phone No
console.log(student2);

student2["phone"] = 22222222222;
console.log(student2);

student2[phoneProNo] = 33333333333;
console.log(student2);

// jodi kno object a information add korte jai ta hole 

student2.cenima = "Ogni22";
student2["newCenima"] = "Ogni33333333";
console.log(student2);