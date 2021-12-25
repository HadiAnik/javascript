var object = { id: 121, phone:123456, name: "Hadiuzzaman"};

var userName = object.name;
console.log(userName);

var uName = object["name"];
console.log(uName);
 var uNamePro = "name";
 uNamePro = object[uNamePro];
 console.log(uNamePro);

//  update

object.name = "Khalid";
console.log(object.name);

var uName = object["name"];
console.log(uName);

console.log(object);

object.cinama = "Ogni2";
console.log(object);