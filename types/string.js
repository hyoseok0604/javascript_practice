// string

let str1 = "String1";
let str2 = 'String2';
let str3 = `${str1} ${str2}`;

// '', "" vs ``

// 1. multi line string
let multi1 = "String line number1\n" +
"String line number2";
let multi2 = `String line number1
String line number2`;

console.log(multi1);
console.log(multi2);
console.log(multi1 === multi2); // true

// 2. Expression interpolation
var a = 1;
var b = 2;
console.log("A + B is " + (a + b));
console.log(`A + B is ${a + b}`);

// 3. Tagged templates
function customTag(strings, nameExp, ageExp, myAgeExp) {
    // strings = ["My friend ", " is ", "", " than me."]

    // string type
    console.log(typeof nameExp);
    // number type
    console.log(typeof ageExp);

    var compareStr;
    if (ageExp > myAgeExp) {
        compareStr = "older";
    } else if(ageExp < myAgeExp) {
        compareStr = "younger";
    } else {
        return "My friend is the same age as me."
    }

    return strings[0] + nameExp + strings[1] + compareStr + strings[3];
}

var name = 'Hyoseok';
var age = 222;
var myAge = 23;

var out = customTag`My friend ${name} is ${age}${myAge} than me.`;
console.log(out);
