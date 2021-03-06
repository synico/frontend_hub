let strings1 = ["Hello", "98052", "101"];

let validators1: { [s: string]: Validation.StringValidator; } = {};
validators1["ZIP code"] = new Validation.ZipCodeValidator();
validators1["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings1) {
    for (let name in validators1) {
        console.log(`"${ s }" - ${ validators1[name].isAcceptable(s) ? "matches" : 
    "does not match" } ${ name}`);
    }
}