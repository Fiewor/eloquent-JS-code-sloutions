/*
function countBs(str) {
    return [...str.matchAll(/B/g)].length;
}

console.log(countBs("BeaBadoBee"));
*/

let word = "BeabBadoBee";
let count = 0;

for (const letter of word) {
    if (letter === "B") count++;
}
console.log(count);