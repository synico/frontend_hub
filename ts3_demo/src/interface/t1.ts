interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick():void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log("constructor of DigitalClock");
    }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log("constructor of AnalogClock");
    }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();

//mixin type
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log("start of counter: " + start);
    };
    counter.interval = 10;
    counter.reset = function() {
        console.log("reset");
    }
    return counter;
}

let counter = getCounter();
let sc = counter(10);
console.log(sc);
counter.reset();
