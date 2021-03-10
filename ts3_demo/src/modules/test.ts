import { StringValidator } from "./Validation"
import { ZipCodeValidator } from "./ZipCodeValidation"
import { LettersOnlyValidator } from "./LettersOnlyValidator"

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: StringValidator; } = {};
validators["Zip code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

strings.forEach(s => {
  for (let name in validators) {
    console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" :
  "does not match" } ${name}`);
  }
});

let e: true = true;
let f: boolean = true;

let a: {
  b: number
  c?: string
  [key: number]: boolean
}

a = { b: 10, 10: true, 20: false}

console.log(a[10]);


type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => {
  return array.filter(f);
}
let rst = filter([1, 2, 3], _=>_>2);
console.log('rst: ' + rst);

let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin'}
];

let rstString = filter(names, _=>_.firstName.startsWith('b'));
console.log('rstString: ' + rstString.length);

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result: Array<U> = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}


type Greet = (name?: string) => string

let theGreet: Greet = (name = 'God') => {
  return "Hello, " + name;
}

console.log(theGreet());

type Greeting = {
  (name?: string): string
}

let theGreeting: Greeting = (name) => {
  return "Hello, greeting " + name;
}
console.log(theGreeting('Nick'));

interface MyGreet {
  (name?: string): string
}

let theMyGreet: MyGreet = (name) => {
  return "Hello, my greet " + name;
}
console.log(theMyGreet('Jack'));

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

// let warnUser: WarnUser = (warning: string) => {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true
//   alert(warning);
// }

// warnUser.wasCalled = false;
