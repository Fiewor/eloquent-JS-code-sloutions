/*
const square = function(x) {
    return x * x;
}
console.log(square(20)); 
*/

/*
const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 10));
*/

/* 
let x = 10;
if(true) {
    var y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + y + z); 
*/

/*
const halve = function(n) {
    return n / 2;
}
let n = 10;
console.log(halve(100));
console.log(n);
*/

/*
const humus = function(factor) {
    let ingredient = function(amount, unit, name) {
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickenpeas");
    ingredient(5, "cup", "watermeloin");
    ingredient(1, "teaspoon", "sugar");
}
console.log(5, "ml", "Bread");
*/

// define f to hold a function value
const f = function (a) {
    console.log(a + 2);
}

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
let = a => a % 3;