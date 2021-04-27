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
for (let counter = 0; counter <= 8; counter++) {
    for (let rows = " "; ;rows += "# ") {
        if (rows.length % 2 === 0) {
            console.log(rows+=" #");
            break;
        }
    }
}