class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering..." + distanceInMeters);
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping..." + distanceInMeters);
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

export class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number) {
        console.log("Employee.move: " + distanceInMeters);
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
console.log("animal = rhino, " + (animal == rhino));

class Department {
    constructor(public name: string) {

    }

    getName(): string {
        return this.name;
    }
}

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

let numberRegexp: string = "number";