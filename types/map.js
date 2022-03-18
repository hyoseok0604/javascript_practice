// map
let map = new Map();

map.set('1', 'str');
map.set(1, 'num');
map.set(true, 'bool');

console.log(map.get(1));
console.log(map.get('1'));

console.log(map.size);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let entry of map) {
    console.log(entry);
}

// object to map
// Object.entries(obj)
let obj = {
    name: 'hyoseok',
    age: 22,
};

let mp = new Map(Object.entries(obj));

console.log(mp.get('name'));

// map to object
let objectFromMap = Object.fromEntries(mp);

console.log(objectFromMap);