// object this
let me = {
    name: 'hyoseok',
    age: 22,
    say() {
        console.log(this.name);
    }
}

me.say();

function globalFunction() {
    console.log(this.name);
}

globalFunction(); // undefined

me.say2 = globalFunction;
me.say2(); // hyoseok

let admin = {
    name: 'admin',
    age: 30,
}

admin.say = globalFunction;
admin.say(); // admin