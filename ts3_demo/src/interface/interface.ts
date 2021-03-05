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

let mySquare = createSquare({ width: 100, colour: "red"} as SquareConfig);
let mySquare1 = createSquare({ width: 100, color: "black" });

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

interface ClockInterface1 {
    currentTime: Date;
}

class Clock implements ClockInterface1 {
    currentTime: Date;
    constructor(nowTime: Date) {
        this.currentTime = nowTime;
    }
}

class Clock1 implements ClockInterface1 {
    currentTime: Date;
    constructor(h: number, m: number) {
        console.log("h: " + h + ", m: " + m);
    }
}

let clock1 = new Clock1(12, 11);
console.log(clock1);

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greet;
    }
}

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string
}