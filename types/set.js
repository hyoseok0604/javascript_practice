// set

let set = new Set();

let admin = { name: 'admin' };
let me = { name: 'hyoseok' };

set.add(admin);
set.add(me);
set.add(me);

console.log(set.size); // 2

for (let user of set) {
    console.log(user);
}