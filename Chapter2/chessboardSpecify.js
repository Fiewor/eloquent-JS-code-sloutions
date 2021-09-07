let string1 = " # # # #";
let string = "# # # #";
let stringWidth = 4;
let stringHeight = 4;
for (string = "# # # #"; string.length <= stringWidth+stringHeight; string += " ") {
    if (string.length % 2 === 0) {
        console.log(string1);
    } else {
    console.log(string);
    }
}