// object method

// create object
let me = {
    name: "hyoseok",
    age: 22,
};

// create method 1
me.say = function() {
    console.log("Hello World!");
};

me.say();

// create method 2
function say2() {
    console.log("Hello World2!");
}

me.say2 = say2;

me.say2();

let me2 = {
    name: "hyoseok",
    age: 22,
    say: function() {
        console.log("Hello World");
    },
}

let me3 = {
    name: "hyoseok",
    age: 22,
    say() {
        console.log("Hello World");
    },
}

me2.say();
me3.say();