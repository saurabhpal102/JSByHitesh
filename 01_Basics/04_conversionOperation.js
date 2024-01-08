let score = "Saurabh";
let rollNo = "123";
let mixedRollNo = "123abc";
console.log(score);

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber); //value of String conversion gives Nan(Not a Number) but data type is changed to Number

let rollNoInNumber = Number(rollNo);
console.log(typeof rollNoInNumber);
console.log(rollNoInNumber);// "123" value of this string conversion is 123 and datatype is number and vice versa

let changedMixedRollNo = Number(mixedRollNo);
console.log(typeof changedMixedRollNo);
console.log(changedMixedRollNo);// "123abc" value of this string conversion is Nan(Not a Number) and datatype is number

let isLoggedIn = 1;
let chngedToBoolean = Boolean(isLoggedIn);
console.log(typeof chngedToBoolean);
console.log(chngedToBoolean);// gives true and vice versa and datatype is boolean

// **********************************OperatorAndOprands******************************* 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);

let stat1 = "Rudra";
let stat2 = "Nath";

let stat3 = stat1 + stat2;

console.log(stat3);
console.log("1" + 2); // return 12
console.log(1 + "2");// return 12
console.log("1" + "2"); // return 12
console.log("1" + 2 + 3); // return 123
console.log(1 + 2 + "3"); // return 32
console.log((3 + 4) * 5 % 3);
console.log(+true); // return 1
console.log(+ + true); //return 1
// console.log(true +); syntax error
// console.log(true ++); syntax error
console.log(+"");

let randomNum = 23;
++randomNum;
console.log(randomNum);