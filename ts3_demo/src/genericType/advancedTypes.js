function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.myLog = function () {
        console.log("my log");
        return;
    };
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(level) {
        this.level = "INFO";
        this.level = level;
    }
    ConsoleLogger.prototype.log = function () {
        console.log("console log");
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger("DEBUG"));
var n = jim.name;
jim.log();
console.log("name: " + n);
if (jim.hasOwnProperty("log")) {
    console.log(jim.log());
}
else {
    console.log("does not have log property");
}
var Greeter1 = /** @class */ (function () {
    function Greeter1(message) {
        this.greeting = message;
    }
    Greeter1.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter1;
}());
var greeter = new Greeter1("world");
console.log(greeter.greet());
