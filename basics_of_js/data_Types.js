"use strict";
//alert is not used in modern js development
console.log("Data Types in JavaScript");
console.log(3
    +3
);
let firstName = "Miku";
let lastName = "Jain";
let fullName = firstName + " " + lastName;
console.log("Full Name is: " + fullName);
console.log(typeof fullName); //string
let isLoggedIn = false;
console.log(typeof isLoggedIn);//boolean
//null type
let emptyVar = null;
console.log(typeof emptyVar);//object
//undefined type
let undefVar;
console.log(typeof undefVar);//undefined
//number type
let myPhoneNumber = 9876543210;
console.log(typeof myPhoneNumber);
//bigint type
let myBigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof myBigIntNum);
//symbol type
let symbolVar = Symbol("My Symbol");
console.log(typeof symbolVar);
//object type
let myObject = {
    name: "Miku",
    age: 21,
    isStudent: true
};
console.log(typeof myObject);
console.table(myObject);
console.log(typeof undefined); //undefined");
console.log(typeof null); //objectthis is a bug in js important to know