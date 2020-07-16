function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
let myIdentity1 = identity;

console.log("string: " + myIdentity("er"));
console.log("number: " + myIdentity1(11));

// generic class
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };