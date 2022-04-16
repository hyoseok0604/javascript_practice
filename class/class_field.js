// class field
class User { 
    name = 'hyoseok';
}

let user = new User();
console.log(user.name); // hyoseok
console.log(User.prototype.name); // undefined

class Printer {
    constructor(value) {
        this.value = value;
    }

    print() {
        console.log(this.value);
    }
}

let printer = new Printer('Hello World!');

setTimeout(printer.print, 100); // undefined
// losing this
// 1.
setTimeout(() => printer.print(), 100); // Hello World!
// 2. binding
setTimeout(printer.print.bind(printer), 100); // Hello World!
// 3. use class field
class PrinterBind {
    constructor(value) {
        this.value = value;
    }

    print = () => {
        console.log(this.value);
    }
}
let printerBind = new PrinterBind('Printer Bind');
setTimeout(printerBind.print, 100); // Printer Bind