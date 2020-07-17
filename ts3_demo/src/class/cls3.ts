namespace Class3 {

    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            (<any>result)[id] = (<any>second)[id];
        }
        return result;
    }

    class Person1 {
        constructor(public name: string) {}
    }

    interface Loggable {
        log(): void;
    }

    class ConsoleLogger implements Loggable {
        log() {
            console.log("ConsoleLogger.log()");
        }
    }

    var nick = extend(new Person1("nick"), new ConsoleLogger());
    var n = nick.name;
    // nick.log();

    //
    type LinkedList<T> = T & { next: LinkedList<T> };
    type Yikes = Array<Yikes>;

    //
    type Alias = { num: number }
    interface Interface {
        num: number;
    }
    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;

    //
    let sym = Symbol();
    Symbol.hasInstance;

    //
    let pets = new Set<string>(["Cat", "Dog", "Hamster"]);
    // pets["species"] = "mammals";

    for (let pet in pets) {
        console.log("for..in: " + pet);
    }

    for (let pet of pets) {
        console.log(pet);
    }

}