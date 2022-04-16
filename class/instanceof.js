// instanceof
class User{}
let user = new User();

console.log(user instanceof User); // true

let arr = [1,2,3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

class Foo {
    static [Symbol.hasInstance](obj) {
        if(obj.b) return true;
        else return false;
    }
}

let obj1 = {};
let obj2 = { b: true }

console.log(obj1 instanceof Foo); // false
console.log(obj2 instanceof Foo); // true
