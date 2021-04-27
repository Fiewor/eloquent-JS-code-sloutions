/*
const countBs = (string) => { // using the arrow method of defining a function for no reason at all
    let number = 0;
    for(let counter = 0; counter < string.length; counter++) {
        if (string[counter]==="B") { // check if the string has "B" using square bracket notation
            number++; //supposed to increment the number of "B"s in the string
        }
    }
    console.log(number);
}
console.log(countBs("BeaBadoBeB"));
*/


function countChar(string, char) {
    let number = 0;
    for(let counter = 0; counter < string.length; counter++) {
        if (string[counter]===char) {
            return number++;
        }
        console.log(number);
    }
}
console.log(countChar("Kamado Tanjiro Total Concentration Breathing", "a"));
