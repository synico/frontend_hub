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


type Filter1 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
let filter1: Filter1 = (array, f) => array.filter(f);
let filter2: Filter1 = (array, f) => {
    let rst = array.slice(0, 0);
    for (let i = 0; i < array.length; i++) {
        if (f(array[i])) {
            rst.push(array[i]);
        }
    }
    return rst;
}
let rst2 = filter2([1, 2, 3, 4], _ => _ > 2);
console.log("rst2: " + rst2);

type Filter3<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
let filter3: Filter3<number> = (array, f) => array.filter(f);
let rst3 = filter3([1, 2, 3, 4], _=>_> 2);
console.log("rst3: " + rst3);

type Filter4 = <T>(array: T[], f: (item: T) => boolean) => T[];

function filter5<T>(array: T[], f: (item: T) => boolean): T[] {
    let rst = array;
    return rst;
}

let set = new Set;
set.add(1).add(2);
set.has(2);

type A = number
type B = A | string
type Food = {
    calories: number
}
interface test extends Food {

}