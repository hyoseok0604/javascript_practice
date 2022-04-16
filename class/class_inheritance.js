// class inheritance
class User {
    constructor(name) {
        this.level = 0;
        this.name = name;
    }

    levelUp() {
        this.level++;
        console.log(`${this.name} Level Up`)
    }

    reset() {
        this.level = 0;
        console.log(`${this.name} reset level`);
    }
}

let user = new User('hyoseok');

class Admin extends User {
    changeLevel(level) {
        this.level = level;
        console.log(`${this.name} change level to ${this.level}`);
    }

    resetAndChangeLevel(level) {
        super.reset();
        this.changeLevel(level);
    }
}

let admin = new Admin('admin');
admin.changeLevel(5); // admin change level to 5
admin.reset(); // admin reset level

admin.resetAndChangeLevel(10);

// if class extends another class and has no constructor, then the following empty constructor is generated.
class A extends User {
    constructor(...args) {
        super(...args);
    }
}

class B extends User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.level = 0;
    }
}

// let b = new B('hyoseok', 22); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class C extends User {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}