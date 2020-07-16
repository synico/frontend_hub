enum FileAccess {
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite   = Read | Write,
    G = "123".length
}

console.log("Read: " + FileAccess.Read
 + " , Write: " + FileAccess.Write 
 + " , ReadWrite: " + FileAccess.ReadWrite);

 console.log("name of FileAccess: " + FileAccess[FileAccess.Write]);

 const enum Directions {
     Up,
     Down,
     Left,
     Right
 }

 let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];