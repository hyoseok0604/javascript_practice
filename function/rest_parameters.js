// rest parameters

function sum1(a, b) {
    return a + b;
}

console.log(sum1(1,2,3,4,5)); // 3

function sum2(...args) {
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

console.log(sum2(1,2,3,4,5)); // 15

// spread syntax
let arr = [1, 2, 3, 4, 5];

console.log(sum2(arr)); // 01,2,3,4,5
console.log(sum2(arr[0], arr[1], arr[2], arr[3], arr[4])); // 15
console.log(sum2(...arr)); // 15

let arr1 = [0, 2, 4, 8];
let arr2 = [1, 3, 5, 7];

let arr3 = [...arr1, ...arr2];
console.log(arr3);