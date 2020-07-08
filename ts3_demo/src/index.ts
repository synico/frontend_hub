const hello: string = 'Hello, Nick Liu';
console.log(hello);

// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let age: number = 37;

console.log(octalLiteral);

// string
let uName: string = "bob";
uName = "smith";

let sentence: string = `Hello, my name is ${uName}.
I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ['hello', 10];

// enum
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Blue;

// any
let notSure: any = 4;
// notSure.ifItExists();
notSure.toFixed();

// void
function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

// type assertion
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// -----------------------------------------------

function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(f());

console
for (var i = 0; i < 10; i++) {
    console.log("i before: " + i);
    setTimeout(function() {console.info(i);}, 100 * i);
    console.log("i after: " + i);
    (function(i) {
        setTimeout(function() { console.info(i); }, 100 * i);
    })(i);
}

function f1(input: boolean) {
    let a = 100;

    if (input) {
        let b = a + 1;
        return b;
    }

}

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Shanghai";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

console.log(theCityThatAlwaysSleeps());