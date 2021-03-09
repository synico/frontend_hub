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

let filter: Filter = (array, f) => array.filter(f);

let rst = filter([1, 2, 3], _=>_>2);
console.log('rst: ' + rst);

let names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin'}
];

let rstString = filter(names, _=>_.firstName.startsWith('b'));
console.log('rstString: ' + rstString.length);