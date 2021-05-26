// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1) {
//         return false;
//     } else if (n < 0) {
//         return `${n} is less than zero`;
//     } else {
//         return isEven(n - 2);
//     }
// }
// console.log(isEven(-1));

// function countBs(string) {
//     let length =  string.length - 1;
//     let counter = 0;
//     for(let i = 0; i < length; i++) {
//         if (string[i] === "B") {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(countBs("BeaBadoBee has a Big BumBumBum just like BimBola"));

// let counter = 0;
// function countChar(string, char) {
//     for (let i = 0; i <= string.length - 1; i++) {
//         if (string[i] === char) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countChar("BeaBadobee", "-"));

// let arr = [];
// range = (start, end) => {
//     for(let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// let counter = 0;
// sum = (arr) => {
//     for(let i = 0; i <= arr.length - 1; i++) {
//         counter += arr[i];
//     }
//     return counter;
// }
// console.log(sum(range(1, 100)));

// let arr = [];
// function rangeModified (start, end, step) {
//     if (start < end) {
//         countUp(start, end, step, arr);
//     } else {
//         countDown(start, end, step, arr);
//     }
//     return arr;
// }
// function countUp (start, end, step, arr) {
//     for(let i = start; i <= end; i+=step) {
//         if (!step) {
//             step = 1;
//         }
//         arr.push(i);
//     }
//     return arr;
// } 
// function countDown (start, end, step, arr) {
//     for(let i = start; i >= end; i+=step) {
//         if (!step) {
//             step = -1;
//         }
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(rangeModified(5, 2, -1));

// reverse an array in place
// let newArr = [];
// function reverseArray(array) {
//     for(let i = 1; i <= array.length; i++) {
//         lastItem = array[array.length - i];
//         newArr.push(lastItem);
//     }
//     return newArr;
// }
// reverse an array in place
function reverseArrayInPlace(array) {
    for(let i = 1; i <= array.length; i++) {
        lastItem = array[array.length - i];
        array.unshift(lastItem);
    }
    return array;
}
console.log(reverseArrayInPlace(["freeCodeCamp", 1, 6, false, "azure"]));