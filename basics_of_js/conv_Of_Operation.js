let age;
age = "25abc";
console.log(typeof age);
let valueInNumber = Number(age);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN - Not a Number
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0 
let isLoggedIn = 1;
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); //true
let someNumber = "";
let booleanSomeNumber = Boolean(someNumber);
console.log(booleanSomeNumber); //false
//"" => false; "abc" => true
//0 => false; 33 => true
//null => false; " " => true
//NaN => false; "0" => true
