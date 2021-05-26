/*for (let counter = "#"; counter.length <= 7; counter += "#") {
    console.log(counter);
}
*/
/*
for (let number = 1; number <=100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
*/
let array = [];
function fizzBuzz() {
    for (let n = 1; n <= 100; n++) {
        if (n % 3 === 0 && n % 5 === 0){
            array.push("FizzBuzz")
        } else if(n % 3 === 0) {
            array.push("Fizz");
        } else if(n % 5 === 0) {
            array.push("Buzz")
        } else {
            array.push(n);
        }
    }
    return array;
}
fizzBuzz();

/*
let even = "# # # # ";
let odd = " # # # #";
for (let counter = 0; counter < 8; counter++) {
    if (counter % 2 === 0) {
        console.log(even)
    } else {
        console.log(odd);
    }
}
*/
/*
let size = 8;
let board = "";

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if ((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
*//*
function min(a, b) {
    if (a < b) {
        console.log(a + " is the smallest number");
    } else if ( a === b){
        console.log(a + " is equal to " + b);
    } else {
        console.log(b + " is the smallest number");
    }
}
min(85, 8);
*//*
function isEven(number) {
    if (number === 0) {
        return "even";
    } else if (number === 1) {
        return "odd";
    } else {
        return isEven(number - 2); 
    }
}
console.log(isEven(-1));
*//*
let codeCamp = string => {
    let newString = "";
    if (string.length === 0) {
        return newString += string[string.length];
    } else {
        return codeCamp(string.length - 1);
    }
}
console.log(codeCamp("freeCodeCamp"));
*//*
let codeCamp = string => {
    let newString = "";
    for (let counter = string.length - 1; counter >= 0; counter--) {
        newString += string[counter];
    }
    console.log(newString);
}
codeCamp("freeCodeCamp");
*/
function countBs (string) {
    let count = 0;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] == "B"){
            count++;
        }
        return count;
    }
}
console.log(countBs("BeabadoBee"));