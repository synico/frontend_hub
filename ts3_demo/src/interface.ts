interface LabelledValue {
    label: string;
}

function printLabel(labelledObject: LabelledValue) {
    console.log(labelledObject.label)
}

let myObj = { size: 10, label: "Size 10 Object"};
printLabel(myObj);

// option bags
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log("newSquare: " + createSquare({color: "black", width: 13}).area);

// indexable type
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]);

// func type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) : boolean {
    return (source.search(subString) == -1) ? false : true;
}

let mySearch2: SearchFunc;
mySearch2 = function(src, sub) {
    return (src.search(sub) == -1) ? false : true;
}

interface ClockInterface {
    currentTime: Date;
    new (hour: number, minute: number): ClockInterface;
}

class Clock implements ClockInterface {
    constructor(h: number, m: number) { }
}

class Greeter {
    greeting: string;
    // constructor(message: string) {
    //     this.greeting = message;
    // }
    greet() {
        return "Hello, " + this.greet;
    }
}