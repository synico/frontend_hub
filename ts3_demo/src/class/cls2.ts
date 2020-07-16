interface Named {
    name: string;
}

class Person {
    name: string = "nick";
}

let p: Named;

p = new Person();

//type compatible
let func1 = (a: number) => 0;
let func2 = (a: number, s: string) => 2;

console.log("before assign func1 to func2: " + func2(1, "func2"));
func2 = func1;
console.log("func2: " + func2(1, "func2"));

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    callback(args);
}

invokeLater([1, 2], (x, y) => console.log(x + ' & ' + y));
invokeLater([1, 2], (x?, y?) => console.log(x + ' : ' + y));