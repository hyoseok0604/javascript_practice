// comparison operator

console.log('2' > 1); // true
console.log('01' == 1); // true

// == vs ===
console.log(0 == false); // true
console.log('' == false); // true

console.log(0 === false); // false
console.log('' === false); // false

// null, undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// null
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true