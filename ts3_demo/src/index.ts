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