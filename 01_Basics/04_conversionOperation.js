let score = "Saurabh";
let rollNo = "123";
let mixedRollNo = "123abc";
console.log(score);

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber); //value of String conversion gives Nan(Not a Number) but data type is changed to Number

let rollNoInNumber = Number(rollNo);
console.log(typeof rollNoInNumber);
console.log(rollNoInNumber);// "123" value of this string conversion is 123 and datatype is number

let changedMixedRollNo = Number(mixedRollNo);
console.log(typeof changedMixedRollNo);
console.log(changedMixedRollNo);// "123abc" value of this string conversion is Nan(Not a Number) and datatype is number

let isLoggedIn = 1;
let chngedToBoolean = Boolean(isLoggedIn);
console.log(typeof chngedToBoolean);
console.log(chngedToBoolean);// gives true and vice versa and datatype is boolean

