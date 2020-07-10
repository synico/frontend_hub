interface LabelledValue {
    label: string;
}

function printLabel(labelledObject: LabelledValue) {
    console.log(labelledObject.label)
}

let myObj = { size: 10, label: "Size 10 Object"};
printLabel(myObj);

// option bags
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log("newSquare: " + createSquare({color: "black", width: 13}).area);

// indexable type
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray[0]);
