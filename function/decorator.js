// decorator
function slowFunc(x) {
    console.log(`Call slowFunc(${x})`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slowFunc = cachingDecorator(slowFunc);

// cachingDecorator is a decorator: a special function that takes another function and alters its behavior.

slowFunc(1);
slowFunc(1);

// Using func.call for the context
let something = {
    someMethod() {
        return 100;
    },

    slow(x) {
        console.log(`Call slow(${x})`);
        return x * this.someMethod();
    }
}

console.log(something.slow(10));

// something.slow = cachingDecorator(something.slow);

// console.log(something.slow(10)); // TypeError: this.someMethod is not a function

// func.call(context, ...args)
function say() {
    console.log(this.name);
}

say(); // undefined
let me = { name: 'hyoseok' };
say.call(me); // hyoseok

function cachingDecoratorCall(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

something.slow = cachingDecoratorCall(something.slow);

console.log(something.slow(10)); // 1000

// decorator with args (call)
function cachingDecoratorArgsCall(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        if(cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

// decorator with args (apply)
function cachingDecoratorArgsApply(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        if(cache.has(key)) return cache.get(key);

        let result = func.apply(this, arguments);

        cache.set(key, result);
        return result;
    };
}