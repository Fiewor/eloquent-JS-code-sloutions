let size = 8;       // this is the variable setting
let board = "";     // this is the empty string

for (let y = 0; y < size; y++) { // in the outer loop we add newline to seperate rows
    for (let x = 0; x < size; x++) {
        /* every inner loop represents a line, and alternatively, it's adding
        either " " or "#" to the string that's being populated */
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board)