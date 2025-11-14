const accId = 123456;
let accEmail = "mikuljain09@gmail.com";
var accPassword = "Mikul@1234";
accCity = "Pune";
let accState;
accId
console.log(accId);
/*
we should not use var to declare variables as it is outdated. It has global scope and can create issues in large applications.
It's better to use let and const to declare variables.
*/
console.table([accEmail,accPassword,accCity, accState]);
