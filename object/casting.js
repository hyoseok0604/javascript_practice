// object to primitive

let me = {
    name: 'hyoseok',
    age: 22,
}

// toPrimitive
// 3 types
// 1 : string
// operator which expect string type
let str = String(me);

// 2 : number
// operator which expect number type
let num = Number(me);
let a = +me;

// 3 : default
// operator which not sure what type expected
if (me == 1) {}

// object to primitive conversion algorithm
// 1. obj[Symbol.toPrimitive](hint) method
// 2. Not 1 and hint is "string", obj.toString() or obj.valueOf()
// 3. Not 1 or 2 and hint is "number" or "default", obj.valueOf() or obj.toString()

// Symbol.toPrimitive must return primitive
me[Symbol.toPrimitive] = function(hint) {
    console.log(`hint : ${hint}`);
    return hint == 'string' ? this.name : this.age;
};

console.log(String(me));
console.log(Number(me));
if (me == 1) {}
