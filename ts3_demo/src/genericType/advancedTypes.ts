
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
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        console.log("console log");
    }
}

var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.myLog();
console.log("name: " + n);
if (jim.hasOwnProperty("log")) {
    console.log(jim.log());
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