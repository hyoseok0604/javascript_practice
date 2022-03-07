// casting
let _null = null;
let _undefined = undefined;
let _number = 123;
let _string = "string";
let _emptyString = "";
let _numberString = "1234";
let _booleanTrue = true;
let _booleanFalse = false;

// 1. cast to string
let nullToString = String(_null); // null
let undefinedToString = String(_undefined); // undefined
let numberToString = String(_number); // 123
let booleanTrueToString = String(_booleanTrue); // true
let booleanFalseToString = String(_booleanFalse); // false

console.log(nullToString, undefinedToString, numberToString, booleanTrueToString, booleanFalseToString);

// 2. cast to number
let nullToNumber = Number(_null); // 0
let undefinedToNumber = Number(_undefined); // NaN
let stringToNumber = Number(_string); // NaN
let emptyStringToNumber = Number(_emptyString); // 0
let numberStringToNumber = Number(_numberString); // 1234
let booleanTrueToNumber = Number(_booleanTrue); // 1
let booleanFalseToNumber = Number(_booleanFalse); // 0

console.log(nullToNumber, undefinedToNumber, stringToNumber, emptyStringToNumber, numberStringToNumber, booleanTrueToNumber, booleanFalseToNumber);

// 3. cast to boolean
let nullToBoolean = Boolean(_null); // false
let undefinedToBoolean = Boolean(_undefined); // false
let stringToBoolean = Boolean(_string); // true
let emptyStringToBoolean = Boolean(_emptyString); // false
let numberStringToBoolean = Boolean(_numberString); // true
let numberToBoolean = Boolean(_number); // true
let zeroToBoolean = Boolean(0); // false

console.log(nullToBoolean, undefinedToBoolean, stringToBoolean, emptyStringToBoolean, numberStringToBoolean, numberToBoolean, zeroToBoolean);
