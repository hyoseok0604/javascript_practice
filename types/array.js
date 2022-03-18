// array
let arr1 = new Array();
let arr2 = [];
let abc = ['a', 'b', 'c'];

console.log(abc[0], abc[1], abc[2]);

abc[1] = 'bb';
console.log(abc[1]);

abc[3] = 'd';
console.log(abc[3]);

console.log(abc);

console.log(abc.pop());
console.log(abc);

abc.push('d');
console.log(abc);

console.log(abc.shift());
console.log(abc);

abc.unshift('a');
console.log(abc);

// performance
// push, pop > shift, unshift

// array traversal
for (let i = 0 ; i < abc.length ; i++) {
    console.log(abc[i]);
}

for (let some of abc) {
    console.log(some);
}

// x
for (let some in abc) {
    console.log(abc[some]);
}

// array method
let arr = ["Hello", "World", "!!", "~"];

// splice
arr.splice(1, 1);
console.log(arr);

// slice
console.log(arr.slice(0, 1));
console.log(arr.slice()); // like copy

// concat
let array = [1, 2, 3];

console.log(array.concat([4, 5, 6]));
console.log(array.concat([4, 5], 6));
console.log(array.concat([4], 5, 6));

let arrayLikeObject = {
    0: "something",
    1: "some",
    length: 2,
};

console.log(array.concat(arrayLikeObject));

arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log(array.concat(arrayLikeObject));

// forEach
array.forEach(function(item, index, array) {
    console.log(`${item} is at index ${index} in ${array}`);
});

// indexOf, lastIndexOf, includes
console.log(array.indexOf(1, 0));
console.log(array.indexOf(121321, 0));
console.log(array.includes(1, 0));

// find, findIndex
let res = array.find(function(item, index, array) {

});

let userList = [
    {id: 1, name: "first"},
    {id: 2, name: "second"},
    {id: 3, name: "third"},
];

let user = userList.find(item => item.id === 1);

console.log(user);

// map
let mapResult = arr.map(function(item, index, array) {

});

let names = userList.map(item => item.name);
console.log(names);

// isArray
console.log(typeof {}, typeof []); // object object
console.log(Array.isArray({}), Array.isArray([])); // false true
