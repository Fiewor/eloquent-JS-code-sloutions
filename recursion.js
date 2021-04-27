/*
function isEven(number){
}
*/
//this way of writing functions simply means "this input (the parameters) produces this result(the body)"
const isEven = (number) => {
    
    if (number === 0) {
        return "Even";

    } else if (number === 1) {
        return "Odd";

    } else {
        return isEven(number - 2);
    }
}
console.log(isEven(-1));