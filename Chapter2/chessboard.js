let string1 = " # # # #";
for (string = "# # # #"; string.length < 14; string += " ") {
    if (string.length % 2 === 0) {
        console.log(string1);
    } else {
    console.log(string);
    }
}