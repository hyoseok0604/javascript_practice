// logical operators

// logical OR
console.log(true || true, true || false, false || true, false || false);

if (1 || 0) { // = (true || false)
    console.log("true");
}

// find first truthy and return it, if can't find truthy return last
console.log(1 || 0); // 1, NOT true
console.log(false || "Hello~"); // Hello~, NOT true
console.log(false || "" || "Hi"); // Hi

// logical AND
console.log(true && true, true && false, false && true, false && false);

// find first falsy and return it, if can't find falsy return last
console.log(1 && 0); // 0, NOT false

// logical NOT
console.log(!true, !false);

// Double logical NOT operator is same as Boolean.
console.log(!!"Hello", Boolean("Hello"));