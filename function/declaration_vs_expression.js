// Function Declaration vs Function Expression

// 1. Syntax
{
    function helloWorld() {
        console.log("Hello World");
    }
}
{
    let helloWorld = function() {
        console.log("Hello World!");
    };
}

// 2. When function is created
{
    say("hyoseok");
    function say(name) {
        console.log(`Say ${name}`);
    }
    say("admin");
}

{
    // say("hyoseok"); // ReferenceError: Cannot access 'say' before initialization
    let say = function(name) {
        console.log(`Say ${name}`);
    }
    say("admin");
}
