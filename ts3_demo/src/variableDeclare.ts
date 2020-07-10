let obj = {
    a: "foo",
    b: 12,
    c: "bar"
};

let {a, b} = obj;
console.log("a: " + a + ", b: " + b);

let {a: newName1, b: newName2} = obj;
console.log("newName1: " + newName1 + ", newName2: " + newName2);

function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
    console.log("func keepWholeObject, a: " + a + ", b: " + b);
}
let wholeObj = { a: "first" };
keepWholeObject(wholeObj);