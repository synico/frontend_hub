
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) {}

    myLog() {
        console.log("my log");
        return;
    }
}

interface Loggable {
    level: string;
    log(): void;
}

class ConsoleLogger implements Loggable {
    level: string = "INFO";
    constructor(level: string) {
        this.level = level;
    }
    log(): void {
        console.log("console log");
    }
}

var jim = extend(new Person("Jim"), new ConsoleLogger("DEBUG"));
var n = jim.name;

console.log("name: " + n);
jim.log();
if (jim.hasOwnProperty("log")) {
    console.log("has own property 'log'");
} else {
    console.log("does not have log property");
}

class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter1("world");
console.log(greeter.greet());