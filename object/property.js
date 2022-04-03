// object property
"use strict";
// property descriptor
let me = {
    name: 'hyoseok',
};

let descriptor = Object.getOwnPropertyDescriptor(me, 'name');

console.log(descriptor);
// {
//     value: 'hyoseok',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// define property
me = {};

Object.defineProperty(me, "name", {
    value: "hyoseok",
});

descriptor = Object.getOwnPropertyDescriptor(me, 'name');

console.log(descriptor);
// {
//     value: 'hyoseok',
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// writable flag
me = {
    name: 'hyoseok',
};

Object.defineProperty(me, 'name', {
    writable: false,
});

// me.name = 'admin'; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

